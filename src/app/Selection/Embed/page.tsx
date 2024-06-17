"use client";
import { useAppContext } from "@/contexts/context";
import { useEffect, useState } from "react";
import ArrowBack from "@/assets/arrowback.svg";
import Link from "next/link";
import CustomizeLinkCard from "@/components/CustomizeLinkCard/CustomizeLinkCard";

export default function EmbeddedCode() {
  const { selectedFont } = useAppContext();
  const [embedCode, setEmbedCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    if (selectedFont.length > 0) {
      const fontLinks = selectedFont.map((font) => {
        const enabledVariants = font.variants.filter(
          (variant) => variant !== ""
        );
        const family = font.family.replace(/ /g, "+");
        return `family=${family}:${enabledVariants.join(";")}`;
      });

      const htmlCode = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${fontLinks.join("&")}&display=swap" rel="stylesheet">
      `;

      const cssClasses = selectedFont
        .map((font) =>
          font.variants
            .filter((variant) => variant !== "")
            .map((variant) => {
              const [weight, style] = variant.includes("italic")
                ? variant.split("italic")
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
      <div className="flex flex-row items-center mb-5">
        <Link href="/selection">
          <ArrowBack width={40} height={40} alt="back" />
        </Link>
        <h1 className="text-5xl font-medium ml-5">Embed Code</h1>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-8">
          {selectedFont.length > 0 ? (
            selectedFont.map((font, index) => (
              <CustomizeLinkCard
                key={index}
                fontName={font.family}
                variant={font.variants}
              />
            ))
          ) : (
            <p>No fonts selected.</p>
          )}
        </div>
        <div className="w-min">
          <div className="mb-5 flex flex-col w-full">
            <h2 className="text-xl font-semibold">HTML Code:</h2>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              <code className="text-xs">{embedCode}</code>
            </pre>
          </div>
          <div className="mb-5 flex flex-col w-full">
            <h2 className="text-xl font-semibold">CSS Classes:</h2>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              <code className="text-xs">{cssCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
