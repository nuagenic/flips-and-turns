"use client";

import { useState } from "react";
import { CardType } from "@/app/page";
import Caption from "@/components/Caption";
import ProgressBar from "@/components/ProgressBar";

type Props = {
  cards: CardType[];
  startIndex: number;
};

export default function Card({ cards, startIndex }: Props) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  // 각 카드들의 회전 각도를 저장하는 state. 처음 렌더링에서 보여질 카드만 0도(앞면)로 설정.
  const [rotationAngles, setRotationAngles] = useState<number[]>(() =>
    Array.from({ length: cards.length }, (_, i) => (i === startIndex ? 0 : 180))
  );
  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardWidth = event.currentTarget.offsetWidth;
    const newAngles = [...rotationAngles];

    if (event.clientX > cardWidth / 2) {
      // 화면 우측 클릭
      if (currentIndex === cards.length - 1) return;
      newAngles[currentIndex] += 180;
      newAngles[currentIndex + 1] += 180;
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // 화면 좌측 클릭
      if (currentIndex === 0) return;
      newAngles[currentIndex] -= 180;
      newAngles[currentIndex - 1] -= 180;
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    setRotationAngles(newAngles);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="flex justify-center items-end flex-grow [perspective:2000px]"
        onClick={handleFlip}
      >
        {cards.map((card, index) => {
          const rotationAngle = rotationAngles[index];

          return (
            <div
              key={card.id}
              className="absolute w-3/4vh h-3/4vh bg-white text-black shadow-lg [backface-visibility:hidden] transform transition-transform duration-1000 ease-in-out"
              style={{ transform: `rotateY(${rotationAngle}deg)` }}
            >
              {/* 카드 타입에 따라 조건부 렌더링 */}
              {card.type === "text" ? (
                <div
                  className="font-KoPub font-light w-full h-full"
                  dangerouslySetInnerHTML={{ __html: card.content }}
                />
              ) : (
                <img src={card.content} />
              )}
            </div>
          );
        })}
      </div>
      <Caption cards={cards} currentIndex={currentIndex} />
      <ProgressBar length={cards.length} currentIndex={currentIndex} />
    </div>
  );
}
