const fontWeightConverter = (weight: string) => {
  switch (weight) {
    case "regular":
      return "400";
    case "500":
      return "500";
    case "600":
      return "semibold";
    case "700":
      return "bold";
    case "italic":
      return "400";
    default:
      return weight;
  }
};

export default fontWeightConverter;
