import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const HoverCardDemo = () => (
  <HoverCard.Root openDelay={100} closeDelay={100}>
    <HoverCard.Trigger asChild>
      <div className="flex flex-row items-center mr-5 gap-1">
        <h1>About these results</h1>
        <InfoCircledIcon width={22} height={22} />
      </div>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="bg-black w-[400px] rounded p-3 text-left"
        sideOffset={5}
      >
        <p className="text-sm text-white">
          Search results are based on font and font designer names which most
          closely match your query, and are ranked using the following factors:
          (1) web usage of the font family; (2) trend in web usage of the font
          family; (3) the number of styles in the font family; (4) the date the
          font family was added to Google Fonts; and/or (5) how applicable the
          font family is to the dominant language(s) in your country (based on
          your location and settings). The relative weight given to each factor
          is determined by the sorting method you choose—for example, the date
          the font family was added to Google Fonts will play a bigger role if
          you choose to sort by Newest.
        </p>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
