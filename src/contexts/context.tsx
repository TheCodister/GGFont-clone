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
  enabledVariants: Font[];
  setSelected: (selected: boolean) => void;
  setFontDetailName: (fontdetailname: string) => void;
  setView: (view: boolean) => void;
  setFontView: (fontview: boolean) => void;
  setTextPreview: (textPreview: string) => void;
  setSize: (size: string) => void;
  addFont: (font: Font) => void;
  removeFont: (family: string) => void;
  setEnabledVariants: (variants: Font[]) => void;
  toggleVariant: (fontName: string, variant: string, enabled: boolean) => void;
  // toggleVariant: (fontName: string, variant: string, enabled: boolean) => void;
}

const defaultType: AppContextType = {
  view: false,
  fontview: false,
  fontdetailname: "",
  textPreview: "Whereas disregard and contempt for human rights have resulted",
  size: "48px",
  selectedFont: [],
  selected: false,
  enabledVariants: [],
  setSelected: () => {},
  setFontDetailName: () => {},
  setView: () => {},
  setFontView: () => {},
  setTextPreview: () => {},
  setSize: () => {},
  addFont: () => {},
  removeFont: () => {},
  setEnabledVariants: () => {},
  toggleVariant: () => {},
};

const AppContext = createContext<AppContextType>(defaultType);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(false);
  const [fontview, setFontView] = useState(false);
  const [fontdetailname, setFontDetailName] = useState("");
  const [textPreview, setTextPreview] = useState(
    "Whereas disregard and contempt for human rights have resulted"
  );

  const [size, setSize] = useState("48px");
  const [selectedFont, setSelectedFont] = useState<Font[]>([]);
  const [selected, setSelected] = useState(false);
  const [enabledVariants, setEnabledVariants] = useState<Font[]>(selectedFont);

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
    setEnabledVariants((prevEnabledVariants) => {
      const updatedFonts = prevEnabledVariants.map((font) => {
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
        enabledVariants,
        setEnabledVariants,
        toggleVariant,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
