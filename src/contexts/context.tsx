"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  view: boolean;
  setView: (view: boolean) => void;
}
const defaultType = {
  view: false,
  setView: (view: boolean) => {},
};
const AppContext = createContext<AppContextType>(defaultType);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  return (
    <AppContext.Provider value={{ view, setView }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
