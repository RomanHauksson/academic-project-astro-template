import React from 'react';

interface CarouselControlsProps {
  pageCount: number;
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  pageCount,
  currentPage,
  onPrevious,
  onNext,
  onGoToPage,
}) => {
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage === pageCount - 1;
  
  return (
    <div className="flex items-center justify-center gap-5 p-5 max-w-screen!">
      <button
        className="w-9 h-9 rounded-full border-2 border-[#4a90e2] bg-white text-[#4a90e2] text-lg cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#4a90e2] hover:text-white active:scale-95 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Previous"
        disabled={isPrevDisabled}
        onClick={onPrevious}
      >
        ‹
      </button>
      <div className="flex gap-2.5">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out ${
              i === currentPage 
                ? 'bg-[#4a90e2] scale-140' 
                : 'bg-gray-300 hover:bg-[#4a90e2] hover:scale-140'
            }`}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => onGoToPage(i)}
          />
        ))}
      </div>
      <button
        className="w-9 h-9 rounded-full border-2 border-[#4a90e2] bg-white text-[#4a90e2] text-lg cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#4a90e2] hover:text-white active:scale-95 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next"
        disabled={isNextDisabled}
        onClick={onNext}
      >
        ›
      </button>
    </div>
  );
};

