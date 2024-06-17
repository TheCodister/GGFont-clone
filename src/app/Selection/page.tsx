// pages/Selection.tsx
"use client";
import { useAppContext } from "@/contexts/context";
import FontCard from "@/components/FontCard/FontCard";

export default function Selection() {
  const { selectedFont } = useAppContext();

  return (
    <div className=" flex flex-col p-5 items-center">
      <h1 className="text-4xl font-normal mb-5 self-start">
        {selectedFont.length} font family selected
      </h1>
      <div className="flex flex-col">
        {selectedFont.length > 0 ? (
          selectedFont.map((font, index) => (
            <FontCard
              key={index}
              fontName={font.family}
              numVariants={font.variants.length}
              creator="Google"
            />
          ))
        ) : (
          <p>No fonts selected.</p>
        )}
      </div>
    </div>
  );
}
