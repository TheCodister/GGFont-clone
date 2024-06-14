import axios from "axios";
import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async () => {
  const res = await axios.get(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=" + process.env.API_KEY
  );
  return res;
};

const GetFonts = () => {
  const { data, error } = useSWR("fonts", fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

async function fetchFontVariant(fileUrl: string) {
  const res = await axios.get(fileUrl, { responseType: "blob" });
  return res;
}

const GetFontVariantFile = async (fileUrl: string) => {
  const { data, error } = useSWR(fileUrl, fetchFontVariant);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { GetFonts, GetFontVariantFile };
