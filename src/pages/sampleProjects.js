// src/data/sampleProjects.js
// Replace the image imports below with real asset paths for each project.
import dehradunHero from "../assets/dehradun/dehardun_project_hero.jpg";
import dehradun1 from "../assets/dehradun/deharadun_landScape.jpg";
import dehradun2 from "../assets/dehradun/dehradun_garden.jpg";
import dehradun3 from "../assets/dehradun/dehradun_bedroom.jpg";
import dehradun4 from "../assets/dehradun/dehradun_kitchen.jpg";

import kannurHero from "../assets/kannur/kannur_hero.jpg";
import kannur1 from "../assets/kannur/kannur_interior.jpg";
import kannur2 from "../assets/kannur/kannur_kitchen.jpg";
import kannur3 from "../assets/kannur/elavation.jpg";

import hospitalHero from "../assets/hospital/hospital_hero.jpg";
import hospital1 from "../assets/hospital/hospital1.jpg";
import hospital2 from "../assets/hospital/hospital2.jpg";
import hospital3 from "../assets/hospital/hospital3.jpg";
import hospital4 from "../assets/hospital/hospital4.jpg";
import hospital5 from "../assets/hospital/hospital5.jpg";
import hospital6 from "../assets/hospital/hospital6.jpg";

import landscapeHero from "../assets/landscape/landscape_hero.jpg";
import landscape1 from "../assets/landscape/terrace.jpg";
import landscape2 from "../assets/landscape/landscape_garden.jpg";
import landscape3 from "../assets/landscape/terrace2.jpg";

import livingHero from "../assets/Interiors/BAR 1.jpg";
import living1 from "../assets/Interiors/BAR 2.jpg";
import living2 from "../assets/Interiors/LIVING ROOM 2.png";
import living3 from "../assets/Interiors/LIVING ROOM 3.jpg";
import living4 from "../assets/Interiors/LIVING 1.jpg";

import kitchenHero from "../assets/Interiors/KITCHEN 1-1.jpg";
import kitchen1 from "../assets/Interiors/KITCHEN 1-2.jpg";
import kitchen2 from "../assets/Interiors/KITCHEN 2.jpg";
import kitchen3 from "../assets/Interiors/KITCHEN 3.jpg";

import bedroomHero from "../assets/Interiors/BEDROOM 1-1.jpg";
import bedroom1 from "../assets/Interiors/BEDROOM 1-2.jpg";
import bedroom2 from "../assets/Interiors/BEDROOM 2-1.jpg";
import bedroom3 from "../assets/Interiors/BEDROOM 2-2.jpg";

import bathRoom1 from "../assets/Interiors/BATH1.png";
import bathRoom2 from "../assets/Interiors/BATH 2 .jpg";

import vedaHero from "../assets/exhibition/RENDER 1.jpg";
import veda1 from "../assets/exhibition/RENDER 2.jpg";
import veda2 from "../assets/exhibition/RENDER 3.jpg";
import veda3 from "../assets/exhibition/RENDER 4.jpg";
import veda4 from "../assets/exhibition/RENDER 5.jpg";
import veda5 from "../assets/exhibition/RENDER 6.jpg";

import gujarat1 from "../assets/exhibition/gujarat/GUJARAT 1.jpg";
import gujarat2 from "../assets/exhibition/gujarat/GUJARAT 2.jpg";
import gujarat3 from "../assets/exhibition/gujarat/GUJARAT 3.jpg";

import irs1 from "../assets/exhibition/irs/IRS 1.jpg";
import irs2 from "../assets/exhibition/irs/IRS 2.jpg";
import irs3 from "../assets/exhibition/irs/IRS 3.jpg";

/**
 * SAMPLE_PROJECTS
 * - Interiors groups living/kitchen/bedroom as categories inside a single project.
 * - Residentials groups Dehradun & Kannur as categories inside one project, so carousel shows "Residentials" and Project page shows those categories.
 * - Healthcare, Landscape, Exhibition remain as separate projects.
 */

