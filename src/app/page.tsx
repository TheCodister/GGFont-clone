// import Image from "next/image";
import { GetFonts } from "@/api/services/getFont";
import ListFontDisplay from "@/components/ListFontDisplay/ListFontDisplay";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <ListFontDisplay />
    </main>
  );
}
