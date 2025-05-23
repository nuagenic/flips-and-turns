"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { CardType } from "@/app/page";
import Caption from "@/components/Caption";

type Props = {
  cards: CardType[];
  currentIndex: number;
  prevIndex: number | null;
  flipState: string | null;
};

export default function Card({
  cards,
  currentIndex,
  prevIndex,
  flipState,
}: Props) {
  console.log(currentIndex);
  console.log(prevIndex);
  // console.log(flipState);
  // 각 카드들의 회전 각도를 저장하는 state. 처음 렌더링에서 보여질 카드만 0도(앞면)로 설정.
  const [rotationAngles, setRotationAngles] = useState<Record<number, number>>({
    [currentIndex]: 0,
  });
  console.log(rotationAngles);

  const [cursorClass, setCursorClass] = useState<string>("");

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const width = window.innerWidth;
    event.clientX > width / 2
      ? setCursorClass("cursor-next")
      : setCursorClass("cursor-prev");
  };

  // 다음 장인지 이전 장인지를 props로 받아, rotationAngles를 map 처리
  useEffect(() => {
    setRotationAngles((prev) => {
      const newAngles = { ...prev };

      const ensure = (index: number) => {
        if (!(index in newAngles)) newAngles[index] = 180;
      };

      // Always ensure neighbors are initialized
      ensure(currentIndex);
      ensure(currentIndex + 1);
      ensure(currentIndex - 1);

      if (flipState === "next" && prevIndex !== null) {
        // ensure(currentIndex - 1);
        newAngles[prevIndex] += 180; // old card flips to back
        newAngles[currentIndex] += 180; // new card flips to front
      }

      if (flipState === "prev" && prevIndex !== null) {
        // ensure(currentIndex - 1);
        newAngles[prevIndex] -= 180; // old card flips to back
        newAngles[currentIndex] -= 180; // new card flips to front
      }

      return newAngles;
    });
  }, [currentIndex]);

  const visibleIndices = new Set([
    currentIndex,
    currentIndex - 1,
    currentIndex + 1 < cards.length ? currentIndex + 1 : null,
  ]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 lg:p-0">
      <div
        className={`${cursorClass} z-20 flex aspect-square w-full items-center justify-center [perspective:2000px] md:h-3/4vh md:w-3/4vh lg:h-3/4vh lg:w-3/4vh`}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => {
          if (!visibleIndices.has(index)) return null;
          const rotationAngle = rotationAngles[index] ?? 180;

          return (
            <div
              key={card.id}
              className="absolute aspect-square w-full transform bg-white text-xs text-black transition-transform duration-1800 ease-in-out [backface-visibility:hidden] md:text-base"
              style={{ transform: `rotateY(${rotationAngle}deg)` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={card.content}
                  alt={`Card ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Caption cards={cards} currentIndex={currentIndex} />
    </div>
  );
}
