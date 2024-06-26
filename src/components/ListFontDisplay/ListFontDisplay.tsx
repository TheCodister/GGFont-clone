"use client";
import FontCard from "../FontCardHor/FontCardHor";
import FontCardGrid from "../FontCardGrid/FontCardGrid";
import { useGetFonts } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
import { HoverCard, SwitchViewButton } from "..";
import { useState } from "react";
import Font from "@/types/fonts";
import { Button } from "@radix-ui/themes";
import Tune from "@/assets/tune.svg";
import Close from "@/assets/close.svg";
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
    <div className="w-full">
      <Button
        size="3"
        variant={toggleSidebar ? "solid" : "outline"}
        radius="full"
        color="indigo"
        className="h-12 w-26 self-start mb-5 cursor-pointer transition-all duration-100"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        {toggleSidebar ? (
          <Close width={20} height={20} fill="white" alt="logo" />
        ) : (
          <Tune width={20} height={20} alt="logo" />
        )}
        Filters
      </Button>
      <div className="flex items-center justify-between mb-8">
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
        <div className="w-full">
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
        <div className="grid gap-5 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
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
