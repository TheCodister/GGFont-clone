import useLazyLoad from "@/hooks/useLazyLoad/useLazyLoad";
import { useAppContext } from "@/contexts/context";
interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
  variant: string;
}

export default function FontVarCard(props: FontCardProps) {
  const [isIntersecting, ref] = useLazyLoad();
  const { textPreview } = useAppContext();
  const name = props.fontName;
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`;
  return (
    <div
      ref={ref}
      className="flex flex-col lg:w-[86em] md:w-[50em] border-solid border-b-2 p-5 rounded"
    >
      <div className="flex gap-3 items-center">
        <h2 className="font-semibold">{props.variant}</h2>
      </div>
      {isIntersecting && (
        <>
          <link rel="stylesheet" href={fontUrl}></link>
          <h1
            className="text-5xl overflow-hidden pt-5 pb-5"
            style={{
              fontFamily: `${name}, sans-serif`,
              fontWeight: `${props.variant}`,
              fontStyle: `${props.variant}`,
            }}
          >
            {textPreview}
          </h1>
        </>
      )}
    </div>
  );
}
