import Link from "next/link";
import { useState, useEffect } from "react";
import Tab from "@/components/Tab";

type HeaderProps = {
  currentIndex: number;
  length: number;
};

export default function Header({ currentIndex, length }: HeaderProps) {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const tabs = [
    { name: "home", path: "/", flippableChar: "e", flippableIndex: 3 },
    {
      name: "rules and terms",
      path: "/rules-terms",
      flippableChar: "t",
      flippableIndex: 10,
    },
    {
      name: "archive",
      path: "/archive",
      flippableChar: "h",
      flippableIndex: 3,
    },
    { name: "about", path: "/about", flippableChar: "a", flippableIndex: 0 },
    {
      name: "subscribe",
      path: "/subscribe",
      flippableChar: "b",
      flippableIndex: 2,
    },
  ];

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
    <header>
      <nav
        className="from-header to-basic absolute z-10 flex h-full transform flex-col bg-gradient-to-r p-2 font-sans font-light transition-transform duration-1800 ease-in-out"
        style={{
          width: `${headerWidth}px`,
          transform: `translateX(${((windowWidth - maxWidth) / (length - 1)) * currentIndex}px)`,
        }}
      >
        {tabs.map((tab, i) => {
          return (
            <Link href={tab.path} key={i}>
              <Tab
                text={tab.name}
                flippableChar={tab.flippableChar}
                flippableIndex={tab.flippableIndex}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
