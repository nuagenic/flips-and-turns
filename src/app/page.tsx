/**
 * Main page of the app.
 */

import Card from "@/components/Card";
import { fetchCards } from "@/lib/fetchCards";

export default async function Home() {
  const fetchedCards = await fetchCards();
  const cards = fetchedCards.map((card) => {
    const { _id, ...rest } = card;
    return { id: _id.toString(), ...rest };
  });
  console.log(cards);

  return (
    <main className="overflow-hidden w-full h-full">
      <Card cards={cards} />
    </main>
  );
}
