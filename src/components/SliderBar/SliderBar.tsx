import * as Slider from "@radix-ui/react-slider";
import { useAppContext } from "../../contexts/context";
export default function SliderBar() {
  const { setSize } = useAppContext();
  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[300px] h-5"
        defaultValue={[48]}
        max={300}
        min={8}
        step={1}
        onValueChange={(value) => setSize(value + "px")}
      >
        <Slider.Track className="bg-[#d2e3fc] relative grow rounded-full h-[5px]">
          <Slider.Range className="absolute bg-[#1a73e8] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-[#1a73e8] rounded-[10px] hover:bg-slade focus:outline-none hover:shadow-[0_0_0_10px] hover:shadow-slate-300"
          aria-label="Volume"
        />
      </Slider.Root>
    </form>
  );
}
