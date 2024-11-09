"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Tab from "@/components/Tab";
import Logo from "@/components/Logo";
import { tabInfo } from "@/lib/tabInfo";

type HeaderProps = {
  currentIndex?: number;
  length?: number;
};

export default function Header(props: HeaderProps) {
  const { currentIndex = 0, length = 1 } = props;
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

  const maxWidth = 150;
  const headerWidth = Math.max(windowWidth / length, maxWidth);

  return (
    <header
      className="absolute z-10 flex h-full transform flex-col bg-gradient-to-r from-header to-basic p-2 font-sans font-light transition-transform duration-1800 ease-in-out"
      style={{
        width: `${headerWidth}px`,
        transform: `translateX(${((windowWidth - maxWidth) / (length - 1)) * currentIndex}px)`,
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
      <Logo size={40} />
      <div className="mb-1"></div>
    </header>
  );
}
