/**
 * Subscribe page of the app.
 */

import Form from "@/components/Form";
import Header from "@/components/Header";
import { connectDB } from "@/lib/database";
import { revalidatePath } from "next/cache";

export default function Subscribe() {
  async function createSubscription(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;

    if (!email) return { error: "이메일 주소를 입력해주세요." };

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      return { error: "유효한 이메일 주소를 입력해주세요." };
    }

    try {
      const client = await connectDB;
      const collection = client
        .db(process.env.MONGO_DB)
        .collection("subscribers");

      const existingSubscriber = await collection.findOne({ email });
      if (existingSubscriber) {
        return { error: "이미 구독하고 계십니다. 감사합니다." };
      }

      await collection.insertOne({ email });
      return { success: true };
    } catch (error) {
      return { error: "오류가 발생했습니다. 다시 시도해주세요." };
    }
  }

  return (
    <main className="flex h-full w-full flex-grow flex-col items-center justify-center overflow-hidden bg-basic p-2">
      <Header />
      <div className="flex grow flex-col justify-center">
        <div className="z-20 mb-20 text-center text-2xl md:text-3xl">
          we might be on the same page
        </div>
        <Form updateItemAction={createSubscription} />
      </div>
      <div className="z-20 mb-5 text-center text-xs">
        200은 해치지 않습니다. 그래도 구독 해지를 원하시면{" "}
        <b>flipsandturnsby200@gmail.com</b>으로 연락주세요.
      </div>
    </main>
  );
}
