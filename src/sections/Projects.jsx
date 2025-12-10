import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLayerGroup,
  FaGamepad,
  FaLaptopCode,
  FaVideo,
  FaCogs,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import deepArt from "../assets/DeepArt.jpg";

// Gym Images
import gym1 from "../assets/Gym-Images/Gym-1.jpg";
import gym2 from "../assets/Gym-Images/Gym-2.png";
import gym3 from "../assets/Gym-Images/Gym-3.png";
import gym4 from "../assets/Gym-Images/Gym-4.png";
// CineFilms Images
import cineFilms1 from "../assets/CineFilms-Images/CineFilms-1.png";
import cineFilms2 from "../assets/CineFilms-Images/CineFilms-2.png";
import cineFilms3 from "../assets/CineFilms-Images/CineFilms-3.png";
import cineFilms4 from "../assets/CineFilms-Images/CineFilms-4.png";
// TeamsCare Images
import teamsCare1 from "../assets/Teams-Care/TeamsCare-1.png";
import teamsCare2 from "../assets/Teams-Care/TeamsCare-2.png";
import teamsCare3 from "../assets/Teams-Care/TeamsCare-3.png";
import teamsCare4 from "../assets/Teams-Care/TeamsCare-4.png";



const categories = [
  { name: "All", icon: <FaLayerGroup /> },
  { name: "Landing Page", icon: <FaLaptopCode /> },
  { name: "CMS", icon: <FaCogs /> },
];

const techIcons = {
  React: <FaReact className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  JavaScirpt: <FaJs className="text-yellow-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-500" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  "Framer Motion": <TbBrandFramerMotion className="text-purple-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      title: "CMS Dashboard",
      image: teamsCare1,
      gallery: [teamsCare1, teamsCare2, teamsCare3, teamsCare4],
      category: "CMS",
      tags: [
        "React",
        "JavaScirpt",
        "Tailwind",
        "Vite",
      ],
      description:
        "A comprehensive admin dashboard for managing products, orders, and analytics with dark mode support.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "DeepArt Landing Page",
      image: deepArt,
      gallery: [deepArt, deepArt, deepArt, deepArt],
      category: "Landing Page",
      tags: ["React", "Framer Motion", "Vite", "Tailwind"],
      description:
        "Modern, high-performance landing page for a SaaS product with smooth scroll animations and responsive design.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Gym Landing Page",
      image: gym1,
      gallery: [gym1, gym2, gym3, gym4],
      category: "Landing Page",
      tags: ["React", "JavaScript", "Tailwind", "Vite"],
      description:
        "Modern, high-performance landing page for a SaaS product with smooth scroll animations and responsive design.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "CineFilms Landing Page",
      image: cineFilms1,
      gallery: [cineFilms1, cineFilms2, cineFilms3, cineFilms4],
      category: "Landing Page",
      tags: ["React", "JavaScript", "Tailwind", "Vite"],
      description:
        "Modern, high-performance landing page for a SaaS product with smooth scroll animations and responsive design.",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 transition-colors relative overflow-hidden"
    >
      <div className="w-full max-w-[78rem] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a diverse collection of my work — from full-stack web
            applications to high-performance HTML5 Playable Ads, interactive
            animations, and modern UI experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                setVisibleProjects(6);
              }}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm hover:cursor-pointer font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 "
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  techIcons={techIcons}
                />
              ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > visibleProjects && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleProjects(filteredProjects.length)}
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-green-500/30 transition-all"
            >
              View More Projects
            </motion.button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
