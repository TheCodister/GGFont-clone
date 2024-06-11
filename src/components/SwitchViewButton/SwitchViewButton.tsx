import { Button } from "@radix-ui/themes";
import Gridview from "/src/assets/gridview.svg";
import Listview from "/src/assets/listview.svg";
import Image from "next/image";
export default function SwitchViewButton() {
  return (
    <div className="flex items-center">
      <Button variant="outline" color="gray" className="rounded-l-lg">
        <Image src={Gridview} width={25} height={25} alt="logo" />
      </Button>
      <Button variant="outline" color="gray" className="rounded-r-lg">
        <Image src={Listview} width={25} height={25} alt="logo" />
      </Button>
    </div>
  );
}
