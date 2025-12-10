import React from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Global Animated Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-green-200/40 dark:bg-green-900/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-emerald-200/40 dark:bg-emerald-900/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-teal-200/40 dark:bg-teal-900/20 rounded-full blur-3xl"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
