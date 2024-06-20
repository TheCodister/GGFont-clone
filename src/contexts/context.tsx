"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Font from "@/types/font";

interface AppContextType {
  fontdetailname: string;
  textPreview: string;
  size: string;
  selectedFont: Font[];
  selected: boolean;
  toggleSidebar: boolean;
  setSelected: (selected: boolean) => void;
  setFontDetailName: (fontdetailname: string) => void;
  setTextPreview: (textPreview: string) => void;
  setSize: (size: string) => void;
  addFont: (font: Font) => void;
  removeFont: (family: string) => void;
  toggleVariant: (fontName: string, variant: string, enabled: boolean) => void;
  setToggleSidebar: (toggleSidebar: boolean) => void;
}

const defaultType: AppContextType = {
  fontdetailname: "",
  textPreview: "Whereas disregard and contempt for human rights have resulted",
  size: "48",
  selectedFont: [],
  selected: false,
  toggleSidebar: false,
  setSelected: () => {},
  setFontDetailName: () => {},
  setTextPreview: () => {},
  setSize: () => {},
  addFont: () => {},
  removeFont: () => {},
  toggleVariant: () => {},
  setToggleSidebar: () => {},
};

const AppContext = createContext<AppContextType>(defaultType);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [fontdetailname, setFontDetailName] = useState("");
  const [textPreview, setTextPreview] = useState(
    "Whereas disregard and contempt for human rights have resulted"
  );
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [size, setSize] = useState("48px");
  const [selectedFont, setSelectedFont] = useState<Font[]>([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Load selected fonts from local storage when the component mounts
    const storedFonts = localStorage.getItem("selectedFont");
    if (storedFonts) {
      setSelectedFont(JSON.parse(storedFonts));
    }
  }, []);

  useEffect(() => {
    // Load selected fonts from local storage when the component mounts
    const storedFonts = localStorage.getItem("selectedFont");
    if (storedFonts) {
      setSelectedFont(JSON.parse(storedFonts));
    }
  }, []);

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
      font.enabledVariants = font.variants;
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

  const toggleVariant = (
    fontName: string,
    variant: string,
    enabled: boolean
  ) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = prevSelectedFonts.map((font) => {
        if (font.family === fontName) {
          const enabledVariantsSet = new Set(font.enabledVariants);

          if (enabled) {
            enabledVariantsSet.add(variant); // Add variant to set
          } else {
            enabledVariantsSet.delete(variant); // Remove variant from set
          }

          // Convert set back to array
          font.enabledVariants = Array.from(enabledVariantsSet);
        }
        console.log(font);
        return font;
      });
      return updatedFonts;
    });
  };

  return (
    <AppContext.Provider
      value={{
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
        toggleVariant,
        toggleSidebar,
        setToggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
