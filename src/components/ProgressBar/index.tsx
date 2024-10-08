"use client";

import { useRef, useEffect, useState } from "react";

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

  return (
    <div className="flex items-start justify-center">
      <div
        className="mb-10 mt-4 h-2 w-3/4vh border-none bg-slate-100"
        ref={totalBar}
      >
        <div
          className="relative h-2 transform border-none bg-black transition-transform duration-1800 ease-in-out"
          style={{
            width: segmentWidth,
            transform: `translateX(${segmentWidth * currentIndex}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
