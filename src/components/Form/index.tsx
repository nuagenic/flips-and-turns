"use client";

import { useState, useRef } from "react";

type FormProps = {
  updateItemAction: (
    formData: FormData,
  ) => Promise<{ error?: string; success?: boolean }>;
};

export default function Form({ updateItemAction }: FormProps) {
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
    <form
      className="z-20 flex w-full max-w-md flex-col items-center justify-center font-sans"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <input
          ref={emailRef}
          className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent px-0 py-2.5 text-sm text-black focus:border-black focus:outline-none focus:ring-0"
          type="text"
          name="email"
          id="email"
          placeholder=""
        />
        <label
          htmlFor="email"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          email address
        </label>
      </div>

      <button
        type="submit"
        className="mb-5 mt-5 rounded-lg border-1 border-black px-4 py-2 transition-colors duration-300 hover:bg-black hover:text-white"
      >
        subscribe
      </button>
      {error && <div className="mb-5 text-sm text-red-500">{error}</div>}
      {success && (
        <div className="mb-5 text-sm text-green-500">
          we&apos;re on the same page
        </div>
      )}
    </form>
  );
}
