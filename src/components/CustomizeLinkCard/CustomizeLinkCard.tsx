import SwitchVariant from "../SwitchVariant/SwitchVariant";
import { useAppContext } from "@/contexts/context";
import { variantNameConverter, isItalic, fontWeightConverter } from "@/utils";

interface FontCardProps {
  fontName: string;
  variant: string[];
}

const CustomizeLinkCard = ({ fontName, variant }: FontCardProps) => {
  const fontUrl = `https://fonts.googleapis.com/css?family=${fontName.replace(/ /g, "+")}`;
  const { textPreview, toggleVariant } = useAppContext();
  return (
    <div className="flex flex-col border-solid border-2 rounded-xl">
      <div className="p-5">
        <div className="flex gap-5 self-start">
          <h1 className="font-semibold">{fontName}</h1>
          <h2>Static</h2>
        </div>
        <>
          <link rel="stylesheet" href={fontUrl} />
          <h2
            className="text-5xl overflow-hidden pt-5 pb-5"
            style={{ fontFamily: `${fontName}, sans-serif` }}
          >
            {textPreview}
          </h2>
        </>
      </div>
      {variant.map((v) => (
        <div
          key={`${fontName}-${v}`}
          className="flex gap-3 items-center justify-between border-t-2 p-5"
        >
          <link rel="stylesheet" href={fontUrl} />
          <h2
            className=""
            style={{
              fontFamily: `${fontName}, sans-serif`,
              fontStyle: isItalic(v),
              fontWeight: fontWeightConverter(v),
            }}
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
