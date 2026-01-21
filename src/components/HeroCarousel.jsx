// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HeroCarousel
 * - Text block moved to bottom-left (responsive)
 * - Hero image uses eager loading + fetchpriority for better LCP
 * - Picture/srcset pattern prepared for optimized images (swap paths when you generate /public/optimized)
 * - Smooth transitions via framer-motion kept
 */

import timeless from "../assets/hero/1v2.jpg";
import formFunc from "../assets/hero/2.jpg";
import sustainable from "../assets/hero/3.jpg";
import photoreal from "../assets/hero/4.png";

const slides = [
  {
    id: 1,
    slug: "timeless-design",
    media: timeless,
    title: "Timeless Design",
    subtitle: "Enduring Architecture",
    description:
      "Blending enduring proportions, authentic materials, and restrained detailing to create spaces that remain truly inspiring across generations.",
  },
  {
    id: 2,
    slug: "form-and-functionality",
    media: formFunc,
    title: "Form and Functionality",
    subtitle: "Balanced Design",
    description:
      "Our design philosophy blends refined form with practical functionality, resulting in spaces that look timeless while performing beautifully for everyday life.",
  },
  {
    id: 3,
    slug: "sustainable-aesthetics",
    media: sustainable,
    title: "Sustainable Aesthetics",
    subtitle: "Environmentally Conscious Design",
    description:
      "Integrating passive design, responsible materials, and energy efficiency to create environmentally conscious spaces that endure with ecological impact.",
  },
  {
    id: 4,
    slug: "photorealistic-rendering",
    media: photoreal,
    title: "Photorealistic Rendering",
    subtitle: "True-to-Life Visuals",
    description:
      "Our experts bring your vision to life with striking realism—capturing true lighting, textures, and detail to showcase designs exactly as they will be built.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // change slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // -------------------- Replace getSrcs(...) with this --------------------
  // helper to build picture srcset paths when optimized images exist
  // expects files like: /optimized/hero/hero-<slug>-480.webp , hero-<slug>-1024.jpg etc
  const getSrcs = (slide, mediaFallback) => {
    // slide.slug should be defined for each slide; fallback to filename-based slug if not
    const slug =
      slide.slug ||
      (typeof mediaFallback === "string"
        ? mediaFallback
            .split("/")
            .pop()
            .replace(/\.[^.]+$/, "")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "")
        : "");
    const base = `/optimized/hero/hero-${slug}`;
    const webpSrcSet = [
      `${base}-1920.webp 1920w`,
      `${base}-1440.webp 1440w`,
      `${base}-1024.webp 1024w`,
      `${base}-768.webp 768w`,
      `${base}-480.webp 480w`,
    ].join(", ");
    const jpgSrcSet = [
      `${base}-1920.jpg 1920w`,
      `${base}-1440.jpg 1440w`,
      `${base}-1024.jpg 1024w`,
      `${base}-768.jpg 768w`,
      `${base}-480.jpg 480w`,
    ].join(", ");
    const fallback = `${base}-1024.jpg`; // nice default fallback (exists after script)
    return { slug, base, webpSrcSet, jpgSrcSet, fallback };
  };
  // -----------------------------------------------------------------------

  return (
    <section className="relative h-screen overflow-hidden bg-black text-silver-300 font-serif">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Responsive picture wrapper - swap in optimized srcset when available */}
          {/* Responsive picture wrapper - uses optimized files if available */}
          <picture>
            {/* WEBP first */}
            <source
              type="image/webp"
              srcSet={
                getSrcs(slides[current], slides[current].media).webpSrcSet
              }
              sizes="(min-width:1024px) 1200px, 100vw"
            />
            {/* JPEG fallback */}
            <source
              type="image/jpeg"
              srcSet={getSrcs(slides[current], slides[current].media).jpgSrcSet}
              sizes="(min-width:1024px) 1200px, 100vw"
            />
            {/* final fallback — this will still use the original imported asset if optimized file doesn't exist */}
            <img
              src={
                // prefer optimized fallback if it exists (browser will attempt to fetch it from /public)
                // if files aren't present yet, the import fallback (slides[current].media) will work
                getSrcs(slides[current], slides[current].media).fallback ||
                slides[current].media
              }
              alt={slides[current].title}
              className="h-full w-full object-cover brightness-75"
              loading="eager" // LCP candidate
              fetchpriority="high"
              decoding="async"
              draggable={false}
            />
          </picture>

          {/* Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Text + CTA placed at bottom-left with responsive spacing */}
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
              {/* bottom-left container */}
              <div className="w-full md:w-3/5 lg:w-1/2 mb-8 md:mb-12">
                <div className="p-5 md:p-8 rounded-md shadow-md inline-block">
                  <div className="h-[2px] w-20 bg-gradient-to-r from-silver-200 to-silver-400 mb-3" />

                  <h3 className="text-silver-400 uppercase tracking-[0.25em] text-xs md:text-sm  2xl:text-lg  mb-2">
                    {slides[current].subtitle}
                  </h3>

                  <h1 className="text-xl md:text-3xl lg:text-3xl   2xl:text-5xl  text-silver-100 font-bold mb-3 leading-tight">
                    {slides[current].title}
                  </h1>

                  <p className="text-silver-300 text-sm 2xl:text-lg md:text-base max-w-xl leading-relaxed mb-4">
                    {slides[current].description}
                  </p>

                  {/* CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-2 
                           border border-transparent bg-white text-black font-serif font-semibold
                           uppercase tracking-wide text-sm rounded-md overflow-hidden
                           transition-all duration-500 ease-in-out"
                  >
                    {/* Label */}
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      Contact Now
                    </span>

                    {/* Arrow */}
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

                    {/* Metallic Hover Shade */}
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
    </section>
  );
};

export default HeroCarousel;
