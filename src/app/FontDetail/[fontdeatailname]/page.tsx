"use client";
import { useEffect } from "react";
import { GetFontVariantFile } from "@/api/services/getFont";
import { useAppContext } from "@/contexts/context";
import PreviewText from "@/components/PreviewText/PreviewText";
import SliderBar from "@/components/SliderBar/SliderBar";
import SelectBar from "@/components/SelectBar/SelectBar";
import FontVarCard from "@/components/FontVarCard/FontVarCard";
import { usePathname } from "next/navigation";
import { Button } from "@radix-ui/themes";

export default function FontDetail() {
  const {
    addFont,
    selected,
    setSelected,
    selectedFont,
    removeFont,
    setFontDetailName,
  } = useAppContext();
  const pathFontName = usePathname()
    .replace("/fontdetail/", "")
    .replace(/%20/g, " ");

  useEffect(() => {
    setFontDetailName(pathFontName);
  }, [pathFontName, setFontDetailName]);

  const { data, isLoading, isError } = GetFontVariantFile(pathFontName);

  useEffect(() => {
    const isFontSelected = selectedFont.some(
      (font) => font.family === pathFontName
    );
    setSelected(isFontSelected);
  }, [selectedFont, pathFontName, setSelected]);

  const handleClick = () => {
    if (data) {
      addFont({
        family: pathFontName,
        variants: data[0].variants,
        files: data[0].files,
      });
    }
  };

  const fontUrl = `https://fonts.googleapis.com/css?family=${pathFontName}`;

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
    <div className="flex flex-col gap-5 w-full mt-5">
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
      <p>Design by Google</p>
      <div className="h-60 w-[90em] text-center mt-10">
        <link rel="stylesheet" href={fontUrl}></link>
        <h1
          className="text-6xl overflow-hidden pt-5 pb-5"
          style={{ fontFamily: `${pathFontName}, sans-serif` }}
        >
          Whereas disregard and contempt for human rights have resulted
        </h1>
      </div>
      <h1 className="text-4xl">Styles</h1>
      <div className="flex items-center gap-5">
        <PreviewText />
        <SelectBar />
        <SliderBar />
      </div>
      <div className="flex flex-col items-center">
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
