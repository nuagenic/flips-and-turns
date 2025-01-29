"use client";

import { useEffect } from "react";

type ModalProps = {
  src: string;
  onClose: () => void;
};

export default function Modal({ src, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation}>
        <img
          className="max-h-[90vh] max-w-[90vw]"
          src={src}
          alt="Large preview"
        />
      </div>
    </div>
  );
}
