import Link from "next/link";
import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
import { useAppContext } from "@/contexts/context";
interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}
export default function FontCard(props: FontCardProps) {
  const [isIntersecting, ref] = useLazyLoad();
  const name = props.fontName;
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  const link = "/fontdetail/" + name;
  const { setFontView, setFontDetailName, textPreview } = useAppContext();
  const handleClick = () => {
    setFontDetailName(name);
    setFontView(true);
  };
  return (
    <Link href={link}>
      <div
        ref={ref}
        className="flex flex-col h-52 lg:w-[86em] md:w-[50em] border-solid border-b-2 p-5 hover:bg-slate-100 cursor-pointer rounded"
        onClick={() => handleClick()}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <div className="flex gap-3 items-center">
          <h2 className="font-semibold">{name}</h2>
          <p>{props.numVariants} varient</p>
          <p>|</p>
          <p>{props.creator}</p>
        </div>
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
