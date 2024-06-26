import Font from "@/types/fonts";
import fontWeightConverter from "../font-weight-converter/font-weight-converter";
const generateCssCode = (enabledVariants: Font[]) => {
  let css = "";
  enabledVariants.forEach((font) => {
    font.enabledVariants.forEach((variant) => {
      const [style] = variant.split(",");
      const fontWeight = fontWeightConverter(style);
      const fontStyle = style === "italic" ? "italic" : "normal";
      css += `.${font.family.toLowerCase().replace(/ /g, "-")}-${fontWeight} {
  font-family: ${font.family};
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}
`;
    });
  });
  return css;
};

export default generateCssCode;
