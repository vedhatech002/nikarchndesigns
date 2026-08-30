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

import hospitalHero from "../assets/hospital/HOSPITAL  DAY TIME VIEW 2.jpg.jpeg";
import hospital1 from "../assets/hospital/HOSPITAL VIEW 3.jpg";
import hospital2 from "../assets/hospital/hospital2.jpg";
import hospital3 from "../assets/hospital/hospital3.jpg";
import hospital4 from "../assets/hospital/hospital4.jpg";
import hospital5 from "../assets/hospital/hospital5.jpg";
import hospital6 from "../assets/hospital/hospital6.jpg";

import landscapeHero from "../assets/landscape/landscape_hero.jpg";
import landscape1 from "../assets/landscape/terrace.jpg";
import landscape2 from "../assets/landscape/landscape_garden.jpg";
import landscape3 from "../assets/landscape/terrace2.jpg";
import landscape4 from "../assets/landscape/FOR POST.jpg";
import landscape5 from "../assets/landscape/FINAL TERRACE 5.jpg";

import livingHero from "../assets/Interiors/BAR 1.jpg";
import living1 from "../assets/Interiors/BAR 2.jpg";
import living2 from "../assets/Interiors/LIVING ROOM 2.png";
import living3 from "../assets/Interiors/LIVING ROOM 3.jpg";
import living4 from "../assets/Interiors/LIVING 1.jpg";
import living5 from "../assets/Interiors/living_room.jpg";

import kitchenHero from "../assets/Interiors/KITCHEN 1-1.jpg";
import kitchen1 from "../assets/Interiors/KITCHEN 1-2.jpg";
import kitchen2 from "../assets/Interiors/KITCHEN 2.jpg";
import kitchen3 from "../assets/Interiors/KITCHEN 3.jpg";

import bedroomHero from "../assets/Interiors/BEDROOM 1-1.jpg";
import bedroom1 from "../assets/Interiors/BEDROOM 1-2.jpg";
import bedroom2 from "../assets/Interiors/BEDROOM 2-1.jpg";
import bedroom3 from "../assets/Interiors/BEDROOM 2-2.jpg";
import bedroom4 from "../assets/hero/2.jpg";

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

import bes1 from "../assets/exhibition/bes/BES1.jpg";
import bes2 from "../assets/exhibition/bes/BES2.jpg";
import bes3 from "../assets/exhibition/bes/BES3.jpg";
import bes4 from "../assets/exhibition/bes/BES4.jpg";
import bes5 from "../assets/exhibition/bes/BES5.jpg";

import ntpc1 from "../assets/exhibition/ntpc/NTPC1.jpg";
import ntpc2 from "../assets/exhibition/ntpc/NTPC2.jpg";
import ntpc3 from "../assets/exhibition/ntpc/NTPC3.jpg";
import ntpc4 from "../assets/exhibition/ntpc/NTPC4.jpg";
import ntpc5 from "../assets/exhibition/ntpc/NTPC5.jpg";

import oman1 from "../assets/exhibition/oman/OMAN 1.jpg";
import oman2 from "../assets/exhibition/oman/OMAN 2.jpg";
import oman3 from "../assets/exhibition/oman/OMAN 3.jpg";
import oman4 from "../assets/exhibition/oman/OMAN 4.jpg";

import etahHero from "../assets/etah_house.jpg";
import noidaHero from "../assets/about.jpg";

/**
 * SAMPLE_PROJECTS
 * - Interiors groups living/kitchen/bedroom as categories inside a single project.
 * - Residentials groups Dehradun & Kannur as categories inside one project, so carousel shows "Residentials" and Project page shows those categories.
 * - Healthcare, Landscape, Exhibition remain as separate projects.
 */

