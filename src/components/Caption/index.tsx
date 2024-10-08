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
    <div className="mt-2 flex w-full justify-between whitespace-pre text-sm font-medium lg:w-3/4vh lg:text-xl">
      <p className="w-30 flex justify-start">{currentCard.createdBy}</p>
      <p className="w-30 flex justify-center">
        {currentIndex + 1 + "/" + cards.length}
      </p>
      <p className="w-30 flex justify-end">{formattedDate}</p>
    </div>
  );
}
