import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export function ImageComparison({
  imageUrlOne,
  imageUrlTwo,
  altTextOne,
  altTextTwo,
}: {
  imageUrlOne: string;
  imageUrlTwo: string;
  altTextOne?: string;
  altTextTwo?: string;
}) {
  return (
    <div className="w-full">
      <ReactCompareSlider
        boundsPadding={0}
        // clip="both"
        itemOne={<ReactCompareSliderImage alt={altTextOne} src={imageUrlOne} />}
        itemTwo={<ReactCompareSliderImage alt={altTextTwo} src={imageUrlTwo} />}
        keyboardIncrement="5%"
        position={50}
        style={{
          backgroundColor: "white",
          backgroundImage:
            "\n      linear-gradient(45deg, #ccc 25%, transparent 25%),\n      linear-gradient(-45deg, #ccc 25%, transparent 25%),\n      linear-gradient(45deg, transparent 75%, #ccc 75%),\n      linear-gradient(-45deg, transparent 75%, #ccc 75%)",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          backgroundSize: "20px 20px",
          width: "100%",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
}
