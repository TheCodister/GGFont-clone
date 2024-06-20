import JSZip from "jszip";
import { saveAs } from "file-saver";
import Font from "@/types/fonts";

const downloadFonts = async (selectedFont: Font[]) => {
  const zip = new JSZip();

  for (const font of selectedFont) {
    for (const variant of font.variants) {
      const fileUrl = font.files[variant];
      const fileName = `${font.family}-${variant}.ttf`;

      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        zip.file(fileName, blob);
      } catch (error) {
        console.error(`Failed to fetch ${fileUrl}:`, error);
      }
    }
  }

  zip
    .generateAsync({ type: "blob" })
    .then((content) => {
      saveAs(content, "selected-fonts.zip");
    })
    .catch((error) => {
      console.error("Failed to generate zip file:", error);
    });
};
export default downloadFonts;
