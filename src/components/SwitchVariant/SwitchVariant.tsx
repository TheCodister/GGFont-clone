import React from "react";
import * as Switch from "@radix-ui/react-switch";

interface SwitchVariantProps {
  onChange: (enabled: boolean) => void;
}
const SwitchVariant = ({ onChange }: SwitchVariantProps) => (
  <div className="flex items-center">
    <Switch.Root
      defaultChecked
      className="items-center w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 data-[state=checked]:bg-[#d2e3fc] outline-none cursor-default"
      onCheckedChange={(e) => onChange(e)}
    >
      <Switch.Thumb className="block w-[21px] h-[21px] bg-[#1a73e8] rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  </div>
);

export default SwitchVariant;
