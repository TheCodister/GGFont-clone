"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  view: boolean;
  fontview: boolean;
  fontdetailname: string;
  setFontDetailName: (fontdetailname: string) => void;
  setView: (view: boolean) => void;
  setFontView: (fontview: boolean) => void;
}
const defaultType = {
  view: false,
  fontview: false,
  fontdetailname: "", // Corrected the property name
  setFontDetailName: (fontdetailname: string) => {},
  setView: (view: boolean) => {},
  setFontView: (fontview: boolean) => {},
};
const AppContext = createContext<AppContextType>(defaultType);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  const [fontview, setFontView] = useState(false);
  const [fontdetailname, setFontDetailName] = useState("");
  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        fontview,
        setFontView,
        fontdetailname,
        setFontDetailName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