const SAMPLE_PROJECTS = [
  {
    id: 301,
    title: "Healthcare",
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

    // ONE CATEGORY (user clicks → opens this detail page)
    categories: [
      {
        slug: "maheshwari-hospital",
        label: "Maheshwari Hospital",
        title: "Maheshwari Hospital",
        short:
          "Expansion and renovation of an existing hospital to increase capacity and enhance clinical services.",
        thumb: hospitalHero,
        images: [
          hospitalHero,
          hospital1,
          hospital2,
          hospital3,
          hospital4,
          hospital5,
          hospital6,
        ],
        meta: {
          location: "Bisauli, Uttar Pradesh",
          status: "Under construction",
        },
      },
      {},
    ],

    // SECTIONS → shown in ProjectDetail with alternating layout
    sections: [
      {
        slug: "maheshwari-hospital",
        location: "Bisuali, Uttar Pradesh",
        site_area: "50000 sqft",
        built_up_area: "50000 sqft",
        status: "Under construction",
        heroImg: hospitalHero,

        title: "Maheshwari Hospital",

        // these will be used for alternating text+image sections
        subImgs: [
          hospital1,
          hospital2,
          hospital3,
          hospital4,
          hospital5,
          hospital6,
        ],

        // FULL CLIENT TEXT — EXACTLY AS PROVIDED
        texts: [
          "Maheshwari hospital, an existing 20,000 sq ft hospital situated in the town of Bisauli, Uttar Pradesh, with the growing demand for advanced healthcare services and the increasing number of patients was in a dire need of expansion and renovation. To meet the client’s requirement, the new phase of the hospital was planned to enhance capacity, introduce specialized medical facilities, and ensure that the hospital continues to meet the community’s evolving healthcare needs with efficiency and excellence.",

          "Keeping in mind the welfare of the patients and the doctors the hospital was planned as per the vastu principles. The 30,000 sq ft. phase 2 of the hospital will increase the bed capacity of the hospital to 120.",

          "The hospital space is spread across 4 floors including one basement. The ground floor which receives the maximum footfall is planned to cater all the OPD patients with emphasis on creating a therapeutic environment. The ground floor also consists of an emergency ward for easy admitting of ailing patients.",

          "The first and second floors are dedicated to Inpatient Department (IPD) services, encompassing general wards, private rooms, Neonatal Intensive Care Units (NICUs), operating theaters (OTs), and pediatric care facilities.",

          "The hospital is envisioned as a self-sustaining campus that prioritizes environmental responsibility and long-term operational efficiency. As part of its sustainable design strategy, the facility will incorporate a variety of eco-friendly features and technologies. Passive cooling methods integrated into the architecture to naturally regulate indoor temperatures, reducing the reliance on mechanical air conditioning systems and thereby conserving energy.",

          "To ensure responsible water management, the campus will include rainwater harvesting pits that collect and store rainwater for various non-potable uses such as landscape irrigation and flushing systems. In addition, Sewage Treatment Plants (STPs) will be installed on-site to treat wastewater, enabling its reuse The hospital will also harness renewable energy by installing solar panels across suitable roof areas and open spaces. These solar power systems will generate clean electricity to offset the facility's energy consumption, contributing to a reduced carbon footprint and lower energy costs over time.The hospital complex is fully compliant as per the firefighting norms.",
        ],
      },
    ],

    // (Optional fallback images used in older layout)
    featureImg: hospital3,
    featureImg2: hospital4,
    moreDescription: "",
  },
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
        images: [living2, , living5, living3, living4],
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
        images: [bedroom1, bedroom2, bedroom3, bedroom4],
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
    hero: kannurHero,
    leadin:
      "Collection of residential projects where each house is presented as a detailed case.",
    description:
      "Grouped residential projects — choose a house to view details and gallery.",
    gallery: [dehradunHero, dehradun1, dehradun2, dehradun3, dehradun4],
    tags: ["Residentials", "Private Homes"],

    categories: [
      {
        slug: "dehradun-residence",
        label: "Dehradun Residence",
        title: "Dehradun Residence",
        short:
          "A warm family home using indoor–outdoor connections and Vastu-informed planning.",
        thumb: dehradunHero,
        images: [dehradunHero, dehradun1, dehradun2, dehradun3, dehradun4],
        meta: { location: "Dehradun", year: "2025", status: "Proposed" },
      },
      {
        slug: "kannur-house",
        label: "Kannur House",
        title: "Kannur House",
        short: "3-BHK duplex blending minimal modern aesthetics and function.",
        thumb: kannurHero,
        images: [kannurHero, kannur1, kannur2, kannur3],
        meta: { location: "Kannur", year: "2024", status: "On going" },
      },
      {
        slug: "etah-residence",
        label: "Etah Residence",
        title: "Etah Residence",
        short:
          "A minimalist, sleek and modern triplex featuring stone and wooden accents.",
        thumb: etahHero,
        images: [etahHero],
        meta: {},
      },
      {
        slug: "Noida-residence",
        label: "Noida Residence",
        title: "Noida Residence",
        short:
          "A luxurious elegant duplex featuring wooden accents and expansive balconies.",
        thumb: noidaHero,
        images: [noidaHero],
        meta: {},
      },
    ],

    // sections drive the alternating text/image blocks in ProjectDetail.
    // The first section contains the full client-provided Dehradun text (no title).
    sections: [
      {
        slug: "kannur-house",
        location: "Kannur, Kerala",
        site_area: "330 sqm",
        built_up_area: "195 sqm",
        status: "On going",
        heroImg: kannurHero,
        title: "Kannur House",
        subImgs: [kannur1, kannur2],
        texts: [
          "The 2000 sq. ft house nestled in the heart of the bustling city of Kannur in Kerala was the first major project undertaken by NAD. The brief from the client was clear, to have a house that seamlessly blends modern aesthetics with practical functionality. The result, a 3 BHK duplex meticulously planned to cater the needs of our client. The house planned on the principles of vastu embraces the concept of open planning at its core integrating living area, dining area and the kitchen into a cohesive central zone.\n\n Planned alongside the north of the site, the double height living room featuring double height windows invites in natural daylight, illuminating the entire central area with soft and ambient tones throughout the day,",

          "This open central layout not only encourages flexibility in usage but also fosters a sense of connectivity and spaciousness. Along with this the ground floor of the house includes a master bedroom with attached walk-in closet and spacious bathroom, guest bedroom and staircase leading up to the first floor placed along the south of the site.\n\n The first floor is more of a private retreat, comprising a private drawing room, a second master bedroom, 2 terraces on the front and the rear side respectively and a utility bathroom and terrace on the south side. The planning along with expansive usage of glass on the facade ensures the house is well illuminated by balancing indirect and direct sunlight throughout the day, creating a more liveable and positive environment.\n\n For the exterior, the idea was to create a facade which embraced minimalism yet made a bold statement. A stone façade in earthy tones of beige and grey, accentuated with horizontal and vertical grooves, adds texture and depth. A sloping roof not only complements the minimalist design language but also ensures efficient rainwater drainage.",
        ],
      },
      {
        slug: "dehradun-residence",
        location: "Dehradun",
        site_area: "450 sqm",
        built_up_area: "395 sqm",
        status: "Proposed",
        heroImg: dehradunHero,
        title: "Dehradun Residence",
        subImgs: [dehradun1, dehradun2, dehradun3, dehradun4],
        texts: [
          "Located in the picturesque city of Dehradun, this 4200 sq. ft. home is a sanctuary, designed to fulfil the needs of our client of having a place which is warm, intimate and relaxing.",
          "The design concept emphasizes harnessing the city’s pleasant climate by fostering a seamless dialogue between indoor and outdoor spaces, all while maintaining a strong sense of privacy. Rooted in Vastu principles, the spatial planning ensures abundant natural light throughout the day, achieved through the strategic orientation of spaces and the thoughtful placement of glazing and large sliding openings.",
          "The ground floor accommodates a double-height living area, formal drawing room, master suite, guest bedroom, and an open kitchen-dining zone that visually connects to the outdoors. The upper level houses a home office, gym, bar lounge, terrace, and an additional bedroom—creating a balanced blend of leisure, work, and repose.",
          "Equal emphasis was placed on the design of the surrounding landscape, recognizing its integral role in shaping the quality and character of the indoor spaces. A balanced composition of hardscape and softscape elements defines the outdoor environment, while dense vegetation along the site’s perimeter forms a natural green buffer—enhancing privacy and establishing a serene visual enclosure for the residence.",
        ],
      },
      {
        slug: "etah-residence",
        location: "",
        site_area: "",
        built_up_area: "",
        status: "",
        heroImg: etahHero,
        title: "Etah Residence",
        subImgs: [],
        texts: [],
      },
      {
        slug: "Noida-residence",
        location: "",
        site_area: "",
        built_up_area: "",
        status: "",
        heroImg: noidaHero,
        title: "Noida Residence",
        subImgs: [],
        texts: [],
      },
    ],
  },
  // Healthcare: single project

  // Landscape
  {
    id: 401,
    title: "Landscape",
    type: "Landscape",
    hero: landscapeHero,
    leadin: "Landscape compositions for public & private outdoor spaces.",
    description:
      "Conceptual landscape projects focusing on planting, circulation and low-maintenance materials.",
    gallery: [
      landscapeHero,
      landscape1,
      landscape2,
      landscape3,
      landscape4,
      landscape5,
    ],
    tags: ["Landscape", "Planting"],

    // ADD THIS ↓↓↓ (single category)
    categories: [
      {
        slug: "landscape-design",
        label: "Landscape Design",
        title: "Landscape Design",
        short:
          "Outdoor spaces designed with a balance of hardscape and softscape.",
        thumb: landscape1,
        images: [
          landscapeHero,
          landscape1,
          landscape2,
          landscape3,
          landscape4,
          landscape5,
        ],
      },
    ],
  }
];

export default SAMPLE_PROJECTS;
