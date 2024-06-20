import { fontWeightConverter, variantNameConverter, isItalic } from "@/utils";
import { useAppContext } from "@/contexts/context";
interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
  variant: string;
}

export default function FontVarCard(props: FontCardProps) {
  const { textPreview, size } = useAppContext();
  const name = props.fontName;
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  return (
    <div className="border-solid border-t-2 p-5">
      <div>
        <h1 className="font-semibold">{variantNameConverter(props.variant)}</h1>
      </div>

      <link rel="stylesheet" href={fontUrl}></link>
      <h2
        className="text-5xl overflow-hidden pt-5 pb-5"
        style={{
          fontFamily: `${name}`,
          fontWeight: `${fontWeightConverter(props.variant)}`,
          fontStyle: `${isItalic(props.variant)}`,
          fontSize: `${size}`,
        }}
      >
        {textPreview}
      </h2>
    </div>
  );
}
