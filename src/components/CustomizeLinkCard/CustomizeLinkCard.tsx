import React from "react";
import SwitchVariant from "../SwitchVariant/SwitchVariant";
import { useAppContext } from "@/contexts/context";
import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
import { variantNameConverter } from "@/utils";

interface FontCardProps {
  fontName: string;
  variant: string[];
}

const CustomizeLinkCard = ({ fontName, variant }: FontCardProps) => {
  const [isIntersecting, ref] = useLazyLoad();
  const fontUrl = `https://fonts.googleapis.com/css?family=${fontName.replace(/ /g, "+")}`;
  const { textPreview, toggleVariant } = useAppContext();

  return (
    <div
      ref={ref}
      className="flex flex-col lg:w-[30em] md:w-[15em] border-solid border-2 rounded-xl"
    >
      <div className="flex flex-col gap-3 items-center p-5">
        <div className="flex gap-5 self-start">
          <h2 className="font-semibold">{fontName}</h2>
          <p>Static</p>
        </div>
        {isIntersecting && (
          <>
            <link rel="stylesheet" href={fontUrl} />
            <h1
              className="text-5xl overflow-hidden pt-5 pb-5"
              style={{ fontFamily: `${fontName}, sans-serif` }}
            >
              {textPreview}
            </h1>
          </>
        )}
      </div>
      {variant.map((v) => (
        <div
          key={`${fontName}-${v}`}
          className="flex gap-3 items-center justify-between w-full border-t-2 p-5"
        >
          <link rel="stylesheet" href={fontUrl} />
          <h2
            className=""
            style={{ fontFamily: `${fontName}, sans-serif`, fontStyle: v }}
          >
            {variantNameConverter(v)}
          </h2>
          <SwitchVariant
            onChange={(enabled) => toggleVariant(fontName, v, enabled)}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomizeLinkCard;
