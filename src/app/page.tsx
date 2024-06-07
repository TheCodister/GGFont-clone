"use client";
import Image from "next/image";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="fixed top-0 right-0 p-4 m-4 text-sm font-semibold text-white bg-black rounded-lg dark:bg-white dark:text-black">
        Click here to fetchdata
      </button>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to Next.js</h1>
        <p className="text-lg text-center">Get started by editing</p>
        <a
          className="text-blue-600 underline"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js documentation
        </a>
      </div>
    </main>
  );
}
