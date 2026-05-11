"use client";

import { useState, useEffect, useRef } from "react";
import SlideshowCard from "@/components/SlideshowCard";
import { CardType } from "@/app/page";
import { useHeaderIndexContext } from "@/app/contexts/HeaderIndexContext";

// Must be longer than TRANSITION_MS in SlideshowCard (900ms)
const INTERVAL_MS = 2000;

type Props = { cards: CardType[] };

export default function SlideshowController({ cards }: Props) {
  const { setHeaderIndex, setCardsLength } = useHeaderIndexContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipState, setFlipState] = useState<string | null>(null);
  const prevIndexRef = useRef<number | null>(null);

  useEffect(() => {
    setHeaderIndex(currentIndex);
    setCardsLength(cards.length);
  }, [currentIndex, cards.length, setHeaderIndex, setCardsLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        prevIndexRef.current = prev;
        return (prev + 1) % cards.length;
      });
      setFlipState("next");
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="flex h-full w-full items-center">
      <SlideshowCard
          cards={cards}
          currentIndex={currentIndex}
          prevIndex={prevIndexRef.current}
          flipState={flipState}
        />
    </div>
  );
}
