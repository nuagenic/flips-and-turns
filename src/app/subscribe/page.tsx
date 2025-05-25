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
    <main className="z-0 flex h-full w-full items-center justify-center overflow-auto bg-basic px-2">
      <Header />
      <div className="z-20 flex aspect-square w-full transform flex-col justify-between overflow-auto bg-white p-8 text-black md:h-3/4vh md:w-3/4vh md:p-12 md:text-base lg:h-3/4vh lg:w-3/4vh">
        <div className="z-20 flex w-full flex-col items-start justify-center gap-10 text-xs md:text-sm">
          <Form updateItemAction={createSubscription} />
        </div>
        <div className="z-20 break-keep text-xs leading-5 md:text-sm md:leading-6">
          구독을 하시면 매주 업데이트 되는 flips and turns의 <br />
          새로운 단위 작업을 이메일로 확인할 수 있습니다. <br />
          200은 해치지 않습니다. 그래도 구독 해지를 원하시면
          <b>
            {" "}
            <a href="mailto:flipsandturnsby200@gmail.com">
              flipsandturnsby200@gmail.com
            </a>
          </b>
          으로 연락주세요.
        </div>
      </div>
    </main>
  );
}
