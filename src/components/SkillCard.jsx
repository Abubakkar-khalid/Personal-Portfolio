import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
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
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/30 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
