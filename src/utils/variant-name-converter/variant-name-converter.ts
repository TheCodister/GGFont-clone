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
      return "Semibold 600";
    case "700":
      return "Bold 700";
    case "800":
      return "Extrabold 800";
    case "900":
      return "Black 900";
    case "100italic":
      return "Thin 100 Italics";
    case "200italic":
      return "ExtraLight 200 Italics";
    case "300italic":
      return "Light 300 Italics";
    case "500italic":
      return "Medium 500 Italics";
    case "600italic":
      return "Semibold 600 Italics";
    case "700italic":
      return "Bold 700 Italics";
    case "800italic":
      return "Extrabold 800 Italics";
    case "900italic":
      return "Black 900 Italics";
    case "italic":
      return "Regular 400 Italics";
    default:
      return weight;
  }
};

export default variantNameConverter;
