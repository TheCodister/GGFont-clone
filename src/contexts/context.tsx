"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  view: boolean;
  fontview: boolean;
  fontdetailname: string;
  textPreview: string;
  setFontDetailName: (fontdetailname: string) => void;
  setView: (view: boolean) => void;
  setFontView: (fontview: boolean) => void;
  setTextPreview: (textPreview: string) => void;
}
const defaultType = {
  view: false,
  fontview: false,
  fontdetailname: "", // Corrected the property name
  textPreview: "Whereas disregard and contempt for human rights have resulted",
  setFontDetailName: (fontdetailname: string) => {},
  setView: (view: boolean) => {},
  setFontView: (fontview: boolean) => {},
  setTextPreview: (textPreview: string) => {},
};
const AppContext = createContext<AppContextType>(defaultType);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  const [fontview, setFontView] = useState(false);
  const [fontdetailname, setFontDetailName] = useState("");
  const [textPreview, setTextPreview] = useState(
    "Whereas disregard and contempt for human rights have resulted"
  );
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
