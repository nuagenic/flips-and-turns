/**
 * Archive page of the app.
 */

import { fetchCards } from "@/lib/fetchCards";
import { CardType } from "@/app/page";
import Header from "@/components/Header";
import ArchiveGallery from "@/components/ArchiveGallery";

export default async function Archive() {
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
    <main className="z-0 flex h-full w-full items-start justify-center overflow-auto bg-basic">
      <Header />
      <ArchiveGallery cards={cards} />
    </main>
  );
}
