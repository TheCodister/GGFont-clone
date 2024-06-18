"use client";
import { useAppContext } from "@/contexts/context";
import FontCard from "@/components/FontCard/FontCard";
import { Button } from "@radix-ui/themes";
import Download from "@/assets/download.svg";
import Code from "@/assets/code.svg";
import Link from "next/link";

export default function Selection() {
  const { selectedFont } = useAppContext();

  const handleDownload = () => {
    selectedFont.forEach((font) => {
      font.variants.forEach((variant) => {
        const fileUrl = font.files[variant];
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = `${font.family}-${variant}.ttf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  };
  return (
    <div className=" flex flex-col justify-center p-5 w-10/12">
      <h1 className="text-4xl font-normal mb-5">
        {selectedFont.length} font family selected
      </h1>
      <div className="flex items-center gap-5">
        <div className="flex flex-col w-2/3 overflow-hidden">
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
            <p>No font selected.</p>
          )}
        </div>
        {selectedFont.length > 0 && (
          <div className="flex flex-col items-center bg-slate-50 p-5 gap-5 h-44 self-start rounded-xl w-96">
            <Link href="selection/embed">
              <Button size="4" radius="full" className="w-80 text-base">
                <Code width={20} height={20} alt="logo" /> Get embed code
              </Button>
            </Link>
            <Button
              size="4"
              radius="full"
              className="w-80 text-base"
              onClick={handleDownload}
            >
              <Download width={20} height={20} alt="logo" /> Download all (
              {selectedFont.length})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
