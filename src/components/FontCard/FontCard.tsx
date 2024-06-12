interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}

export default function FontCard(props: FontCardProps) {
  const name = props.fontName;
  const ref = "https://fonts.googleapis.com/css?family=" + name;
  return (
    <div className="flex flex-col w-[89em] border-solid border-b-2 p-5 hover:bg-slate-100 cursor-pointer rounded">
      <div className="flex gap-3 items-center">
        <h2 className="font-semibold">{name}</h2>
        <p>{props.numVariants} varient</p>
        <p>|</p>
        <p>{props.creator}</p>
      </div>
      <link rel="stylesheet" href={ref}></link>
      <h1
        className="text-5xl overflow-hidden pt-5 pb-5"
        style={{ fontFamily: `${name}, sans-serif` }}
      >
        Whereas disregard and contempt for human rights have resulted
      </h1>
    </div>
  );
}
