import { Select } from "@radix-ui/themes";
export default function SelectBar() {
  return (
    <Select.Root defaultValue="8px" size="3">
      <Select.Trigger
        radius="large"
        variant="soft"
        className="border-none hover:bg-slate-100 font-semibold"
      />
      <Select.Content className="font-semibold">
        <Select.Item value="8px">8px</Select.Item>
        <Select.Item value="12px">12px</Select.Item>
        <Select.Item value="16px">16px</Select.Item>
        <Select.Item value="20px">20px</Select.Item>
        <Select.Item value="24px">24px</Select.Item>
        <Select.Item value="28px">28px</Select.Item>
        <Select.Item value="32px">32px</Select.Item>
        <Select.Item value="36px">36px</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
