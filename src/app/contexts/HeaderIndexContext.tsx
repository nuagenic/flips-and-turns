"use client";

import { createContext, useContext, useState } from "react";

type HeaderIndexContextType = {
  headerIndex: number;
  setHeaderIndex: (index: number) => void;
  cardsLength: number;
  setCardsLength: (length: number) => void;
};

const HeaderIndexContext = createContext<HeaderIndexContextType | null>(null);

const useHeaderIndexContext = () => {
  const context = useContext(HeaderIndexContext);
  if (!context) {
    throw new Error("Cannot find HeaderIndexContext");
  }
  return context;
};

const HeaderIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerIndex, setHeaderIndex] = useState<number>(0);
  const [cardsLength, setCardsLength] = useState<number>(0);

  return (
    <HeaderIndexContext.Provider
      value={{ headerIndex, setHeaderIndex, cardsLength, setCardsLength }}
    >
      {children}
    </HeaderIndexContext.Provider>
  );
};

export { useHeaderIndexContext, HeaderIndexProvider };
