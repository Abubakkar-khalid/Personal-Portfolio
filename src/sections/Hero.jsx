import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-illustration-final.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-25 md:pt-20 px-4 overflow-hidden"
    >
      <div className="w-full max-w-[78rem] px-4 mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-sm md:text-base font-semibold mb-5">
            FrontEnd Developer
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-7 leading-tight tracking-tight">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Experiences
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I’m a frontend developer who creates fast, responsive web applications and interactive digital experiences. I focus on crafting clean, intuitive designs, smooth animations, and seamless user interfaces to turn ideas into engaging, user-friendly products that work beautifully on any device.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-green-500/30 transition-all text-base md:text-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/src/assets/AbubakarKhalid.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-base md:text-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Static Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-3xl">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10 scale-95" />

            <img
              src={heroImg}
              alt="Developer Workspace"
              className="w-full max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] mx-auto h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
