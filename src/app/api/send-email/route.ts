// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
import { fetchCards } from "@/lib/fetchCards";

export async function POST() {
  try {
    const fetchedCards = await fetchCards();
    const latestCard = fetchedCards[fetchedCards.length - 1];

    // 이메일에 들어갈 params 설정
    const author = latestCard.createdBy;
    const index = fetchedCards.length;
    const rawDate = latestCard.createdAt;
    const addZero = (num: number) => {
      return num < 10 ? "0" + num.toString() : num.toString();
    };
    const parseDate = (rawDate: Date) => {
      return (
        rawDate.getFullYear().toString().slice(2) +
        "/" +
        addZero(rawDate.getMonth() + 1) +
        "/" +
        addZero(rawDate.getDate())
      );
    };
    const year = rawDate.getFullYear().toString().slice(2);
    const month = addZero(rawDate.getMonth() + 1);
    const day = addZero(rawDate.getDate());

    const rawNextDate = new Date(rawDate);
    rawNextDate.setDate(rawNextDate.getDate() + 7);
    const nextDate = parseDate(rawNextDate);

    const sampleEmail = "test@abc.com";
    const to_email = sampleEmail;

    const templateParams = {
      year,
      month,
      day,
      author,
      index,
      nextDate,
      to_email,
    };

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.EMAILJS_PUBLIC_KEY!,
    );

    return NextResponse.json({
      message: "Email sent successfully",
      status: response.status,
      text: response.text,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 },
    );
  }
}
