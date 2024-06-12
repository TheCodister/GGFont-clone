interface FontCardProps {
  fontName: string;
  numVariants: number;
  creator: string;
}

export default function FontCardGrid(props: FontCardProps) {
  const name = props.fontName;
  const ref = "https://fonts.googleapis.com/css?family=" + name;
  return (
    <div className="flex flex-col w-[325px] h-[500px] border-solid border-2 p-5 hover:bg-slate-100 cursor-pointer rounded-lg">
      <div className="flex gap-3 items-center justify-between">
        <h2 className="font-semibold self-end">{name}</h2>
        <p>{props.numVariants} varient</p>
      </div>
      <p>{props.creator}</p>
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
