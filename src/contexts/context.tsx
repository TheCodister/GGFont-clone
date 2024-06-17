"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  view: boolean;
  fontview: boolean;
  fontdetailname: string;
  textPreview: string;
  size: number;
  setFontDetailName: (fontdetailname: string) => void;
  setView: (view: boolean) => void;
  setFontView: (fontview: boolean) => void;
  setTextPreview: (textPreview: string) => void;
  setSize: (size: number) => void;
}
const defaultType = {
  view: false,
  fontview: false,
  fontdetailname: "", // Corrected the property name
  textPreview: "Whereas disregard and contempt for human rights have resulted",
  size: 8,
  setFontDetailName: (fontdetailname: string) => {},
  setView: (view: boolean) => {},
  setFontView: (fontview: boolean) => {},
  setTextPreview: (textPreview: string) => {},
  setSize: (size: number) => {},
};
const AppContext = createContext<AppContextType>(defaultType);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  const [fontview, setFontView] = useState(false);
  const [fontdetailname, setFontDetailName] = useState("");
  const [textPreview, setTextPreview] = useState(
    "Whereas disregard and contempt for human rights have resulted"
  );
  const [size, setSize] = useState(8);
  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        fontview,
        setFontView,
        fontdetailname,
        setFontDetailName,
        textPreview,
        setTextPreview,
        size,
        setSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
