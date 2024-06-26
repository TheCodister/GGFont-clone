import { IconButton } from "@radix-ui/themes";
import Bag from "/src/assets/shoppingbag.svg";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useAppContext } from "@/contexts/context";
import ROUTES from "@/constants/routes/routes";

export default function BagButton() {
  const { selectedFont } = useAppContext();
  return (
    <Link href={ROUTES.SELECTION}>
      <div className="flex xl:ml-12 min-[320px]:ml-8 mt-2 items-center justify-center w-4 absolute bg-blue-600 text-xs text-white rounded-full z-10">
        {selectedFont.length}
      </div>
      <HoverCard.Root openDelay={100} closeDelay={100}>
        <HoverCard.Trigger asChild>
          <IconButton
            size="4"
            variant="soft"
            color="gray"
            radius="full"
            className="xl:ml-5 min-[320px]:ml-1 bg-transparent hover:bg-gray-200 hover:scale-110 transition-all duration-100 cursor-pointer"
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
