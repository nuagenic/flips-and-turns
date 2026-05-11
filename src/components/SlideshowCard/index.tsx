"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CardType } from "@/app/page";

const TRANSITION_MS = 2000;

type Props = {
  cards: CardType[];
  currentIndex: number;
  prevIndex: number | null;
  flipState: string | null;
};

export default function SlideshowCard({
  cards,
  currentIndex,
  prevIndex,
  flipState,
}: Props) {
  // All 100 cards pre-initialised: card 0 faces front (0°), rest face back (180°)
  const [rotationAngles, setRotationAngles] = useState<Record<number, number>>(
    () => Object.fromEntries(cards.map((_, i) => [i, i === 0 ? 0 : 180])),
  );

  useEffect(() => {
    setRotationAngles((prev) => {
      const next = { ...prev };
      if (flipState === "next" && prevIndex !== null) {
        next[prevIndex] += 180;
        next[currentIndex] += 180;
      }
      if (flipState === "prev" && prevIndex !== null) {
        next[prevIndex] -= 180;
        next[currentIndex] -= 180;
      }
      return next;
    });
  }, [currentIndex]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 lg:p-0">
      <div className="z-20 flex aspect-square w-full items-center justify-center [perspective:2000px] md:h-3/4vh md:w-3/4vh lg:h-3/4vh lg:w-3/4vh">
        {cards.map((card, i) => {
          // Only render cards within ±2 of current to avoid loading all 100 images at once.
          // rotationAngles tracks all 100 so angles stay correct when cards re-enter the window.
          if (Math.abs(i - currentIndex) > 2) return null;
          return (
            <div
              key={card.id}
              className="absolute aspect-square w-full bg-white [backface-visibility:hidden]"
              style={{
                transform: `rotateY(${rotationAngles[i] ?? 180}deg)`,
                transition: `transform ${TRANSITION_MS}ms linear`,
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={card.content}
                  alt={`Card ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={i <= 1}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
