import { connectDB } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.MONGO_DB) {
      throw new Error("MONGO_DB 환경변수가 설정되지 않았습니다.");
    }

    const client = await connectDB;
    const collection = client.db(process.env.MONGO_DB).collection("comments");
    const books = await collection.find().toArray();

    return NextResponse.json({ books });
  } catch (error) {
    console.error("Database access error:", error);
    return NextResponse.json({ error: error });
  }
}
