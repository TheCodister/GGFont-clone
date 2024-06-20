"use client";
import { useAppContext } from "@/contexts/context";
import { TextArea } from "@radix-ui/themes";
import { SliderBar, SelectBar } from "@/components";
import { useState } from "react";
export default function SideBar() {
  const { toggleSidebar, setTextPreview } = useAppContext();
  const defaultText =
    "Whereas disregard and contempt for human rights have resulted";
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setTextPreview(newValue || defaultText);
  };
  return (
    <div>
      {toggleSidebar ? (
        <div className="flex flex-col w-[15vw] p-5 h-screen gap-5">
          <h1 className="font-bold">Preview</h1>
          <TextArea
            className="h-40"
            placeholder="Type something"
            size="3"
            radius="full"
            value={value}
            onChange={handleChange}
          />
          <div className="flex items-center">
            <SelectBar />
            <SliderBar />
          </div>
        </div>
      ) : null}
    </div>
  );
}
