import { useState } from "react";

interface ThumbnailPageProps {
  thumbnail: ImageMetadata;
  thumbnailAlt?: string;
  children: React.ReactNode;
}

export function ThumbnailPage({
  thumbnail,
  thumbnailAlt,
  children,
}: ThumbnailPageProps) {
  return <>{children}</>;
}

export function ThumbnailSwitcher({
  children,
}: {
  children: React.ReactElement<ThumbnailPageProps>[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Thumbnail row */}
      <div className="flex gap-2 mb-4">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              activeIndex === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={child.props.thumbnail.src}
              alt={child.props.thumbnailAlt || `Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="w-full">{children[activeIndex]}</div>
    </div>
  );
}
