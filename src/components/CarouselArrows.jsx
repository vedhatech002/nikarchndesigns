// src/components/CarouselArrows.jsx
// Shared sleek prev/next arrow controls used by the Hero carousel and the
// Projects carousel so both keep an identical look and feel.
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseBtn =
  "group flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full " +
  "border border-silver-300/30 bg-black/40 backdrop-blur-sm text-silver-300 " +
  "transition-all duration-300 ease-out " +
  "hover:bg-silver-100 hover:text-black hover:border-silver-100 " +
  "hover:shadow-[0_0_18px_rgba(226,232,240,0.5)] " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-300/60 " +
  "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black/40 disabled:hover:text-silver-300 disabled:hover:shadow-none";

const CarouselArrows = ({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  className = "",
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
}) => {
  return (
    <div
      className={`absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 pointer-events-auto ${className}`}
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label={prevLabel}
        className={baseBtn}
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label={nextLabel}
        className={baseBtn}
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default CarouselArrows;
