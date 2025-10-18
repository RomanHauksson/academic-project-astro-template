import { ReactCompareSlider } from "react-compare-slider";

export function Comparison({
  itemOne,
  itemTwo,
}: {
  itemOne: React.ReactNode;
  itemTwo: React.ReactNode;
}) {
  return (
    <ReactCompareSlider
      className="not-prose w-full rounded-lg"
      itemOne={itemOne}
      itemTwo={itemTwo}
    />
  );
}
