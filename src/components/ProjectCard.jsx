import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, onClick, techIcons }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/30 transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700 cursor-pointer"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
        }}
      />

      {/* Image Container */}
      <div className="relative overflow-hidden h-52 z-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-wider text-green-600 dark:text-green-400 uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full"
            >
              {techIcons && techIcons[tag]}
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:gap-3 transition-all mt-auto">
          View Project <FaArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
