"use client";

import { CardType } from "@/app/page";

type Props = {
  cards: CardType[];
  currentIndex: number;
};

export default function Caption({ cards, currentIndex }: Props) {
  const currentCard = cards[currentIndex];
  const date = currentCard.createdAt;
  function parseDate(num: number) {
    return num < 10 ? "0" + num.toString() : num.toString();
  }
  const formattedDate =
    date.getFullYear().toString().slice(2) +
    "." +
    parseDate(date.getMonth() + 1) +
    "." +
    parseDate(date.getDate());

  const caption =
    currentCard.createdBy +
    "  |  " +
    formattedDate +
    "  |  " +
    (currentIndex + 1) +
    " / " +
    cards.length;

  return (
    <div className="flex justify-center mt-2 text-sm font-medium whitespace-pre">
      {caption}
    </div>
  );
}
