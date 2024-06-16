"use client";
import { TextField } from "@radix-ui/themes";
import { useAppContext } from "@/contexts/context";
import { useState } from "react";
export default function PreviewText() {
  const { setTextPreview } = useAppContext();
  const defaultText =
    "Whereas disregard and contempt for human rights have resulted";
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setTextPreview(newValue || defaultText);
  };
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="xl:w-[70em] lg:w-[60em] sm:w-[40em] h-14 pl-5"
      placeholder="Type here to preview text"
      value={value}
      onChange={handleChange}
    ></TextField.Root>
  );
}
