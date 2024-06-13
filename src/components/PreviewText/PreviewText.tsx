"use client";
import { TextField } from "@radix-ui/themes";
export default function PreviewText() {
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="xl:w-[70em] lg:w-[60em] sm:w-[40em] h-14 pl-5"
      placeholder="Type here to preview text"
    ></TextField.Root>
  );
}
