import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaReact,
  FaArrowRight,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import profileImg from "../assets/ProfileImage.jpeg";

const About = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJs />,
      color:
        "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
      },
      
      {
       name: "Tailwind CSS",
       icon: <SiTailwindcss />,
       color:
          "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800",
       },
    {
      name: "React.js",
      icon: <  FaReact />,
      color:
        "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    },


    {
      name: "Github",
      icon: <FaGithub />,
      color:
        " t dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 transition-colors relative overflow-hidden"
    >
      <div className="w-full max-w-[78rem] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side - Creative Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex  justify-center lg:justify-center relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Abstract Shapes */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-500/30 rounded-[2rem] animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/30 rounded-[2rem] animate-pulse delay-700"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Armaghan Bakht"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                  Available
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Me
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hello! I'm{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                Abubakar Khalid
              </span>
              , A passionate frontend developer turning ideas into intuitive and beautiful digital experiences. I focus on creating fast, responsive, and user-friendly interfaces.
            </p>

            {/* Stylish Capsules */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center hover:cursor-pointer  gap-2 px-5 py-2.5 rounded-full border ${skill.color} shadow-sm cursor-default transition-all`}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              With a deep understanding of modern frameworks and user experience
              design, I transform complex requirements into seamless,
              pixel-perfect digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="group flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-green-500/30 transition-all cursor-pointer"
              >
                Let's Talk{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-600"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
