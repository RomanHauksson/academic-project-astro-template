import React, { useRef, useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { CarouselControls } from './CarouselControls';

interface ClaudeCarouselProps {
  children: ReactNode;
}

export const ClaudeCarousel: React.FC<ClaudeCarouselProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // Calculate how many pages we need based on viewport width
  const calculatePages = useCallback(() => {
    if (!wrapperRef.current) return 1;

    const wrapper = wrapperRef.current;
    const viewportWidth = wrapper.clientWidth;
    const totalContentWidth = wrapper.scrollWidth;

    if (totalContentWidth <= viewportWidth) return 1;

    return Math.ceil(totalContentWidth / viewportWidth);
  }, [children]);


  // Update active dot based on scroll position
  const updateActiveDot = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const scrollLeft = wrapper.scrollLeft;
    const viewportWidth = wrapper.offsetWidth;
    const maxScroll = wrapper.scrollWidth - viewportWidth;
    let newPage: number;

    if (scrollLeft <= 10) {
      newPage = 0;
    } else if (scrollLeft >= maxScroll - 10) {
      newPage = pageCount - 1;
    } else {
      newPage = Math.round((scrollLeft / maxScroll) * (pageCount - 1));
    }

    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [currentPage, pageCount]);

  // Go to specific page
  const goToPage = useCallback((pageIndex: number) => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const viewportWidth = wrapper.offsetWidth;
    const maxScroll = wrapper.scrollWidth - viewportWidth;

    if (pageIndex === 0) {
      wrapper.scrollLeft = 0;
    } else if (pageIndex === pageCount - 1) {
      wrapper.scrollLeft = maxScroll;
    } else {
      wrapper.scrollLeft = (pageIndex / (pageCount - 1)) * maxScroll;
    }

    setCurrentPage(pageIndex);
  }, [pageCount]);

  // Handle previous button
  const handlePrev = () => {
    const newPage = Math.max(0, currentPage - 1);
    goToPage(newPage);
  };

  // Handle next button
  const handleNext = () => {
    const newPage = Math.min(pageCount - 1, currentPage + 1);
    goToPage(newPage);
  };

  // Initialize and handle resize
  useEffect(() => {
    const pages = calculatePages();
    setPageCount(pages);

    const handleResize = () => {
      const newPages = calculatePages();
      setPageCount(newPages);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePages, children]);

  // Add scroll listener
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener('scroll', updateActiveDot);
    return () => wrapper.removeEventListener('scroll', updateActiveDot);
  }, [updateActiveDot]);

  return (
    <div className="w-full overflow-hidden col-span-full max-w-screen! px-0!">
      <CarouselControls
        pageCount={pageCount}
        currentPage={currentPage}
        onPrevious={handlePrev}
        onNext={handleNext}
        onGoToPage={goToPage}
      />
      <div 
        className="flex justify-start w-full overflow-x-auto scroll-smooth max-w-screen! [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={wrapperRef}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-5">
          {children}
        </div>
      </div>
    </div>
  );
};

