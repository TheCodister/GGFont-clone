import { Select } from "@radix-ui/themes";
import { useAppContext } from "@/contexts/context";
export default function SelectBar() {
  const { size, setSize } = useAppContext();
  const sizeOptions = Array.from({ length: 293 }, (_, i) => `${8 + i}px`);
  return (
    <Select.Root
      defaultValue="8px"
      size="3"
      value={size}
      onValueChange={() => setSize(size)}
    >
      <Select.Trigger
        radius="large"
        variant="soft"
        className="border-none hover:bg-slate-100 font-semibold"
      />
      <Select.Content className="font-semibold">
        {sizeOptions.map((size) => (
          <Select.Item value={size}>{size}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
