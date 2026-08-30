// src/pages/Exhibitions.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import ServicesSection from "../components/ServiceSection";
import ProjectsCarousel from "../components/ProjectSlider2";
import SAMPLE_EXHIBITION_PROJECTS from "./sampleExhibitionProjects";
import {
  PenTool,
  Building2,
  CalendarRange,
  Presentation,
  Sparkles,
  Wrench,
} from "lucide-react";

import render1 from "../assets/exhibition/IMAGE 1.png";
import render2 from "../assets/exhibition/IMAGE 2.jpg";
import render3 from "../assets/exhibition/IMAGE 3.jpg";
import render4 from "../assets/exhibition/IMAGE 4.jpg";
//import render5 from "../assets/exhibition/RENDER 5.jpg";

// Hero slides for the Exhibitions page — same carousel effect as the
// landing page, different imagery and copy (drawn from the studio's own
// exhibitions & events description).
const EXHIBITION_SLIDES = [
  {
    id: 1,
    media: render1,
    title: "Immersive Brand Spaces",
    subtitle: "Exhibition & Event Design",
    description:
      "We create immersive brand spaces and impactful event experiences that combine creativity, precision, and seamless execution.",
  },
  {
    id: 2,
    media: render2,
    title: "Two Decades of Expertise",
    subtitle: "Trusted By Leading Brands",
    description:
      "Our core team brings over two decades of professional expertise in exhibition design, event production, and conference management for corporates, ministries, and global brands.",
  },
  {
    id: 3,
    media: render3,
    title: "Concept to Completion",
    subtitle: "End-to-End Execution",
    description:
      "We take complete ownership of every detail — conceptualization, design, fabrication, installation, and on-site execution — with uncompromised quality.",
  },
  // {
  //   id: 4,
  //   media: render4,
  //   title: "Anywhere, Any Budget",
  //   subtitle: "Pan-India & International Delivery",
  //   description:
  //     "We proudly design and execute projects as per your vision and within your budget, anywhere in India or abroad.",
  // },
  {
    id: 5,
    media: render4,
    title: "Built On Trust",
    subtitle: "Client-Centered Excellence",
    description:
      "What drives us forward is the trust and confidence of our clients, who appreciate our professional approach, creative excellence, and commitment to perfection.",
  },
];

// Exhibition-specific "Our Expertise" tiles.
const EXHIBITION_SERVICES = [
  {
    id: 1,
    icon: <PenTool className="w-8 h-8 text-silver-200" />,
    title: "Exhibition & Booth Design",
    description:
      "Concept-driven booth design that translates brand identity into immersive, memorable spatial experiences.",
  },
  {
    id: 2,
    icon: <Building2 className="w-8 h-8 text-silver-200" />,
    title: "Pavilion Design & Fabrication",
    description:
      "Large-scale pavilion concepts engineered end-to-end, from design intent through precise fabrication.",
  },
  {
    id: 3,
    icon: <CalendarRange className="w-8 h-8 text-silver-200" />,
    title: "Event Production & Management",
    description:
      "Seamless coordination of event logistics, timelines, and on-ground execution from planning to breakdown.",
  },
  {
    id: 4,
    icon: <Presentation className="w-8 h-8 text-silver-200" />,
    title: "Conference & Corporate Events",
    description:
      "Full-service planning and execution for conferences, summits, and corporate showcases of any scale.",
  },
  {
    id: 5,
    icon: <Sparkles className="w-8 h-8 text-silver-200" />,
    title: "Brand Storytelling",
    description:
      "Translating brand narratives into immersive, experience-led environments that leave a lasting impression.",
  },
  {
    id: 6,
    icon: <Wrench className="w-8 h-8 text-silver-200" />,
    title: "On-Site Execution & Installation",
    description:
      "Professional installation and on-site coordination that ensures timely, uncompromised delivery every time.",
  },
];

const EXHIBITIONS_PROJECT = SAMPLE_EXHIBITION_PROJECTS.find(
  (p) => p.id === 501
);

const Exhibitions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    }
  }, [location]);

  // "Our Projects" carousel items — one card per exhibition/event project,
  // linking straight to that project's category detail gallery.
  const projectItems = (EXHIBITIONS_PROJECT?.categories || []).map((cat) => ({
    key: cat.slug,
    image: cat.thumb,
    title: cat.label,
    tag: cat.meta?.client || EXHIBITIONS_PROJECT.type,
    onClick: () =>
      navigate(`/projects/${EXHIBITIONS_PROJECT.id}/category/${cat.slug}`, {
        state: { project: EXHIBITIONS_PROJECT },
      }),
  }));

  return (
    <>
      <HeroCarousel slides={EXHIBITION_SLIDES} />

      <ServicesSection
        id="services"
        eyebrow="Our Expertise"
        heading="Exhibition & Event Services"
        services={EXHIBITION_SERVICES}
      />

      <ProjectsCarousel
        id="projects"
        eyebrow="Our projects"
        heading="Exhibitions & Events"
        items={projectItems}
      />
    </>
  );
};

export default Exhibitions;
