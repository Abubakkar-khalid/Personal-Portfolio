import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiCpu,
  FiMail,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/Logo.png";

const navLinks = [
  { name: "Home", to: "home", icon: <FiHome /> },
  { name: "About", to: "about", icon: <FiUser /> },
  { name: "Skills", to: "skills", icon: <FiCpu /> },
  { name: "Projects", to: "projects", icon: <FiCode /> },
  { name: "Contact", to: "contact", icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div
          className={`
                    relative
                    pointer-events-auto
                    w-full max-w-[76rem]
                    flex items-center justify-between
                    px-4 py-3 rounded-2xl backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500
                    ${
                      scrolled
                        ? "bg-white/80 dark:bg-gray-900/80 py-2"
                        : "bg-white/60 dark:bg-gray-900/60 py-4"
                    }
                `}
        >
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg group-hover:shadow-green-500/30 transition-all duration-300 group-hover:scale-105 overflow-hidden">
              {/* Custom Logo: Playable Code */}
              <img src={logo} className="w-7" alt="" />
              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-bold text-xl text-gray-800 dark:text-white hidden sm:block tracking-tight">
              Abubakar Khalid
            </span>
          </Link>

          {/* Desktop Menu - Centered & Expanded */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-1.5 border border-white/10 dark:border-gray-700/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-white cursor-pointer transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700/80 flex items-center gap-2 group"
                activeClass="!bg-white dark:!bg-gray-700 !text-green-600 dark:!text-white shadow-sm"
                spy={true}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Actions - Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                  >
                    <span className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="text-lg font-bold text-gray-800 dark:text-white">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
