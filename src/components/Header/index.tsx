"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Tab from "@/components/Tab";
import Logo from "@/components/Logo";
import { tabInfo } from "@/lib/tabInfo";
import { useHeaderIndexContext } from "@/app/contexts/HeaderIndexContext";

export default function Header() {
  const { headerIndex, cardsLength } = useHeaderIndexContext();

  // const { currentIndex = 0, length = 1 } = props;
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // 헤더의 너비와 위치를 context에 따라 계산
  const maxWidth = 150;
  const headerWidth = Math.max(windowWidth / cardsLength, maxWidth);
  const translateX =
    ((windowWidth - maxWidth) / (cardsLength - 1)) * headerIndex;

  return (
    <header
      className="absolute inset-0 z-10 flex h-full transform flex-col bg-gradient-to-r from-header to-basic p-2 font-sans font-light transition-transform duration-1800 ease-in-out"
      style={{
        width: `${headerWidth}px`,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <nav className="grow">
        {tabInfo.map((tab, i) => {
          return (
            <Link href={tab.path} key={i}>
              <Tab
                text={tab.name}
                path={tab.path}
                flippableChar={tab.flippableChar}
                flippableIndex={tab.flippableIndex}
              />
            </Link>
          );
        })}
      </nav>
      <Link href="/">
        <Logo size={40} />
      </Link>
      <div className="mb-1"></div>
    </header>
  );
}
