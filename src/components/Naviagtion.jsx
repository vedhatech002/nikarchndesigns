// src/components/Navigation.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Architecture and Exhibitions each carry a hover dropdown pointing at the
// Services / Projects sections on their own page (anchor routing).
const navItems = [
  { label: "About", path: "/about" },
  {
    label: "Architecture",
    path: "/",
    dropdown: [
      { label: "Services", anchor: "#services" },
      { label: "Projects", anchor: "#projects" },
    ],
  },
  {
    label: "Exhibitions",
    path: "/Exhibitions",
    dropdown: [
      { label: "Services", anchor: "#services" },
      { label: "Projects", anchor: "#projects" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const backdropVariant = {
  hidden: { opacity: 0, pointerEvents: "none" },
  visible: { opacity: 1, pointerEvents: "auto" },
};

const dropdownVariant = {
  hidden: { opacity: 0, y: -8, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open dropdown / mobile menu whenever the route changes.
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  const openDropdownNow = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // Top-level nav item click — always a real page ("/", "/about", "/Exhibitions", "/contact").
  const handleTopClick = (item) => {
    navigate(item.path);
    setIsOpen(false);
    setOpenDropdown(null);
  };

  // Dropdown (Services / Projects) click — scroll if already on that page,
  // otherwise navigate there first and scroll once it has mounted.
  const handleDropdownClick = (parentPath, anchor) => {
    const isOnParentPage =
      location.pathname.toLowerCase() === parentPath.toLowerCase();

    if (isOnParentPage) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(parentPath, { state: { scrollTo: anchor } });
    }

    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 font-serif
    ${isOpen ? "bg-black/95" : ""}
    ${
      location.pathname === "/about" || isScrolled
        ? "border-b border-silver-400/20 bg-black/80 backdrop-blur-md"
        : ""
    }
  `}
      id="site-nav"
    >
      <motion.div
        aria-hidden
        variants={backdropVariant}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-black/95 backdrop-blur-md border-b border-silver-400/10"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <h1
                className="text-xl md:text-2xl font-semibold tracking-tight text-silver-100"
                style={{ fontFamily: "'Noto Serif', serif" }}
              >
                NIK ARCH & DESIGN
              </h1>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && openDropdownNow(item.label)
                  }
                  onMouseLeave={() => item.dropdown && scheduleCloseDropdown()}
                >
                  <motion.button
                    onClick={() => handleTopClick(item)}
                    className="relative flex items-center gap-1 text-silver-300 uppercase tracking-widest text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <motion.span
                      layout
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-silver-300 to-silver-500"
                    />
                  </motion.button>

                  {/* Hover dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariant}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-44"
                        >
                          <div className="rounded-lg border border-silver-400/15 bg-black/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
                            {item.dropdown.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() =>
                                  handleDropdownClick(item.path, sub.anchor)
                                }
                                className="block w-full text-left px-4 py-3 text-xs uppercase tracking-widest text-silver-300 hover:text-white hover:bg-silver-400/10 transition-colors duration-200"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 text-silver-200 bg-transparent rounded-md hover:bg-black/30 transition-colors duration-200"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile animated menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-black/95 backdrop-blur-sm border-b border-silver-400/20"
            >
              <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => handleTopClick(item)}
                      className="block w-full text-left px-3 py-3 rounded-lg text-silver-200 hover:text-white hover:bg-silver-400/10 transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </button>
                    {item.dropdown && (
                      <div className="pl-6 pb-2 space-y-1">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() =>
                              handleDropdownClick(item.path, sub.anchor)
                            }
                            className="block w-full text-left px-3 py-2 rounded-lg text-xs uppercase tracking-widest text-silver-400 hover:text-white hover:bg-silver-400/10 transition-colors duration-200"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
