import { useEffect } from "react";
import { useFlipContext } from "@/app/contexts/FlipContext";

type FlippableCharProps = {
  char: string;
};

export default function FlippableChar({ char }: FlippableCharProps) {
  const isFlippable = useFlipContext();

  return (
    <span
      className="relative inline-block"
      style={{
        transition: "transform 0.5s",
        transform: isFlippable ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      <span
        className="border-1 pointer-events-none absolute h-full border-black px-[0.6rem]"
        style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
      ></span>
      <span className="inline-block">{char}</span>
    </span>
  );
}
