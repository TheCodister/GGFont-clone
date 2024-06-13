"use client";
import { useAppContext } from "@/contexts/context";
import PreviewText from "@/components/PreviewText/PreviewText";
import SliderBar from "@/components/SliderBar/SliderBar";
import SelectBar from "@/components/SelectBar/SelectBar";
export default function FontDetail() {
  const { fontdetailname } = useAppContext();
  const fontUrl = `https://fonts.googleapis.com/css?family=${fontdetailname}`;
  return (
    <div className="flex flex-col gap-5 w-full mt-5">
      <h1 className="text-5xl font-semibold">{fontdetailname}</h1>
      <p>Design by Google</p>
      <div className="h-60 w-[90em] text-center mt-10">
        <link rel="stylesheet" href={fontUrl}></link>
        <h1
          className="text-6xl overflow-hidden pt-5 pb-5"
          style={{ fontFamily: `${fontdetailname}, sans-serif` }}
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
    </div>
  );
}
