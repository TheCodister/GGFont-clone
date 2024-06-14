interface FontWeight {
  fontweight: string;
}
export default function FontWeight(props: FontWeight) {
  if (props.fontweight === "light") {
    return (
      <h1 className="text-5xl overflow-hidden pt-5 pb-5 font-light">
        Whereas disregard and contempt for human rights have
      </h1>
    );
  }
  if (props.fontweight === "regular") {
    return (
      <h1 className="text-5xl overflow-hidden pt-5 pb-5 font-normal">
        Whereas disregard and contempt for human rights have
      </h1>
    );
  }
  if (props.fontweight === "500") {
    return (
      <h1 className="text-5xl overflow-hidden pt-5 pb-5 font-medium">
        Whereas disregard and contempt for human rights have
      </h1>
    );
  }
  if (props.fontweight === "600") {
    return (
      <h1 className="text-5xl overflow-hidden pt-5 pb-5 font-semibold">
        Whereas disregard and contempt for human rights have
      </h1>
    );
  }
}
