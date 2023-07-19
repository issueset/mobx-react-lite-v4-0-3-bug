import { createContext, useContext } from "react";

import { RootStore } from "./root-store";

const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider = RootStoreContext.Provider;

export function useRootStore() {
  const store = useContext(RootStoreContext);

  if (!store) {
    throw new Error("blank store");
  }

  return store;
}
