/**
 * Show latest flip
 */

import IndexController from "@/components/IndexController";
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

  return (
    <main className="z-0 w-full flex-grow overflow-hidden bg-basic">
      <IndexController cards={cards} initialIndex={cards.length - 1} />
    </main>
  );
}
