import { useAppContext } from "@/contexts/context";
import Link from "next/link";
import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
import ROUTES from "@/constants/routes/routes";
interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}

export default function FontCardGrid(props: FontCardProps) {
  const name = props.fontName;
  const [isIntersecting, ref] = useLazyLoad();
  const { setFontDetailName, textPreview, size } = useAppContext();
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  return (
    <Link href={ROUTES.FONTDETAIL + name}>
      <div
        ref={ref}
        className="flex flex-col h-[500px] border-solid border-2 p-5 hover:bg-slate-100 cursor-pointer rounded-lg"
        onClick={() => setFontDetailName(name)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <div className="flex gap-3 items-center justify-between">
          <h1 className="font-semibold self-end">{name}</h1>
          <p>{props.numVariants} styles</p>
        </div>
        <p>{props.creator}</p>
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
