import { connectDB } from "@/lib/database";

export async function fetchCards() {
  const client = await connectDB;
  const collection = client.db(process.env.MONGO_DB).collection("cards");
  const cards = await collection.find().toArray();
  return cards;
}
