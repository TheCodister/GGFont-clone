import Font from "@/types/Font";
const returnURL = (enabledVariants: Font[]) => {
  const filteredFonts = enabledVariants.map((font) => {
    const enabledVariantsSet = new Set(font.enabledVariants); // Use a set to avoid duplicates
    return {
      ...font,
      enabledVariants: Array.from(enabledVariantsSet), // Convert set back to array
    };
  });

  const families = filteredFonts.map(
    (font: Font) =>
      font.family.replace(/ /g, "+") + ":" + font.enabledVariants.join(",")
  );
  const url = `https://fonts.googleapis.com/css?family=${families.join("|")}`;
  return url;
};

export default returnURL;
