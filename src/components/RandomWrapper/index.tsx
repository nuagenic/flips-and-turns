"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { CardType } from "@/app/page";

type Props = {
  cards: CardType[];
};

export default function RandomWrapper({ cards }: Props) {
  const [startIndex, setStartIndex] = useState<number | null>(null);

  // 클라이언트 사이드에서 랜덤한 인덱스 설정 (서버 캐싱 방지)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setStartIndex(randomIndex);
  }, [cards.length]);

  // Fallback UI
  if (startIndex === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card cards={cards} startIndex={startIndex} />
    </>
  );
}
