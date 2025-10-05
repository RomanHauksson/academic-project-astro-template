import { useState, Children } from "react";
import { Fragment } from "react";

// interface ThumbnailPageProps {
//   thumbnail: string;
//   thumbnailAlt?: string;
//   children: React.ReactNode;
// }

// export function ThumbnailPage({
//   thumbnail,
//   thumbnailAlt,
//   children,
// }: ThumbnailPageProps) {
//   return <>{children}</>;
// }

export function MyThumbnailSwitcher({
  tabs,
}: {
  tabs: {
    thumbnail: string;
    content: any;
  }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-row gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer ${activeIndex === index ? "border-2 border-blue-500" : ""}`}
          >
            {tab.thumbnail}
          </button>
        ))}
      </div>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: tabs[activeIndex].content }}
      />
    </div>
  );
}
