// src/components/HeroCarousel.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselArrows from "./CarouselArrows";

import timeless from "../assets/hero/1.jpg";
import formFunc from "../assets/hero/2.jpg";
import sustainable from "../assets/hero/3.jpg";
import photoreal from "../assets/hero/5.jpg";
//import exhibition from "../assets/hero/4.jpg";

// Default (Architecture / landing page) slides — unchanged from the original design.
export const DEFAULT_HERO_SLIDES = [
  {
    id: 1,
    media: timeless,
    title: "Timeless Design",
    subtitle: "Enduring Architecture",
    description:
      "Blending enduring proportions, authentic materials, and restrained detailing to create spaces that remain truly inspiring across generations.",
  },
  {
    id: 2,
    media: formFunc,
    title: "Form and Functionality",
    subtitle: "Balanced Design",
    description:
      "Our design philosophy blends refined form with practical functionality, resulting in spaces that look timeless while performing beautifully for everyday life.",
  },
  {
    id: 3,
    media: sustainable,
    title: "Sustainable Aesthetics",
    subtitle: "Environmentally Conscious Design",
    description:
      "Integrating passive design, responsible materials, and energy efficiency to create environmentally conscious spaces that endure with ecological impact.",
  },
  // {
  //   id: 4,
  //   media: exhibition,
  //   title: "Built to Be Noticed",
  //   subtitle: "Exhibit Excellence",
  //   description:
  //     "Immersive pavilion designs that transform ideas into unforgettable brand experiences.",
  // },
  {
    id: 4,
    media: photoreal,
    title: "Photorealistic Rendering",
    subtitle: "True-to-Life Visuals",
    description:
      "Our experts bring your vision to life with striking realism—capturing true lighting, textures, and detail to showcase designs exactly as they will be built.",
  },
];

const AUTOPLAY_MS = 5000;

const HeroCarousel = ({
  slides = DEFAULT_HERO_SLIDES,
  ctaHref = "/contact",
  ctaLabel = "Contact Now",
}) => {
  const [current, setCurrent] = useState(0);

  // Autoplay — restarts whenever `current` changes (including manual nav),
  // so clicking an arrow doesn't fight the timer.
  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, slides.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <section className="relative h-screen overflow-hidden bg-black text-silver-300 font-serif">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slides[current].media}
            alt={slides[current].title}
            className="h-full w-full object-cover brightness-75"
            loading="eager"
            fetchPriority="high"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end pointer-events-none">
        <div className="mx-auto sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-auto"
            >
              <div className="w-full md:w-3/5 lg:w-1/2 mb-8 md:mb-12">
                <div className="p-5 md:p-8 rounded-md shadow-md inline-block">
                  <div className="h-[2px] w-20 bg-gradient-to-r from-silver-200 to-silver-400 mb-3" />

                  <h3 className="text-silver-400 uppercase tracking-[0.25em] text-xs md:text-sm 2xl:text-lg mb-2">
                    {slides[current].subtitle}
                  </h3>

                  <h1 className="text-xl md:text-3xl lg:text-3xl 2xl:text-5xl text-silver-100 font-bold mb-3 leading-tight">
                    {slides[current].title}
                  </h1>

                  <p className="text-silver-300 text-sm 2xl:text-lg md:text-base max-w-xl leading-relaxed mb-4">
                    {slides[current].description}
                  </p>

                  <motion.a
                    href={ctaHref}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-2
                           border border-transparent bg-white text-black font-serif font-semibold
                           uppercase tracking-wide text-sm rounded-md overflow-hidden
                           transition-all duration-500 ease-in-out"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {ctaLabel}
                    </span>

                    <motion.span
                      className="relative z-10 flex items-center transition-transform duration-500"
                      whileHover={{ x: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 transition-colors duration-500 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m0 0l-6-6m6 6l-6 6"
                        />
                      </svg>
                    </motion.span>

                    <span
                      className="absolute inset-0 rounded-md
                             bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                             opacity-0 group-hover:opacity-100
                             border border-transparent group-hover:border-white
                             transition-all duration-500 ease-in-out"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next controls */}
      {slides.length > 1 && (
        <CarouselArrows
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous hero slide"
          nextLabel="Next hero slide"
        />
      )}
    </section>
  );
};

export default HeroCarousel;
