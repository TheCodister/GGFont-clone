"use client";
import { useAppContext } from "@/contexts/context";
import { useEffect, useState } from "react";
import ArrowBack from "@/assets/arrowback.svg";
import Link from "next/link";
import CustomizeLinkCard from "@/components/CustomizeLinkCard/CustomizeLinkCard";
import { generateEmbedCode, generateCssCode, returnURL } from "@/utils";
import { Checkbox } from "@radix-ui/themes";

export default function EmbeddedCode() {
  const { selectedFont, enabledVariants, setEnabledVariants } = useAppContext();
  const [embedCode, setEmbedCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [checked, setChecked] = useState(true);

  setEnabledVariants(selectedFont);
  useEffect(() => {
    if (enabledVariants.length > 0) {
      setEmbedCode(generateEmbedCode(enabledVariants));
      setCssCode(generateCssCode(enabledVariants));
    } else {
      setEmbedCode("");
      setCssCode("");
    }
  }, [enabledVariants]);

  const cssImport = `<style>
  @import url("${returnURL(enabledVariants)}");
</style>`;
  // I want to filter this link "https://fonts.googleapis.com/css?family=ADLaM+Display:regular|ABeeZee:regular,italic" from <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=ADLaM+Display:regular|ABeeZee:regular,italic">

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
          {enabledVariants.length > 0 ? (
            enabledVariants.map((font, index) => (
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
        <div className="w-[50em]">
          <div className="mb-5 flex flex-col w-full">
            <h2 className="text-xl font-semibold">Code:</h2>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              <div className="flex items-center">
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => setChecked(!checked)}
                />
                {"<link>"}
                <Checkbox
                  checked={!checked}
                  onCheckedChange={() => setChecked(!checked)}
                  className="ml-5"
                />
                {"@import"}
              </div>
              {checked ? (
                <code className="text-xs">{embedCode}</code>
              ) : (
                <code className="text-xs">{cssImport}</code>
              )}
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
