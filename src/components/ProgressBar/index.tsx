"use client";

import { useRef, useEffect, useState } from "react";
import { CardType } from "@/app/page";

type Props = {
  length: number; // Cards Array의 전체 length를 의미함
  currentIndex: number;
};

export default function ProgressBar({ length, currentIndex }: Props) {
  const totalBar = useRef<HTMLDivElement | null>(null);
  const [segmentWidth, setSegmentWidth] = useState<number>(0);

  const updateSegmentWidth = () => {
    if (totalBar.current != null) {
      setSegmentWidth(totalBar.current.offsetWidth / length);
    }
  };

  useEffect(() => {
    updateSegmentWidth();

    window.addEventListener("resize", updateSegmentWidth);

    return () => {
      window.removeEventListener("resize", updateSegmentWidth);
    };
  });

  console.log(segmentWidth);

  return (
    <div className="flex justify-center items-start">
      <div
        className="h-2 bg-slate-100 border-none mt-4 mb-10 w-3/4vh"
        ref={totalBar}
      >
        <div
          className="relative bg-black h-2 border-none transform transition-transform duration-1000 ease-in-out"
          style={{
            width: segmentWidth,
            transform: `translateX(${segmentWidth * currentIndex}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
