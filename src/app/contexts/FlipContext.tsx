import { createContext, useContext } from "react";

// FlippableChar의 Flippable 여부를 관리하는 context
const FlipContext = createContext(false);

const useFlipContext = () => useContext(FlipContext);

export { FlipContext, useFlipContext };
