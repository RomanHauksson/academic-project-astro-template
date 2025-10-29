import { useState, useRef } from "react";

export function MyCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="col-span-full">
      <CarouselControls currentPage={currentPage} pageCount={5} onPrevious={() => setCurrentPage(currentPage - 1)} onNext={() => setCurrentPage(currentPage + 1)} onGoToPage={(page) => setCurrentPage(page)} />
      <div
        className="carousel flex snap-x snap-mandatory gap-6 overflow-scroll px-0!"
      >
        <div className="slide">
          <img src="/screenshot-dark.png" />
        </div>
        <div className="slide">
          <img src="/screenshot-dark.png" />
        </div>
        <div className="slide">
          <img src="/screenshot-dark.png" />
        </div>
        <div className="slide">
          <img src="/screenshot-dark.png" />
        </div>
        <div className="slide">
          <img src="/screenshot-dark.png" />
        </div>
      </div>
    </div>
  );
}

function CarouselControls({ currentPage, pageCount, onPrevious, onNext, onGoToPage }: { currentPage: number, pageCount: number, onPrevious: () => void, onNext: () => void, onGoToPage: (page: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="disabled:opacity-50 cursor-not-allowed" onClick={onPrevious}>Previous</button>
      <ul className="flex gap-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <li className="cursor-pointer" key={i} onClick={() => onGoToPage(i)}>{i + 1}</li>
        ))}
      </ul>
      <button className="disabled:opacity-50 cursor-not-allowed" onClick={onNext}>Next</button>
    </div>
  );
}