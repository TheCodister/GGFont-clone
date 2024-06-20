import Link from "next/link";
import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
import { useAppContext } from "@/contexts/context";
import ROUTES from "@/constants/routes/routes";

interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}

export default function FontCard(props: FontCardProps) {
  const [isIntersecting, ref] = useLazyLoad();
  const name = props.fontName;
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  const { setFontDetailName, textPreview, size } = useAppContext();

  return (
    <Link href={ROUTES.FONTDETAIL + name}>
      <div
        ref={ref}
        className="flex flex-col h-52 border-solid border-b-2 p-5 hover:bg-slate-100 cursor-pointer rounded"
        onClick={() => setFontDetailName(name)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold">{name}</h1>
          <h2>{props.numVariants} variant</h2>
          <h2>|</h2>
          <h2>{props.creator}</h2>
        </div>
        {isIntersecting && (
          <>
            <link rel="stylesheet" href={fontUrl}></link>
            <h2
              className="text-5xl overflow-hidden pt-5 pb-5"
              style={{
                fontFamily: `${name}, sans-serif`,
                fontWeight: 400,
                fontSize: `${size})`,
              }}
            >
              {textPreview}
            </h2>
          </>
        )}
      </div>
    </Link>
  );
}
