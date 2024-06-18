"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import BagButton from "../BagButton/BagButton";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-center h-auto mt-5 sticky">
      <div className="flex flex-row justify-center items-center max-w-full">
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={300}
            alt="Googlelogo"
            className="mr-0 md:mr-7 mb-4 md:mb-0"
          />
        </Link>
        <SearchBar />
        <BagButton />
      </div>
    </nav>
  );
}
