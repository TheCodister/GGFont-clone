"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import GGfontlogo from "@/assets/ggfontlogo.png";
import SearchBar from "../SearchBar/SearchBar";
import BagButton from "../BagButton/BagButton";
import Link from "next/link";
import ROUTES from "@/constants/routes/routes";
export default function Header() {
  return (
    <nav className="container h-auto mt-5 sticky">
      <div className="flex justify-center items-center max-w-full">
        <Link href={ROUTES.HOME}>
          <Image
            src={logo}
            width={200}
            height={300}
            alt="fulllogo"
            className="cursor-pointer p-2 xl:block min-[320px]:hidden"
          />
          <Image
            src={GGfontlogo}
            width={100}
            height={100}
            alt="smalllogo"
            className="cursor-pointer p-2 xl:hidden min-[320px]:block"
          />
        </Link>
        <SearchBar />
        <BagButton />
      </div>
    </nav>
  );
}
