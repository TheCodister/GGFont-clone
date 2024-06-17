"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Font from "@/types/Font";

interface AppContextType {
  view: boolean;
  fontview: boolean;
  fontdetailname: string;
  textPreview: string;
  size: string;
  selectedFont: Font[];
  selected: boolean;
  setSelected: (selected: boolean) => void;
  setFontDetailName: (fontdetailname: string) => void;
  setView: (view: boolean) => void;
  setFontView: (fontview: boolean) => void;
  setTextPreview: (textPreview: string) => void;
  setSize: (size: string) => void;
  addFont: (font: Font) => void;
  removeFont: (family: string) => void;
}

const defaultType: AppContextType = {
  view: false,
  fontview: false,
  fontdetailname: "",
  textPreview: "Whereas disregard and contempt for human rights have resulted",
  size: "8px",
  selectedFont: [],
  selected: false,
  setSelected: () => {},
  setFontDetailName: () => {},
  setView: () => {},
  setFontView: () => {},
  setTextPreview: () => {},
  setSize: () => {},
  addFont: () => {},
  removeFont: () => {},
};

const AppContext = createContext<AppContextType>(defaultType);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  const [fontview, setFontView] = useState(false);
  const [fontdetailname, setFontDetailName] = useState("");
  const [textPreview, setTextPreview] = useState(
    "Whereas disregard and contempt for human rights have resulted"
  );
  const [size, setSize] = useState("8px");
  const [selectedFont, setSelectedFont] = useState<Font[]>([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Load selected fonts from local storage when the component mounts
    const storedFonts = localStorage.getItem("selectedFont");
    if (storedFonts) {
      setSelectedFont(JSON.parse(storedFonts));
    }
  }, []);

  // useEffect(() => {
  //   // Store selected fonts in local storage whenever it changes
  //   localStorage.setItem("selectedFont", JSON.stringify(selectedFont));
  // }, [selectedFont]);

  useEffect(() => {
    // Update the selected state based on selectedFont and fontdetailname
    if (fontdetailname) {
      const isFontSelected = selectedFont.some(
        (font) => font.family === fontdetailname
      );
      setSelected(isFontSelected);
    }
  }, [selectedFont, fontdetailname]);

  const addFont = (font: Font) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = [...prevSelectedFonts, font];
      localStorage.setItem("selectedFont", JSON.stringify(updatedFonts));
      return updatedFonts;
    });
  };

  const removeFont = (family: string) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = prevSelectedFonts.filter(
        (font) => font.family !== family
      );
      localStorage.setItem("selectedFont", JSON.stringify(updatedFonts));
      return updatedFonts;
    });
  };

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
        selectedFont,
        addFont,
        removeFont,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
