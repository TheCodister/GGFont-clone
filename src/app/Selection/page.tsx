"use client";
import { useAppContext } from "@/contexts/context";
import FontCard from "@/components/FontCardHor/FontCardHor";
import { Button } from "@radix-ui/themes";
import Download from "@/assets/download.svg";
import Code from "@/assets/code.svg";
import Link from "next/link";
import { downloadFonts } from "@/utils";
import ROUTES from "@/constants/routes/routes";

export default function Selection() {
  const { selectedFont } = useAppContext();

  return (
    <div className="flex flex-col justify-center items-center p-5 w-full container max-w-[1500px]">
      <h1 className="text-4xl font-normal mb-5">
        {selectedFont.length} font family selected
      </h1>
      <div className="flex xl:flex-row items-center gap-5 justify-center min-[320px]:flex-col-reverse">
        <div className="overflow-hidden">
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
            <h2>No font selected.</h2>
          )}
        </div>
        {selectedFont.length > 0 && (
          <div className="flex flex-col items-center bg-slate-50 p-5 gap-5 h-44 rounded-xl xl:self-start w-96">
            <Link href={ROUTES.EMBED}>
              <Button size="4" radius="full" className="w-80 text-base">
                <Code width={20} height={20} alt="logo" /> Get embed code
              </Button>
            </Link>
            <Button
              size="4"
              radius="full"
              className="w-80 text-base"
              onClick={() => downloadFonts(selectedFont)}
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
