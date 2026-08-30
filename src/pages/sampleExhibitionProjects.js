// src/pages/sampleExhibitionProjects.js
// Exhibition & event design projects — shown on the /Exhibitions page.
// Split out of sampleProjects.js so architecture and exhibition portfolios
// are independent lists.
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

import nlicl1 from "../assets/exhibition/nlicl/IMAGE 1.jpg";
import nlicl2 from "../assets/exhibition/nlicl/IMAGE 2.jpg";
import nlicl3 from "../assets/exhibition/nlicl/IMAGE 3.jpg";
import nlicl4 from "../assets/exhibition/nlicl/IMAGE 4.jpg";
import nlicl5 from "../assets/exhibition/nlicl/IMAGE 5.jpg";

import pharma1 from "../assets/exhibition/eepc/pharma_1.jpg";
import pharma2 from "../assets/exhibition/eepc/pharma_2.jpg";
import pharma3 from "../assets/exhibition/eepc/pharma_3.jpg";
import pharma4 from "../assets/exhibition/eepc/pharma_4.jpg";

/**
 * SAMPLE_EXHIBITION_PROJECTS
 * - Exhibitions & Events groups VEDA, Gujarat Pavilion, IRS, EEPC (BES 2026)
 *   and NTPC (BES 2026) as categories inside one project, matching the same
 *   shape CategoryDetail / Project expect.
 */
const SAMPLE_EXHIBITION_PROJECTS = [
  {
    id: 501,
    title: "Exhibitions & Events",
    type: "Exhibition Design",
    hero: vedaHero,

    // FULL client-provided description
    leadin: `We create immersive brand spaces and impactful event experiences that combine creativity, precision, and seamless execution.

Though our company is young, our core team brings over two decades of professional expertise in exhibition design, event production, and conference management, having successfully delivered prestigious projects for leading corporates, ministries, and global brands.

From concept to completion, we take complete ownership of every detail — conceptualization, design, fabrication, installation, and on-site execution — ensuring uncompromised quality, professional coordination, timely delivery, and value within your budget.

We proudly design and execute projects as per your vision and within your budget, anywhere in India or abroad.

What drives us forward is the trust and confidence of our clients, who appreciate our professional approach, creative excellence, and commitment to delivering perfection every single time.`,

    description:
      "Exhibition and event design projects delivered with precision, creativity and end-to-end execution.",

    gallery: [vedaHero, veda1, veda2, veda3, veda4, veda5],
    tags: ["Exhibition", "Brand Experience", "Events"],

    categories: [
      
      {
        slug: "oman-pavilion",
        label: "Oman Pavilion",
        title: "Oman Pavilion",
        short:
          "An international pavilion concept representing Oman, blending cultural identity with immersive exhibition design.",
        thumb: oman1,
        images: [oman1, oman2, oman3, oman4],
        meta: {
          client: "Government / State Pavilion",
          year: "2026",
          scope: "Pavilion concept, design, fabrication & installation",
        },
      },

      {
        slug: "eepc-pavilion-bes-2026",
        label: "EEPC Pavilion at BES 2026",
        title: "EEPC PAVILION AT BES 2026",
        short:
          "A large-scale immersive pavilion for the Bharat Electricity Summit 2026, powering a clean future with infinite possibilities.",
        thumb: bes1,
        images: [bes1, bes2, bes3, bes4, bes5],
        meta: {
          client: "EEPC India",
          year: "2026",
          scope: "Pavilion concept, design, fabrication & installation",
        },
      },

      {
        slug: "ntpc-pavilion-bes-2026",
        label: "NTPC Pavilion at BES 2026",
        title: "NTPC PAVILION AT BES 2026",
        short:
          "A commanding pavilion for NTPC at the Bharat Electricity Summit 2026, showcasing India's largest power generation enterprise.",
        thumb: ntpc1,
        images: [ntpc1, ntpc2, ntpc3, ntpc4, ntpc5],
        meta: {
          client: "NTPC Limited",
          year: "2026",
          scope: "Pavilion concept, design, fabrication & installation",
        },
      },

      {
        slug: "nlicl-pavilion",
        label: "NLICL Pavilion",
        title: "NLICL Pavilion",
        short:
          "",
        thumb: nlicl1,
        images: [nlicl1, nlicl2, nlicl3, nlicl4, nlicl5],
        meta: {
          client: "",
          year: "",
          scope: "",
        },
      },

      {
        slug: "eepc-pavilion-pharma-machtech-2026",
        label: "EEPC PAVILION @ PHARMA MACHTECH 2026",
        title: "EEPC PAVILION @ PHARMA MACHTECH 2026",
        short:
          "",
        thumb: pharma1,
        images: [pharma1, pharma2, pharma3, pharma4],
        meta: {
          client: "",
          year: "2026",
          scope: "",
        },
      },

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
        images: [gujarat1, gujarat2, gujarat3],
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
        images: [irs1, irs2, irs3],
        meta: {
          client: "Corporate / Brand",
          year: "2024",
          scope:
            "Exhibition booth design, technical display systems, fabrication, installation",
        },
      }
    ],
  },
];

export default SAMPLE_EXHIBITION_PROJECTS;
