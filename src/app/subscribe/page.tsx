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

    if (!email) throw new Error("Email is required");

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      throw new Error("유효한 이메일 주소를 입력해주세요.");
    }

    const client = await connectDB;
    const collection = client
      .db(process.env.MONGO_DB)
      .collection("subscribers");

    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      client.close();
      throw new Error("이미 구독된 이메일입니다.");
    }

    await collection.insertOne({ email });

    revalidatePath("/subscribe");
  }

  return (
    <main className="flex h-full w-full flex-grow flex-col items-center justify-center overflow-hidden bg-basic">
      <Header />
      <div className="z-20 mb-20 text-3xl">we might be on the same page</div>
      <Form updateItemAction={createSubscription} />
    </main>
  );
}
