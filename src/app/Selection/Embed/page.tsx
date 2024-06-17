// pages/EmbeddedCode.tsx
"use client";
import { useAppContext } from "@/contexts/context";
import { useEffect, useState } from "react";

export default function EmbeddedCode() {
  const { selectedFont } = useAppContext();
  const [embedCode, setEmbedCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    if (selectedFont.length > 0) {
      // Generate HTML embed code
      const fontLinks = selectedFont.map((font) => {
        const family = font.family.replace(/ /g, "+");
        return `family=${family}:wght@${font.variants.join(";")}`;
      });
      const htmlCode = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${fontLinks.join("&")}&display=swap" rel="stylesheet">
      `;

      // Generate CSS classes
      const cssClasses = selectedFont
        .map((font) =>
          font.variants
            .map((variant) => {
              const [weight, style] = variant.includes("italic")
                ? [variant.replace("italic", ""), "italic"]
                : [variant, "normal"];
              return `
.${font.family.toLowerCase().replace(/ /g, "-")}-${weight}-${style} {
  font-family: "${font.family}", sans-serif;
  font-weight: ${weight};
  font-style: ${style};
}`;
            })
            .join("\n")
        )
        .join("\n");

      setEmbedCode(htmlCode.trim());
      setCssCode(cssClasses.trim());
    }
  }, [selectedFont]);

  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold mb-5">Embedded Code</h1>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">HTML Code:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          <code>{embedCode}</code>
        </pre>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">CSS Classes:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          <code>{cssCode}</code>
        </pre>
      </div>
    </div>
  );
}
