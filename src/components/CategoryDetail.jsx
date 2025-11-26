// src/pages/CategoryDetail.jsx
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * CategoryDetail
 * - Shows stacked large images for a selected project/category
 * - Expects router path: /projects/:projectId/category/:slug
 * - It reads project from location.state (if available) or you can import SAMPLE_PROJECTS and find by ID
 *
 * Behavior:
 * - Renders all images stacked
 * - Clicking an image opens a lightbox with forward/back controls and keyboard support
 */

const fade = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

const CategoryDetail = ({ projectsData }) => {
  const { projectId, slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Try obtain the project either from passed state or from provided data
  let project = location.state?.project;
  if (!project && projectsData) {
    project = projectsData.find((p) => String(p.id) === String(projectId));
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-silver-300 font-serif flex items-center justify-center p-8">
        <div className="text-center">
          <p>Project not found.</p>
          <button
            className="mt-4 px-4 py-2 bg-white text-black rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </main>
    );
  }

  const category = (project.categories || []).find((c) => c.slug === slug);
  if (!category) {
    return (
      <main className="min-h-screen bg-black text-silver-300 font-serif flex items-center justify-center p-8">
        <div className="text-center">
          <p>Category not found.</p>
          <button
            className="mt-4 px-4 py-2 bg-white text-black rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </main>
    );
  }

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = category.images || [];

  // open modal at index
  const openLightbox = (idx) => {
    setCurrentIndex(Math.max(0, Math.min(images.length - 1, idx)));
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(images.length - 1, i + 1));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  // keyboard handlers
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  // prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    return;
  }, [isOpen]);

  return (
    <main className="bg-black text-silver-300 font-serif mt-16">
      <div className="mx-auto px-6 lg:px-20 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl text-silver-100 font-semibold">
              {project.title} — {category.label}
            </h2>
            <p className="mt-2 text-silver-400">{category.short}</p>
          </div>

          <div>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-white text-black rounded-md"
            >
              Back
            </button>
          </div>
        </div>

        {/* stacked hero images (render ALL images) */}
        <div className="space-y-8">
          {images.map((src, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => openLightbox(idx)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fade}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="block w-full overflow-hidden rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-silver-400/10"
              aria-label={`Open image ${idx + 1} of ${
                images.length
              } in lightbox`}
            >
              <img
                src={src}
                alt={`${category.label} ${idx + 1}`}
                className="w-full h-[48vh] md:h-[64vh] lg:h-[72vh] object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchpriority={idx === 0 ? "high" : undefined}
                draggable={false}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${category.label} image viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/80"
            onClick={closeLightbox}
            aria-hidden="true"
          />

          {/* content */}
          <div className="relative max-w-6xl w-full mx-auto z-60">
            <div className="relative">
              {/* Image */}
              <img
                src={images[currentIndex]}
                alt={`${category.label} ${currentIndex + 1}`}
                className="w-full max-h-[86vh] object-contain rounded-md shadow-2xl bg-black"
                draggable={false}
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                aria-label="Close (Esc)"
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-2 rounded-md backdrop-blur-sm hover:bg-black/75"
              >
                ✕
              </button>

              {/* Prev */}
              <button
                onClick={showPrev}
                aria-label="Previous image"
                disabled={currentIndex === 0}
                className={`absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-md backdrop-blur-sm hover:bg-black/75 ${
                  currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
                }`}
              >
                ‹
              </button>

              {/* Next */}
              <button
                onClick={showNext}
                aria-label="Next image"
                disabled={currentIndex === images.length - 1}
                className={`absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-md backdrop-blur-sm hover:bg-black/75 ${
                  currentIndex === images.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }`}
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-sm text-white/90 bg-black/50 px-3 py-1 rounded">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* optional thumbnail strip inside modal (small) */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto">
              {images.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex-shrink-0 rounded overflow-hidden border ${
                    i === currentIndex
                      ? "ring-2 ring-silver-400/60"
                      : "border-slate-700/40"
                  }`}
                  style={{ width: 84, height: 56 }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={t}
                    alt={`thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CategoryDetail;
