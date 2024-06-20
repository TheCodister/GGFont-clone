import axios from "axios";
import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async () => {
  const res = await axios.get(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=" + process.env.API_KEY
  );
  return res;
};

const useGetFonts = () => {
  const { data, error } = useSWR("fonts", fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

async function fetchFontVariant(fontName: string) {
  const res = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.API_KEY}&family=${fontName}`
  );
  // console.log(res.data.items[0].variants);
  return res.data.items;
}

const useGetFontVariantFile = (fontName: string) => {
  const { data, error } = useSWR(
    "fontVariant",
    () => fetchFontVariant(fontName),
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useGetFonts, useGetFontVariantFile };
