"use client";
import Image from "next/image";
import logo from "/src/assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import HoverCard from "../HoverCard/HoverCard";
import { Button, IconButton } from "@radix-ui/themes";
import {
  MixerHorizontalIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
export default function Navbar() {
  return (
    <nav className="flex flex-col items-center w-auto justify-center h-auto mt-5">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={logo}
          width={200}
          height={300}
          alt="logo"
          className="mr-7"
        />
        <SearchBar />
        <IconButton
          size="4"
          variant="soft"
          color="gray"
          radius="full"
          className="ml-5"
        >
          <CheckCircledIcon width="18" height="18" />
        </IconButton>
      </div>
      <Button
        size="3"
        variant="outline"
        radius="full"
        color="blue"
        className="h-12 w-26 self-start mt-5"
      >
        <MixerHorizontalIcon /> Filters
      </Button>
      <div className="flex items-center w-full justify-between mt-8">
        <p className="justify-self-start text-xs">1644 of 1644 families</p>
        <div className="flex items-center">
          <HoverCard />
          <Button variant="outline" color="gray" className="rounded-l-lg">
            <ViewGridIcon />
          </Button>
          <Button variant="outline" color="gray" className="rounded-r-lg">
            <ViewHorizontalIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
