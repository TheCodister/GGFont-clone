"use client";
import FontCard from "../FontCardHor/FontCardHor";
import FontCardGrid from "../FontCardGrid/FontCardGrid";
import { useGetFonts } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
import { HoverCard, SwitchViewButton } from "..";
import { useState } from "react";
import Font from "@/types/font";
import { Button } from "@radix-ui/themes";
import Tune from "@/assets/tune.svg";
export default function ListFontDisplay() {
  const { setToggleSidebar, toggleSidebar } = useAppContext();
  const [isGridview, setIsGridview] = useState(false);
  const { data, isLoading, isError } = useGetFonts();
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Refresh the page</h1>
      </div>
    );
  }
  return (
    <div className="w-full container max-w-[1500px]">
      <Button
        size="3"
        variant="outline"
        radius="full"
        color="indigo"
        className="h-12 w-26 self-start mb-5"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Tune width={20} height={20} alt="logo" /> Filters
      </Button>
      <div className="flex items-center w-full justify-between mb-8">
        <p className="justify-self-start text-xs">1644 of 1644 families</p>
        <div className="flex items-center">
          <HoverCard />
          <SwitchViewButton
            isGridview={isGridview}
            setIsGridview={setIsGridview}
          />
        </div>
      </div>
      {!isGridview ? (
        <div className="gap-2 w-full ">
          {data &&
            data.data.items.map((font: Font) => (
              <FontCard
                fontName={font.family}
                numVariants={font.variants.length}
                creator="Google"
                key={font.family}
              />
            ))}
        </div>
      ) : (
        <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full">
          {data &&
            data.data.items.map((font: Font) => (
              <FontCardGrid
                fontName={font.family}
                numVariants={font.variants.length}
                creator="Google"
                key={font.family}
              />
            ))}
        </div>
      )}
    </div>
  );
}
