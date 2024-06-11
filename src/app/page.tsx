"use client";
// import Image from "next/image";
import { GetFonts } from "@/api/services/getFont";

export default function Home() {
  const { data, isLoading, isError } = GetFonts();
  if (isLoading) {
    console.log("Loading...");
  }
  if (isError) {
    console.log("Error");
  }
  if (data) {
    console.log(data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
