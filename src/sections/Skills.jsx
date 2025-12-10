import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
} from "react-icons/si";
import vscode from "../assets/VSCode.png";
import vite from "../assets/Vite.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
      ],
    },
    {
      title: "Tools & UI",
      skills: [
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "VS Code", icon: <img src={vscode} className="w-9 h-9" /> },
        { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "Vite", icon: <img src={vite} className="w-9 h-9" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 transition-colors relative overflow-hidden"
    >
      <div className="w-full  max-w-[78rem] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Focused on modern frontend development, I create responsive, accessible, and visually engaging user interfaces while leveraging modern web technologies to build high-performance, intuitive, and scalable digital experiences.
          </p>
        </motion.div>

        <div className=" lg:mx-48 grid md:grid-cols-2 gap-8 hover:cursor-pointer ">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
