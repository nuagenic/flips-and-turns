// Header에 들어가는 Tab
import FlippableChar from "../FlippableChar";
import { FlipContext } from "@/app/contexts/FlipContext";
import { useState } from "react";
import { usePathname } from "next/navigation";

type TabProps = {
  text: string;
  path: string;
  flippableChar: string;
  flippableIndex: number;
};

export default function Tab({
  text,
  path,
  flippableChar,
  flippableIndex,
}: TabProps) {
  const pathname = usePathname();
  const [isFlipped, setIsFlipped] = useState<boolean>(pathname !== path);

  const beforeFlippable = text.slice(0, flippableIndex);
  const afterFlippable = text.slice(flippableIndex + 1);

  return (
    <FlipContext.Provider value={isFlipped}>
      <div
        onMouseEnter={() => setIsFlipped((prevState: boolean) => !prevState)}
        onMouseLeave={() => setIsFlipped((prevState: boolean) => !prevState)}
        className="tracking-wide"
      >
        {beforeFlippable}
        <FlippableChar char={flippableChar} />
        {afterFlippable}
      </div>
    </FlipContext.Provider>
  );
}
