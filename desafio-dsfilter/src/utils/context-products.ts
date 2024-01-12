import { createContext } from "react";

export type ContextProductsCountTypes = {
  contextProductsCount: number;
  setContextProductsCount: (contextProductsCount: number) => void;
};

export const ContextProductsCount = createContext<ContextProductsCountTypes>({
  contextProductsCount: 0,
  setContextProductsCount: () => {},
});
