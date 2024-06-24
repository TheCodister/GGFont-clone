// import ListFontDisplay from "@/components/ListFontDisplay/ListFontDisplay";
import dynamic from "next/dynamic";
const FontDisplay = dynamic(
  () => import("@/components/ListFontDisplay/ListFontDisplay")
);
export default function Home() {
  return (
    <main className="pt-12">
      <FontDisplay />
    </main>
  );
}
