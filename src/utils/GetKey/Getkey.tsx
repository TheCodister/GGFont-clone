import API_KEY from "@/api/api_key";
export default function GetKey(pageIndex: number, previousPageData: any) {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&page=${pageIndex}&limit=10`; // SWR key
}
