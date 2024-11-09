"use client";

import { FlipContext } from "@/app/contexts/FlipContext";
import Link from "next/link";
import { useState } from "react";
import FlippableChar from "@/components/FlippableChar";

function FlippableLink({ char, href }: { char: string; href: string }) {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);
  return (
    <FlipContext.Provider value={isFlipped}>
      <Link
        href={href}
        onMouseEnter={() => setIsFlipped(false)}
        onMouseLeave={() => setIsFlipped(true)}
      >
        <FlippableChar char={char} />
      </Link>
    </FlipContext.Provider>
  );
}

export { FlippableLink };
