import { IconButton } from "@radix-ui/themes";
import Bag from "/src/assets/shoppingbag.svg";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useAppContext } from "@/contexts/context";

export default function BagButton() {
  const { selectedFont } = useAppContext();
  return (
    <Link href="/selection">
      <div className="flex ml-12 mt-2 items-center justify-center w-4 absolute bg-blue-600 text-xs text-white rounded-full">
        {selectedFont.length}
      </div>
      <HoverCard.Root openDelay={100} closeDelay={100}>
        <HoverCard.Trigger asChild>
          <IconButton
            size="4"
            variant="soft"
            color="gray"
            radius="full"
            className="ml-5 bg-transparent hover:bg-gray-200"
          >
            <Bag width={25} height={25} alt="logo" />
          </IconButton>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className="bg-black w-[180px] text-center rounded"
            sideOffset={5}
          >
            <p className="text-white">View selected families</p>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </Link>
  );
}
