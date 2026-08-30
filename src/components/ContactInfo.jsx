// src/components/ContactInfo.jsx
// Compact contact-info block shown at the bottom of the landing page —
// office address, email, phone numbers and socials, matching the
// existing style used on the full /contact page.
import React from "react";
import { motion } from "framer-motion";
import { MessageSquareHeart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactInfo = ({ id = "contact-info" }) => {
  return (
    <section id={id} className="bg-black text-silver-300 font-serif">
      <div className="py-24 px-6 lg:px-8 mx-auto">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <h4 className="uppercase tracking-[0.3em] text-silver-400/70 text-sm mb-3">
            Contact
          </h4>
          <h2 className="text-2xl md:text-4xl font-semibold text-silver-100 leading-tight">
            Get In Touch
          </h2>
        </motion.div>

        {/* --- 4 Column Layout --- */}
        <motion.div
          className="grid md:grid-cols-4 gap-14 border-t border-silver-400/10 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* --- Office --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Office
              </h4>
            </div>
            <p className="text-silver-100 leading-relaxed">
              1676 , Sector-37 <br />
              Arun Vihar <br />
              Noida.
            </p>
          </div>

          {/* --- Email --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Email Us
              </h4>
            </div>
            <a
              href="mailto:info@nikarchndesign.com"
              className="block text-silver-100 text-base hover:text-silver-300 transition-colors duration-300"
            >
              info@nikarchndesign.com
            </a>
          </div>

          {/* --- Call Us --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 8.5A16 16 0 0015.5 22l3.54-3.54a2 2 0 00-.46-3.23l-3.15-1.26a1 1 0 00-1.12.22l-1.67 1.67a13 13 0 01-5.78-5.78l1.67-1.67a1 1 0 00.22-1.12L8.77 3.92a2 2 0 00-3.23-.46L2 7.5z"
                />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Call Us
              </h4>
            </div>
            <a
              href="tel:+919958400890"
              className="block text-silver-100 text-base hover:text-silver-300 transition-colors duration-300"
            >
              +91 9958400890
            </a>
            <a
              href="tel:+919818321102"
              className="block text-silver-100 text-base hover:text-silver-300 transition-colors duration-300"
            >
              +91 9818321102
            </a>
          </div>

          {/* --- Socials --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-silver-400">
              <MessageSquareHeart />
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Socials
              </h4>
            </div>
            <div className="flex items-center gap-5 text-silver-300">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nikarchndesign?igsh=NmNrc3U0cW5rMXJk&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/nik-arch-n-design/"
                className="hover:text-white transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-2
             bg-white text-black font-serif font-semibold uppercase tracking-wide text-sm
             rounded-md overflow-hidden transition-all duration-500 ease-in-out"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Start a Conversation
            </span>
            <motion.span
              className="relative z-10 flex items-center transition-transform duration-500"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
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
    </section>
  );
};

export default ContactInfo;
