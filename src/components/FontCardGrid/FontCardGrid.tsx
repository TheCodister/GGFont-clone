import { useAppContext } from "@/contexts/context";
import Link from "next/link";
import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}

export default function FontCardGrid(props: FontCardProps) {
  const name = props.fontName;
  const [isIntersecting, ref] = useLazyLoad();
  const { setFontView, setFontDetailName, textPreview } = useAppContext();
  const handleClick = () => {
    setFontDetailName(name);
    setFontView(true);
  };
  const link = "/fontdetail/" + name;
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  return (
    <Link href={link}>
      <div
        ref={ref}
        className="flex flex-col w-[325px] h-[500px] border-solid border-2 p-5 hover:bg-slate-100 cursor-pointer rounded-lg"
        onClick={() => handleClick()}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <div className="flex gap-3 items-center justify-between">
          <h2 className="font-semibold self-end">{name}</h2>
          <p>{props.numVariants} styles</p>
        </div>
        <p>{props.creator}</p>
        {isIntersecting && (
          <>
            <link rel="stylesheet" href={fontUrl}></link>
            <h1
              className="text-5xl overflow-hidden pt-5 pb-5"
              style={{ fontFamily: `${name}, sans-serif` }}
            >
              {textPreview}
            </h1>
          </>
        )}
      </div>
    </Link>
  );
}
