import React from 'react';
import type { ReactNode } from 'react';

interface ClaudeCarouselSlideProps {
  children: ReactNode;
}

export const ClaudeCarouselSlide: React.FC<ClaudeCarouselSlideProps> = ({ children }) => {
  return (
    <div 
      data-carousel-slide
      className="min-w-80 w-120 shrink-0 snap-center flex items-center justify-center h-[400px] first:pl-5 last:pr-5"
    >
      <div className="w-full h-full flex items-center justify-center [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_video]:w-full [&_video]:h-full [&_video]:object-cover">
        {children}
      </div>
    </div>
  );
};

