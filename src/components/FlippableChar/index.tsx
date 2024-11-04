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
        transition: "transform 0.8s",
        transform: isFlippable ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {/* flippableChar를 감싸는 border */}
      <span
        className="border-1 pointer-events-none absolute h-full border-black px-[0.5rem]"
        style={{ transform: "translate(-50%, 0)", left: "50%" }}
      ></span>
      {/* flippableChar */}
      <span className="inline-block">{char}</span>
    </span>
  );
}
