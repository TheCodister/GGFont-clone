import axios from "axios";
import API_KEY from "../api_key";
import useSWR from "swr";

const fetcher = async () => {
  const res = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`
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
// const getFonts = async () => {
//   return axios
//     .get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
//     .then((result) => ({
//       status: "ok",
//       data: result.data,
//     }))
//     .catch((error) => ({
//       status: "error",
//       error: error.data,
//     }));
// };

const getFontVariantFile = async (fileUrl: string) => {
  return axios
    .get(fileUrl, { responseType: "blob" })
    .then((result) => ({
      status: "ok",
      data: result.data,
    }))
    .catch((error) => ({
      status: "error",
      error: error.data,
    }));
};

export { GetFonts, getFontVariantFile };
