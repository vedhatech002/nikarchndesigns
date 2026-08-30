// src/components/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Ruler,
  PenTool,
  Layout,
  MonitorPlay,
  Trees,
  HardHat,
} from "lucide-react";

// Default (Architecture / landing page) expertise tiles.
export const DEFAULT_SERVICES = [
  {
    id: 1,
    icon: <Ruler className="w-8 h-8 text-silver-200" />,
    title: "Architectural Design & Planning",
    description:
      "Comprehensive spatial design and planning solutions integrating creativity, functionality, and structural precision for every project scale.",
  },
  {
    id: 2,
    icon: <PenTool className="w-8 h-8 text-silver-200" />,
    title: "Design Consultancy",
    description:
      "Providing expert design consultancy that bridges concept and execution — ensuring every project aligns with aesthetic and technical intent.",
  },
  {
    id: 3,
    icon: <Layout className="w-8 h-8 text-silver-200" />,
    title: "Interior Designing",
    description:
      "Curating refined interior environments that balance materials, lighting, and spatial flow to enhance human experience and identity.",
  },
  {
    id: 4,
    icon: <MonitorPlay className="w-8 h-8 text-silver-200" />,
    title: "Architectural Visualization",
    description:
      "Bringing architectural ideas to life through high-fidelity 3D visualization and cinematic renderings with realistic light and material detail.",
  },
  {
    id: 5,
    icon: <Trees className="w-8 h-8 text-silver-200" />,
    title: "Landscape Designing",
    description:
      "Designing thoughtful and sustainable landscape environments that blend natural elements, terrain, and spatial experience to complement built architecture.",
  },
  {
    id: 6,
    icon: <HardHat className="w-8 h-8 text-silver-200" />,
    title: "Site Supervision & Execution",
    description:
      "Hands-on project execution and site supervision that carries every design from technical documentation through to precise, on-ground delivery.",
  },
];

const ServicesSection = ({
  id = "services",
  eyebrow = "Our Expertise",
  heading = "Services We Provide",
  services = DEFAULT_SERVICES,
}) => {
  return (
    <section id={id} className="bg-black py-24 text-silver-300 font-serif">
      <div className=" mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xs uppercase tracking-[0.35em] text-silver-400/80 font-light">
            {eyebrow}
          </h3>
          <h2 className="text-3xl md:text-4xl text-silver-100 font-semibold mt-3">
            {heading}
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-silver-400 to-silver-200 mt-4"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group p-8 border border-silver-400/10 rounded-2xl bg-gradient-to-b from-black/70 to-black/40 hover:border-silver-300/30 hover:bg-black/80 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-silver-100 mb-3">
                {service.title}
              </h4>
              <p className="text-silver-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 w-16 h-[2px] bg-gradient-to-r from-silver-200 to-silver-400 group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
