"use client";
// import InfiniteScroll from "react-infinite-scroll-component";
import FontCard from "../FontCard/FontCard";
import FontCardGrid from "../FontCardGrid/FontCardGrid";
import { GetFonts } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
import HoverCardDemo from "../HoverCard/HoverCard";
import SwitchViewButton from "../SwitchViewButton/SwitchViewButton";
// import GetKey from "@/utils/GetKey/Getkey";
// import useSWRInfinite from "swr/infinite";
interface Font {
  family: string;
  variants: string[];
  category: string;
  files: {
    [key: string]: string;
  };
  version: string;
  lastModified: string;
  subsets: string[];
  kind: string;
}
export default function ListFontDisplay() {
  // const { data, size, setSize } = useSWRInfinite(GetKey, GetFonts);
  const { view } = useAppContext();
  const { data, isLoading, isError } = GetFonts();
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
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full justify-between mb-8">
        <p className="justify-self-start text-xs">1644 of 1644 families</p>
        <div className="flex items-center">
          <HoverCardDemo />
          <SwitchViewButton />
        </div>
      </div>
      {view ? (
        <div className="flex flex-col items-center gap-2 w-full overflow-auto">
          {/* <FontCard fontName="Name" numVariants={1} creator="Google" />
          <FontCard fontName="Name" numVariants={1} creator="Google" />
          <FontCard fontName="Name" numVariants={1} creator="Google" />
          <FontCard fontName="Name" numVariants={1} creator="Google" />
          <FontCard fontName="Name" numVariants={1} creator="Google" /> */}
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
        <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full overflow-auto ">
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
