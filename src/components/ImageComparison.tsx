import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export function ImageComparison({
  imageOne,
  imageTwo,
  altTextOne,
  altTextTwo,
}: {
  imageOne: ImageMetadata;
  imageTwo: ImageMetadata;
  altTextOne?: string;
  altTextTwo?: string;
}) {
  return (
    <div className="w-full">
      <ReactCompareSlider
        boundsPadding={0}
        // clip="both"
        itemOne={
          <ReactCompareSliderImage
            alt={altTextOne}
            src={imageOne.src}
            width={imageOne.width}
            height={imageOne.height}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            alt={altTextTwo}
            src={imageTwo.src}
            width={imageTwo.width}
            height={imageTwo.height}
          />
        }
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
