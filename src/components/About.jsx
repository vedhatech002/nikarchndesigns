// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import about_section2 from "../assets/about.jpg";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-silver-300 font-serif">
      {/* --- Hero Section --- */}

      {/* --- Alternating Content Sections --- */}
      <div className="mx-auto py-28 px-6 lg:px-16 space-y-32">
        {/* 1st Row */}

        {/* 2nd Row (reversed) */}
        <motion.div
          className="grid md:grid-cols-[2fr_1fr] gap-12 items-center mt-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1 ">
            <h3 className="text-2xl text-silver-100 font-semibold mb-4">
              About us
            </h3>
            <div className="sm:h-[70vh] sm:overflow-y-auto sm:pr-8 about">
              <p className="text-silver-400 leading-relaxed text-justify">
                At NAD, we believe in creating a lasting and positive impact
                through thoughtful, purpose-driven design.
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                We view architecture not merely as the act of building, but as a
                transformative force that shapes the way people live, work, and
                experience the world around them. Every space we design is an
                opportunity to contribute meaningfully to the built environment,
                uplift communities, and respond responsibly to the demands of a
                rapidly evolving world.
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                Our design philosophy is rooted in the creation of spaces that
                inspire and endure. Spaces that seamlessly integrate
                functionality, aesthetic refinement, and environmental
                responsibility. We are deeply committed to delivering design
                solutions that go beyond form and function, offering lasting
                value while enhancing the quality of life for individuals and
                the broader community.
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                With a multidisciplinary team and a collaborative spirit, we
                approach every project with a strong commitment to innovation,
                contextual sensitivity, and design excellence.{" "}
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                From the initial concept through to strategic planning,
                technical documentation, and project execution, we work closely
                with clients and consultants to ensure that each design is
                brought to life with purpose, precision, and architectural
                integrity.{" "}
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                In every detail and decision, we remain guided by our core
                values: design excellence, sustainable innovation, and the
                belief in architecture’s power to shape a better future.
              </p>
              <p className="text-silver-400 leading-relaxed mt-2 text-justify">
                We uphold the highest standards of excellence in every project
                we undertake.{" "}
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 sm:h-[80vh] flex items-center">
            <img
              src={about_section2}
              className="w-full h-full  rounded-xl  shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              alt="Inspirational design"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
