import React from "react";
import { Button } from "@radix-ui/themes";
import GridView from "@/assets/gridview.svg";
import ListView from "@/assets/listview.svg";
import Image from "next/image";
import { useAppContext } from "@/contexts/context";
export default function SwitchViewButton() {
  const { setView } = useAppContext();
  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        color="gray"
        className="rounded-l-lg cursor-pointer"
        onClick={() => setView(true)}
      >
        <Image src={GridView} width={25} height={25} alt="logo" />
      </Button>
      <Button
        variant="outline"
        color="gray"
        className="rounded-r-lg cursor-pointer"
        onClick={() => setView(false)}
      >
        <Image src={ListView} width={25} height={25} alt="logo" />
      </Button>
    </div>
  );
}
