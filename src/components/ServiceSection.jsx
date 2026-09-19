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
import archIcon from '../assets/default_services_icons/architecture_design.png';
import urbanIcon from '../assets/default_services_icons/urban_design.png';
import interiorIcon from '../assets/default_services_icons/interior_design.png';
import projectManagementIcon from '../assets/default_services_icons/project_management.png';
import landscapeIcon from '../assets/default_services_icons/landscape_design.png';
import turnkeyIcon from '../assets/default_services_icons/turnkey.png';


// Default (Architecture / landing page) expertise tiles.
export const DEFAULT_SERVICES = [
  {
    id: 1,
    icon: <img src={archIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Architectural Design",
    description:
      "Thoughtful architectural solutions that balance functionality, aesthetics, context, and the needs of the people who inhabit and experience each space.",
  },
  {
    id: 2,
    icon: <img src={urbanIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Urban Design",
    description:
      "Sustainable and well-planned urban environments focused on enhancing connectivity, accessibility, functionality, and the overall quality of urban life.",
  },
  {
    id: 3,
    icon: <img src={interiorIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Interior Design",
    description:
      "Refined interior environments that integrate comfort, functionality, materiality, and aesthetics while reflecting the character and purpose of each space."
  },
  {
    id: 4,
    icon: <img src={projectManagementIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Project Management",
    description:
      "Comprehensive project coordination ensuring efficient planning, execution, and delivery with close attention to timelines, budgets, quality, and project objectives.",
  },
  {
    id: 5,
    icon: <img src={landscapeIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Landscape Design",
    description:
      "Context-responsive outdoor environments that seamlessly connect architecture with nature while enhancing the character, usability, and visual quality of the surrounding landscape.",
  },
  {
    id: 6,
    icon: <img src={turnkeyIcon} alt="Nikarc Design service icon" className="w-8 h-8 object-contain rounded-md brightness-0 invert" />,
    title: "Turnkey Projects",
    description:
      "End-to-end project solutions covering planning, design, procurement, execution, and final delivery, providing seamless coordination and accountability throughout the project lifecycle.",
  }
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
