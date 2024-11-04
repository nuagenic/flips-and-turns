import Link from "next/link";

type HeaderProps = {
  currentIndex: number;
  length: number;
};

export default function Header({ currentIndex, length }: HeaderProps) {
  const tabs = [
    { name: "home", path: "/" },
    { name: "rules and terms", path: "/rules-terms" },
    { name: "archive", path: "/archive" },
    { name: "about", path: "/about" },
    { name: "subscribe", path: "/subscribe" },
  ];
  const maxWidth = 150;
  const headerWidth = Math.max(window.innerWidth / length, maxWidth);

  return (
    <header>
      <nav
        className="from-header to-basic absolute z-10 flex h-full flex-col bg-gradient-to-r p-2 font-sans font-light"
        style={{
          width: `${headerWidth}px`,
          left: `${((window.innerWidth - maxWidth) / (length - 1)) * currentIndex}px`,
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
