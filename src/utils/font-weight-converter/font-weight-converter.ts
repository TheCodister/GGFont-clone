const fontWeightConverter = (weight: string) => {
  const realWeight = weight.replace("italic", "");
  switch (realWeight) {
    case "100":
      return "100";
    case "200":
      return "200";
    case "300":
      return "300";
    case "regular":
      return "400";
    case "500":
      return "500";
    case "600":
      return "600";
    case "700":
      return "bold";
    case "800":
      return "800";
    case "900":
      return "900";
    default:
      return realWeight;
  }
};

export default fontWeightConverter;
