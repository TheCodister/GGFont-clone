import React from "react";
import { Button } from "@radix-ui/themes";
import GridView from "@/assets/gridview.svg";
import ListView from "@/assets/listview.svg";

export default function SwitchViewButton({
  setIsGridview,
  isGridview,
}: {
  isGridview: boolean;
  setIsGridview: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center">
      <Button
        variant={isGridview ? "solid" : "outline"}
        color={isGridview ? "blue" : "gray"}
        className="rounded-l-lg cursor-pointer"
        onClick={() => setIsGridview(true)}
      >
        <GridView width={25} height={25} alt="logo" />
      </Button>
      <Button
        variant={!isGridview ? "solid" : "outline"}
        color={!isGridview ? "blue" : "gray"}
        className="rounded-r-lg cursor-pointer"
        onClick={() => setIsGridview(false)}
      >
        <ListView width={25} height={25} alt="logo" />
      </Button>
    </div>
  );
}
