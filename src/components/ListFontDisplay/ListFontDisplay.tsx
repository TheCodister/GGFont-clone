"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import FontCard from "../FontCard/FontCard";
import FontCardGrid from "../FontCardGrid/FontCardGrid";
import { GetFonts } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
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
  if (data)
    return (
      <div className="flex w-full">
        {/* <InfiniteScroll
          dataLength={data.data.items.length}
          next={GetFonts}
          hasMore={true}
          loader={<h1>Loading</h1>}
        >
          {data &&
            data.data.items.map((font: Font) => (
              <FontCard
                fontName={font.family}
                numVariants={font.variants.length}
                creator="Google"
              />
            ))}
        </InfiniteScroll> */}
        {view ? (
          <div className="flex flex-col gap-2 w-[90em] overflow-auto">
            <FontCard fontName="Name" numVariants={1} creator="Google" />
            <FontCard fontName="Name" numVariants={1} creator="Google" />
            <FontCard fontName="Name" numVariants={1} creator="Google" />
            <FontCard fontName="Name" numVariants={1} creator="Google" />
            <FontCard fontName="Name" numVariants={1} creator="Google" />
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-4 w-full overflow-auto md:grid-cols-2 ">
            <FontCardGrid fontName="Name" numVariants={1} creator="Google" />
            <FontCardGrid fontName="Name" numVariants={1} creator="Google" />
            <FontCardGrid fontName="Name" numVariants={1} creator="Google" />
            <FontCardGrid fontName="Name" numVariants={1} creator="Google" />
            <FontCardGrid fontName="Name" numVariants={1} creator="Google" />
          </div>
        )}
      </div>
    );
}
