"use client";

import { useState } from "react";
import { CardType } from "@/app/page";

type Props = {
  cards: CardType[];
};

export default function Card({ cards }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);
  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardWidth = event.currentTarget.offsetWidth;
    event.clientX > cardWidth / 2
      ? setRotationAngle((prevAngle) => prevAngle + 180)
      : setRotationAngle((prevAngle) => prevAngle - 180);
    setCurrentIndex((prevIndex) => prevIndex + 2);
    setCurrentIndex2((prevIndex) => prevIndex + 2);
  };

  return (
    <div className="w-full h-full [perspective:1000px]" onClick={handleFlip}>
      <div className="flex justify-center items-center w-full h-full transform transition-transform duration-700 ease-in-out [perspective:1000px]">
        <div
          className="absolute w-1/2vh h-1/2vh bg-red-100 text-white flex items-center justify-center [backface-visibility:hidden] transform transition-transform duration-700 ease-in-out"
          style={{ transform: `rotateY(${rotationAngle}deg)` }}
        >
          <img src={cards[currentIndex].content} />
        </div>
        <div
          className="absolute w-1/2vh h-1/2vh bg-blue-100 text-white flex items-center justify-center [backface-visibility:hidden] transform transition-transform duration-700 ease-in-out"
          style={{ transform: `rotateY(${rotationAngle + 180}deg)` }}
        >
          <div>{cards[currentIndex2].content}</div>
        </div>
      </div>
    </div>
  );
}
