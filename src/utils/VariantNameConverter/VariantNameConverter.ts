const variantNameConverter = (weight: string) => {
  switch (weight) {
    case "100":
      return "Thin 100";
    case "200":
      return "ExtraLight 200";
    case "300":
      return "Light 300";
    case "regular":
      return "Regular 400";
    case "500":
      return "Medium 500";
    case "600":
      return "Regular 600 semibold";
    case "700":
      return "Regular 700 bold";
    case "italic":
      return "Regular 400 Italics";
    default:
      return weight;
  }
};

export default variantNameConverter;
