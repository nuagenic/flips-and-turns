import SlideshowController from "@/components/SlideshowController";
import { fetchCards } from "@/lib/fetchCards";
import { CardType } from "@/app/page";

export const revalidate = 60;

export default async function HundredthPage() {
  const fetchedCards = await fetchCards();
  const cards: CardType[] = fetchedCards.slice(0, 100).map((card) => {
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
    <main className="z-0 w-full flex-grow overflow-hidden bg-black">
      <SlideshowController cards={cards} />
    </main>
  );
}
