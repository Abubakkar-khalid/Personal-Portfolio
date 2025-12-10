import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import switchSoundUrl from "../assets/sounds/switch.mp3";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const playSound = () => {
    const audio = new Audio(switchSoundUrl);
    audio.volume = 0.9;
    audio.play();
  };

  const handleClick = () => {
    playSound();
    toggleTheme();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-yellow-400 transition-colors duration-300 focus:outline-none ring-2 ring-blue-300 dark:ring-gray-600"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
