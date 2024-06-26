"use client";
import { TextField } from "@radix-ui/themes";
import SearchIconUrl from "/src/assets/search.svg";
export default function SearchBar() {
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="h-14 w-full"
      placeholder="Search fonts"
      color="gray"
    >
      <TextField.Slot>
        <SearchIconUrl width={25} height={25} alt="logo" />
      </TextField.Slot>
    </TextField.Root>
  );
}