const SAMPLE_PROJECTS = [
  // Interiors: single project with categories
  {
    id: 201,
    title: "Interiors",
    type: "Interior Collections",
    hero: livingHero,
    leadin:
      "Interior design collections — Living, Kitchen, Bedroom, Bar Lounge and Bathroom.",
    description:
      "A grouped collection of interior projects showcasing curated spaces: living room, kitchen, bedroom, bar lounge, and bathroom suites with focused design intent.",
    gallery: [livingHero, kitchenHero, bedroomHero],
    tags: ["Interiors", "Residential Interiors"],

    categories: [
      {
        slug: "living-room",
        label: "Living Room",
        title: "Living Room",
        short: "Spacious living area with layered lighting and warm materials.",
        thumb: living2,
        images: [living2, living3, living4],
      },

      {
        slug: "kitchen",
        label: "Kitchen",
        title: "Kitchen",
        short:
          "Open-plan island kitchen with custom storage and clean finishes.",
        thumb: kitchen1,
        images: [kitchen1, kitchen2, kitchen3],
      },

      {
        slug: "bedroom-suite",
        label: "Bedroom Suite",
        title: "Bedroom Suite",
        short: "Serene bedroom with layered textures and concealed storage.",
        thumb: bedroom1,
        images: [bedroom1, bedroom2, bedroom3],
      },

      {
        slug: "bar-lounge",
        label: "Bar Lounge",
        title: "Bar Lounge",
        short: "A compact, moody bar lounge with layered ambient lighting.",
        thumb: livingHero, // You can replace with a dedicated bar lounge thumb
        images: [livingHero, living1], // Replace with exact bar images if you have
      },

      {
        slug: "bathroom",
        label: "Bathroom",
        title: "Bathroom",
        short:
          "Modern bathroom with clean finishes and ambient lighting design.",
        thumb: bathRoom1, // TEMP placeholder — replace with real bathroom thumb
        images: [bathRoom1, bathRoom2], // TEMP placeholder images — replace with real bathroom set
      },
    ],
  },

  // Residentials: grouped residences as categories
  {
    id: 202,
    title: "Residentials",
    type: "Residential Collection",
    hero: dehradunHero,
    leadin:
      "Collection of residential projects — individual houses combined under a single project group.",
    description:
      "Grouped residential projects where each house becomes a category. Use this view to pick a residence and dive into its gallery and details.",
    gallery: [dehradunHero, kannurHero],
    tags: ["Residentials", "Private Homes"],
    categories: [
      {
        slug: "dehradun-residence",
        label: "Dehradun Residence",
        title: "Dehradun Residence",
        short:
          "A warm family home using indoor–outdoor connections and Vastu-informed planning.",
        thumb: dehradun1,
        images: [dehradunHero, dehradun1, dehradun2, dehradun3, dehradun4],
        meta: {
          location: "Dehradun",
          year: "2025",
          status: "On going",
        },
      },
      {
        slug: "kannur-house",
        label: "Kannur House",
        title: "Kannur House",
        short: "3-BHK duplex blending minimal modern aesthetics and function.",
        thumb: kannur1,
        images: [kannurHero, kannur1, kannur2, kannur3],
        meta: {
          location: "Kannur",
          year: "2024",
          status: "On going",
        },
      },
    ],
  },

  // Healthcare: single project
  {
    id: 301,
    title: "Maheshwari Hospital",
    type: "Healthcare",
    hero: hospitalHero,
    leadin:
      "Expansion and modernization of an existing hospital campus to enhance capacity and services.",
    description:
      "Healthcare masterplan and interior fit-outs focused on patient flow, staff-efficiency, and sustainability strategies.",
    gallery: [
      hospitalHero,
      hospital1,
      hospital2,
      hospital3,
      hospital4,
      hospital5,
      hospital6,
    ],
    tags: ["Hospital", "Healthcare"],
    categories: [], // no internal categories for now; Project page can show gallery or details
  },

  // Landscape
  {
    id: 401,
    title: "Landscape",
    type: "Landscape",
    hero: landscapeHero,
    leadin: "Landscape compositions for public & private outdoor spaces.",
    description:
      "Conceptual landscape projects focusing on planting, circulation and low-maintenance materials.",
    gallery: [landscapeHero, landscape1, landscape2, landscape3],
    tags: ["Landscape", "Planting"],
    categories: [], // single project gallery
  },

  // Exhibition: VEDA (keeps categories inside)
  {
    id: 501,
    title: "Exhibitions & Events",
    type: "Exhibition Design",
    hero: vedaHero,

    // FULL client-provided description moved here
    leadin: `We create immersive brand spaces and impactful event experiences that combine creativity, precision, and seamless execution.

Though our company is young, our core team brings over two decades of professional expertise in exhibition design, event production, and conference management, having successfully delivered prestigious projects for leading corporates, ministries, and global brands.

From concept to completion, we take complete ownership of every detail — conceptualization, design, fabrication, installation, and on-site execution — ensuring uncompromised quality, professional coordination, timely delivery, and value within your budget.

We proudly design and execute projects as per your vision and within your budget, anywhere in India or abroad.

What drives us forward is the trust and confidence of our clients, who appreciate our professional approach, creative excellence, and commitment to delivering perfection every single time.`,

    // You can optionally keep description short or leave it blank
    description:
      "Exhibition and event design projects delivered with precision, creativity and end-to-end execution.",

    gallery: [vedaHero, veda1, veda2, veda3, veda4, veda5],
    tags: ["Exhibition", "Brand Experience", "Events"],

    categories: [
      {
        slug: "veda-defence-system",
        label: "VEDA Defence System",
        title: "VEDA Defence System",
        short:
          "A bold, modular, and brand-driven exhibition system for defence technology showcases.",
        thumb: veda2,
        images: [veda2, veda1, veda3, veda4, veda5],
        meta: {
          client: "VEDA Defence Systems Pvt. Ltd.",
          year: "2025",
          scope: "Booth design, demo zones, brand storytelling",
        },
      },

      {
        slug: "gujarat-pavilion",
        label: "Gujarat Pavilion",
        title: "Gujarat Pavilion",
        short:
          "State pavilion concept emphasizing local craft, materiality and visitor circulation.",
        thumb: gujarat1,
        images: [gujarat1, gujarat2, gujarat3], // replace with real Gujarat images
        meta: {
          client: "Government / State Pavilion",
          year: "2024",
          scope: "Full pavilion design, fabrication & installation",
        },
      },

      {
        slug: "irs",
        label: "IRS – Indian Register of Shipping",
        title: "IRS – Indian Register of Shipping",
        short:
          "Exhibition booth and display system designed for the Indian Register of Shipping.",
        thumb: irs1,
        images: [irs1, irs2, irs3], // replace with real IRS images
        meta: {
          client: "Corporate / Brand",
          year: "2024",
          scope:
            "Exhibition booth design, technical display systems, fabrication, installation",
        },
      },
    ],
  },
];

export default SAMPLE_PROJECTS;
