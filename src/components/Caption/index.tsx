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
    <div className="z-20 mt-2 flex w-full justify-between whitespace-pre text-sm font-normal lg:w-3/4vh lg:text-base">
      <p className="w-30 flex w-1/3 justify-start">{currentCard.createdBy}</p>
      <p className="w-30 flex w-1/3 justify-center">
        {currentIndex + 1 + "/" + cards.length}
      </p>
      <p className="w-30 flex w-1/3 justify-end">{formattedDate}</p>
    </div>
  );
}
