// import ListFontDisplay from "@/components/ListFontDisplay/ListFontDisplay";
import dynamic from "next/dynamic";
const FontDisplay = dynamic(
  () => import("@/components/ListFontDisplay/ListFontDisplay")
);
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <FontDisplay />
    </main>
  );
}
