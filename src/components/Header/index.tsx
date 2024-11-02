import Link from "next/link";

type HeaderProps = {
  currentIndex: number;
  length: number;
};

export default function Header({ currentIndex, length }: HeaderProps) {
  const tabs = [
    { name: "HOME", path: "/" },
    { name: "RULES & TERMS", path: "/rules-terms" },
    { name: "ARCHIVE", path: "/archive" },
    { name: "ABOUT", path: "/about" },
    { name: "SUBSCRIBE", path: "/subscribe" },
  ];

  const headerWidth = window.innerWidth / length;

  return (
    <header>
      <nav
        className="absolute flex h-full flex-col bg-slate-200 p-4"
        style={{
          width: `${headerWidth}px`,
          left: `${headerWidth * currentIndex}px`,
        }}
      >
        {tabs.map((tab, i) => {
          return (
            <Link href={tab.path} key={i}>
              <button key={i}>{tab.name}</button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
