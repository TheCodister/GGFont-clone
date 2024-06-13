"use client";
import { TextField } from "@radix-ui/themes";
import SearchIconUrl from "/src/assets/search.svg";
import Image from "next/image";
export default function SearchBar() {
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="xl:w-[80em] lg:w-[60em] sm: w-[40em] h-14"
      placeholder="Search fonts"
      color="gray"
    >
      <TextField.Slot>
        <Image src={SearchIconUrl} width={20} height={20} alt="logo" />
      </TextField.Slot>
    </TextField.Root>
  );
}
