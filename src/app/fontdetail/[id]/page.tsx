"use client";
import { useEffect } from "react";
import { useGetFontVariantFile } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
import { PreviewText, SliderBar, SelectBar, FontVarCard } from "@/components";
import { usePathname } from "next/navigation";
import { Button } from "@radix-ui/themes";

export default function FontDetail() {
  const { addFont, selected, removeFont, setFontDetailName } = useAppContext();

  const pathFontName = usePathname()
    .replace("/fontdetail/", "")
    .replace(/%20/g, " ");

  const fontUrl = `https://fonts.googleapis.com/css?family=${pathFontName}`;

  useEffect(() => {
    setFontDetailName(pathFontName);
  }, [pathFontName, setFontDetailName]);

  const handleClick = () => {
    if (data) {
      addFont({
        family: pathFontName,
        variants: data[0].variants,
        files: data[0].files,
        enabledVariants: [],
      });
    }
  };

  const { data, isLoading, isError } = useGetFontVariantFile(pathFontName);
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
    <div className="flex flex-col gap-5 w-full mt-5 container max-w-[1500px] p-5">
      {selected ? (
        <Button
          size="3"
          variant="solid"
          radius="full"
          color="indigo"
          className="h-12 w-auto self-end mb-5 cursor-pointer"
          onClick={() => removeFont(pathFontName)}
        >
          Remove font family
        </Button>
      ) : (
        <Button
          size="3"
          variant="solid"
          radius="full"
          color="indigo"
          className="h-12 w-auto self-end mb-5 cursor-pointer"
          onClick={handleClick}
        >
          Get Font
        </Button>
      )}
      <h1 className="text-5xl font-semibold">{pathFontName}</h1>
      <h2>Design by Google</h2>
      <div className="h-60 text-center mt-10 overflow-hidden">
        <link rel="stylesheet" href={fontUrl}></link>
        <h1
          className="text-6xl pt-5 pb-5 text-ellipsis"
          style={{ fontFamily: `${pathFontName}, sans-serif` }}
        >
          Whereas disregard and contempt for human rights have resulted
        </h1>
      </div>
      <h1 className="text-4xl">Styles</h1>
      <div className="flex items-center gap-5 xl:flex-row min-[320px]:flex-col">
        <PreviewText />
        <div className="flex items-center">
          <SelectBar />
          <SliderBar />
        </div>
      </div>
      <div>
        {data &&
          data[0].variants.map((variant: string, index: number) => (
            <FontVarCard
              fontName={pathFontName}
              variant={variant}
              numVariants={1}
              creator=""
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
