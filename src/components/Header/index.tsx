import Link from "next/link";

export default function Header() {
  const tabs = [
    { name: "HOME", path: "/" },
    { name: "RULES & TERMS", path: "/rules-terms" },
    { name: "ARCHIVE", path: "/archive" },
    { name: "ABOUT", path: "/about" },
    { name: "SUBSCRIBE", path: "/subscribe" },
  ];

  return (
    <header>
      <nav className="w-full flex justify-between p-4">
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
