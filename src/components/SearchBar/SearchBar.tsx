"use client";
import { TextField } from "@radix-ui/themes";
import SearchIcon from "/src/assets/search.svg";
import Image from "next/image";
export default function SearchBar() {
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="w-[80em] h-14"
      placeholder="Search fonts"
      color="gray"
    >
      <TextField.Slot>
        <Image src={SearchIcon} width={20} height={20} alt="logo" />
      </TextField.Slot>
    </TextField.Root>
  );
}
