import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
const HoverCardDemo = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <div className="flex flex-row items-center cursor-pointer hover:bg-slate-50 p-2">
        <h1>About these results</h1>
        <InfoCircledIcon width={25} height={25} />
      </div>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[400px] rounded-md bg-black p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col text-white tracking-tight">
          <p>
            Search results are based on font and font designer names which most
            closely match your query, and are ranked using the following
            factors: (1) web usage of the font family; (2) trend in web usage of
            the font family; (3) the number of styles in the font family; (4)
            the date the font family was added to Google Fonts; and/or (5) how
            applicable the font family is to the dominant language(s) in your
            country (based on your location and settings). The relative weight
            given to each factor is determined by the sorting method you
            choose—for example, the date the font family was added to Google
            Fonts will play a bigger role if you choose to sort by Newest.
          </p>
        </div>

        <HoverCard.Arrow className="fill-black" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
