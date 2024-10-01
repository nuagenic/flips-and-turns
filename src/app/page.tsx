/**
 * Main page of the app.
 */

import Card from "@/components/Card";
import { fetchCards } from "@/lib/fetchCards";

export type CardType = {
  id: string;
  type: "text" | "image";
  createdBy: "백" | "이";
  createdAt: Date;
  content: string;
};

export default async function Home() {
  const fetchedCards = await fetchCards();
  const cards: CardType[] = fetchedCards.map((card) => {
    const { _id, type, createdBy, createdAt, content } = card;
    return {
      id: _id.toString(),
      type,
      createdBy,
      createdAt,
      content,
    };
  });
  let startIndex = Math.floor(Math.random() * cards.length);
  console.log(startIndex);

  return (
    <main className="overflow-hidden w-full h-full">
      <Card cards={cards} startIndex={startIndex} />
    </main>
  );
}
