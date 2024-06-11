import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchBar() {
  return (
    <TextField.Root
      size="3"
      radius="full"
      variant="soft"
      className="w-[70em] h-14"
      placeholder="Search fonts"
      color="gray"
    >
      <TextField.Slot side="left">
        <MagnifyingGlassIcon height="25" width="25" />
      </TextField.Slot>
    </TextField.Root>
  );
}
