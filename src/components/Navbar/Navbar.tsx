"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import HoverCardDemo from "../HoverCard/HoverCard";
import SwitchViewButton from "../SwitchViewButton/SwitchViewButton";
import BagButton from "../BagButton/BagButton";
import Tune from "@/assets/tune.svg";
import { Button } from "@radix-ui/themes";
export default function Navbar() {
  return (
    <nav className="flex flex-col items-center w-min justify-center h-auto mt-5 sticky">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={logo}
          width={200}
          height={300}
          alt="logo"
          className="mr-7"
        />
        <SearchBar />
        <BagButton />
      </div>
      <Button
        size="3"
        variant="outline"
        radius="full"
        color="indigo"
        className="h-12 w-26 self-start mt-5"
      >
        <Image src={Tune} width={20} height={20} alt="logo" /> Filters
      </Button>
      <div className="flex items-center w-full justify-between mt-8">
        <p className="justify-self-start text-xs">1644 of 1644 families</p>
        <div className="flex items-center">
          <HoverCardDemo />
          <SwitchViewButton />
        </div>
      </div>
    </nav>
  );
}
