"use client";

import { useState, useRef } from "react";
import FlippableChar from "../FlippableChar";
import { FlipContext } from "@/app/contexts/FlipContext";

type FormProps = {
  updateItemAction: (
    formData: FormData,
  ) => Promise<{ error?: string; success?: boolean }>;
};

export default function Form({ updateItemAction }: FormProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = await updateItemAction(formData);

    if (result.error) {
      setError(result.error);
      setSuccess(false);
    } else if (result.success) {
      setError("");
      setSuccess(true);
      if (emailRef.current) emailRef.current.value = "";
    }
  }

  return (
    <FlipContext.Provider value={isFlipped}>
      <form
        className="relative z-20 flex w-full flex-col items-start justify-center gap-1 font-sans"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input
            ref={emailRef}
            className="color:black w-full bg-gray-100 p-1 placeholder-black focus:outline-none"
            type="text"
            name="email"
            id="email"
            placeholder="이메일 주소를 입력해 주세요..."
          />
        </div>
        <button
          type="submit"
          className="text-md"
          onMouseEnter={() => setIsFlipped(false)}
          onMouseLeave={() => setIsFlipped(true)}
        >
          su
          <FlippableChar char="b" />
          scribe
        </button>
        {error && <div className="mb-5 text-sm text-red-500">{error}</div>}
        {success && (
          <div className="mb-5 text-sm text-green-500">
            we&apos;re on the same page
          </div>
        )}
      </form>
    </FlipContext.Provider>
  );
}
