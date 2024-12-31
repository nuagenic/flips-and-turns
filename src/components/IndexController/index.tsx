"use client";

import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { CardType } from "@/app/page";

type Props = {
  cards: CardType[];
  initialIndex?: number;
};

// 인덱스를 통해 헤더와 카드의 상태를 결정
export default function IndexController({ cards, initialIndex }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [flipState, setFlipState] = useState<string | null>(null);

  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
    const divWidth = event.currentTarget.offsetWidth;
    if (event.clientX > divWidth / 2 && currentIndex! < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex! + 1);
      setFlipState("next");
    } else if (event.clientX < divWidth / 2 && currentIndex! > 0) {
      setCurrentIndex((prevIndex) => prevIndex! - 1);
      setFlipState("prev");
    }
  };

  useEffect(() => {
    const preventZoom = (event: TouchEvent | GestureEvent) => {
      if (event instanceof TouchEvent && event.touches.length > 1) {
        event.preventDefault(); // 두 손가락 확대 방지
      } else if (event instanceof GestureEvent) {
        event.preventDefault(); // 제스처 확대 방지
      }
    };

    document.addEventListener("touchstart", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventZoom);

    return () => {
      document.removeEventListener("touchstart", preventZoom);
      document.removeEventListener("gesturestart", preventZoom);
    };
  }, []);

  // 클라이언트 사이드에서 랜덤한 인덱스 설정 (서버 캐싱 방지)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    initialIndex ? setCurrentIndex(initialIndex) : setCurrentIndex(randomIndex);
  }, [cards.length, initialIndex]);

  // prevIndex를 Card Component에 props로 전달해주기 위함
  useEffect(() => {
    if (currentIndex !== null) {
      setPrevIndex(currentIndex);
    }
  }, [currentIndex]);

  // Fallback UI
  if (currentIndex === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header currentIndex={currentIndex} length={cards.length} />
      <div className={`flex h-full w-full items-center`} onClick={handleFlip}>
        <Card
          cards={cards}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          flipState={flipState}
        />
      </div>
    </>
  );
}
