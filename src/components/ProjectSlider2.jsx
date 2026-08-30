// src/components/ProjectsCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CarouselArrows from "./CarouselArrows";
import SAMPLE_PROJECTS from "../pages/sampleProjects";

const CARD_GAP = 24;
const MIN_CARD = 220;
const VISIBLE_CARDS_DESKTOP = 4;
const AUTOPLAY_MS = 5000;

// Default items: the top-level portfolio projects, used on the landing page.
const buildDefaultItems = (navigate) =>
  SAMPLE_PROJECTS.map((p) => ({
    key: p.id,
    image: p.hero || p.image,
    title: p.title,
    tag: p.type,
    onClick: () => {
      // If the project has EXACTLY one category → open that category directly
      if (p?.categories && p.categories.length === 1) {
        const cat = p.categories[0];
        navigate(`/projects/${p.id}/category/${cat.slug}`, {
          state: { project: p },
        });
        return;
      }
      navigate(`/projects/${p.id}`, { state: { project: p } });
    },
  }));

const ProjectsCarousel = ({
  id = "projects",
  eyebrow = "Our projects",
  heading = "Selected Works",
  items,
  autoplay = true,
}) => {
  const containerRef = useRef(null); // visible viewport container (clips, does not scroll)
  const x = useMotionValue(0); // single source of truth for horizontal position
  const [cardWidth, setCardWidth] = useState(320);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });
  const navigate = useNavigate();

  const projects = items || buildDefaultItems(navigate);

  // compute sizes and limits
  useEffect(() => {
    const calc = () => {
      const cw = containerRef.current?.offsetWidth || 0;
      const desiredVisible =
        cw > 1200 ? VISIBLE_CARDS_DESKTOP : cw > 900 ? 3 : cw > 640 ? 2 : 1;
      const gapsTotal = CARD_GAP * (desiredVisible - 1);
      const computedCardWidth = Math.max(
        MIN_CARD,
        Math.floor((cw - gapsTotal) / desiredVisible)
      );
      setCardWidth(computedCardWidth);

      const contentWidth =
        projects.length * computedCardWidth + CARD_GAP * (projects.length - 1);
      const maxDrag = Math.max(0, contentWidth - cw);
      setDragLimits({ left: -maxDrag, right: 0 });

      const steps = Math.max(0, projects.length - desiredVisible);
      setMaxIndex(steps);

      // clamp index and align motion x
      setIndex((prevIndex) => {
        const clampedIndex = Math.min(prevIndex, steps);
        const targetX = -clampedIndex * (computedCardWidth + CARD_GAP);
        animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
        return clampedIndex;
      });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  // Single positioning mechanism: animate the motion `x` value only. (No
  // native container scrolling — mixing both caused the track to shift by
  // roughly double the intended distance per step, which is what pushed
  // later cards like Oman out of view and made the carousel feel broken.)
  const scrollToIndex = useCallback(
    (targetIndex) => {
      const clamped = Math.max(0, Math.min(maxIndex, targetIndex));
      const targetX = -clamped * (cardWidth + CARD_GAP);
      animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
      setIndex(clamped);
    },
    [cardWidth, maxIndex, x]
  );

  // when user drags (framer motion), snap logic
  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = cardWidth / 4;
    let newIndex = index;

    if (offset < -threshold || velocity < -200)
      newIndex = Math.min(maxIndex, index + 1);
    else if (offset > threshold || velocity > 200)
      newIndex = Math.max(0, index - 1);

    // compute nearest from final x value
    const finalX = x.get();
    const approxIndex = Math.round(Math.abs(finalX) / (cardWidth + CARD_GAP));
    newIndex = Math.max(0, Math.min(maxIndex, approxIndex));

    scrollToIndex(newIndex);
  };

  const prev = () => scrollToIndex(index - 1);
  const next = () => scrollToIndex(index + 1);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, maxIndex, cardWidth]);

  // Autoplay — mirrors the Hero carousel's cadence, and loops back to the
  // start once the end is reached. Restarts whenever the index changes so a
  // manual drag/arrow interaction doesn't fight the timer.
  useEffect(() => {
    if (!autoplay || maxIndex <= 0) return;
    const timer = setInterval(() => {
      const nextIndex = index >= maxIndex ? 0 : index + 1;
      scrollToIndex(nextIndex);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplay, index, maxIndex, scrollToIndex]);

  return (
    <section
      id={id}
      className="py-20 bg-black text-silver-300 font-serif"
      aria-label={`${heading} carousel`}
    >
      <div className="mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.35em] text-silver-400/80 font-light">
            {eyebrow}
          </h3>
          <h2 className="text-2xl md:text-3xl text-silver-100 font-semibold mt-3">
            {heading}
          </h2>
        </div>

        {/* visible viewport — clips overflow, never scrolls natively */}
        <div ref={containerRef} className="relative overflow-hidden -mx-1 px-6">
          {/* motion track — the ONLY thing that moves, via the `x` transform */}
          <motion.div
            style={{ x }}
            drag="x"
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: dragLimits.left, right: dragLimits.right }}
            dragElastic={0.08}
            dragMomentum={false}
            className="flex items-stretch gap-6 will-change-transform touch-pan-y"
          >
            {projects.map((p) => (
              <article
                key={p.key}
                data-card
                className="bg-black/95 rounded-lg border border-silver-400/10 overflow-hidden flex-shrink-0 cursor-pointer shadow-lg"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
                onClick={() => p.onClick?.()}
              >
                <div className="h-[220px] md:h-[260px] lg:h-[320px] bg-zinc-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    loading="lazy"
                  />
                </div>

                <div className="p-4 bg-black">
                  <div className="w-14 h-[2px] bg-gradient-to-r from-silver-200 to-silver-400 mb-3" />
                  <p className="text-xs uppercase tracking-wider text-silver-400">
                    {p.tag}
                  </p>
                  <h4 className="mt-2 text-lg text-silver-100 font-semibold">
                    {p.title}
                  </h4>
                  <div className="mt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        p.onClick?.();
                      }}
                      className="text-silver-300 border-b border-silver-400/20 pb-0.5 hover:text-white transition-colors duration-200"
                    >
                      View project →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Prev / Next controls — centered bottom, matching the Hero carousel */}
        {maxIndex > 0 && (
          <div className="relative h-16 mt-2">
            <CarouselArrows
              onPrev={prev}
              onNext={next}
              prevDisabled={index === 0}
              nextDisabled={index >= maxIndex}
              prevLabel="Previous projects"
              nextLabel="Next projects"
              className="!bottom-0"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
