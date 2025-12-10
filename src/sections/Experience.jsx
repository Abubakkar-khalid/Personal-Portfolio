import React, { useRef } from "react";
import capcut from "../assets/Capcut.jpg";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGamepad,
  FaGoogle,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiMongodb,
  SiTailwindcss,
  SiGreensock,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  GSAP: <SiGreensock className="text-green-600" />,
  "Framer Motion": <TbBrandFramerMotion className="text-purple-500" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  Express: <SiExpress className="text-gray-500" />,
  "Playable Ads": <FaGamepad className="text-purple-500" />,
  "HTML5 Ads": <FaHtml5 className="text-orange-500" />,
  CapCut: (
    <img
      src={capcut}
      alt="CapCut"
      className="w-3.5 h-3.5 rounded-sm object-cover"
    />
  ),
  "Google Web Designer": <FaGoogle className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
};

const ExperienceCard = ({ exp, index, isLeft }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay: index * 0.2, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-[0_0_0_4px_rgba(34,197,94,0.2)] z-10"></div>

      {/* Content Card */}
      <div className="md:w-1/2 pl-8 md:pl-0 ">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 ${
            isLeft ? "md:mr-8" : "md:ml-8"
          }`}
        >
          {/* Side Green Shade */}
          <div
            className={`absolute top-0 bottom-0 w-20 pointer-events-none transition-all duration-500 ${
              isLeft
                ? "left-0 bg-gradient-to-r from-green-500/10 group-hover:from-green-500/20 to-transparent"
                : "right-0 bg-gradient-to-l from-green-500/10 group-hover:from-green-500/20 to-transparent"
            }`}
          />
          <div
            className={`absolute top-0 bottom-0 w-1 bg-green-500/30 group-hover:bg-green-500 transition-colors duration-300 ${
              isLeft ? "left-0" : "right-0"
            }`}
          />

          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(34, 197, 94, 0.1),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="relative p-6 z-10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {exp.role}
              </h3>
              <span className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                <FaCalendarAlt className="text-xs" /> {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300 font-medium">
              <FaBriefcase className="text-green-500" />
              {exp.company}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800 hover:text-green-600 dark:hover:text-green-400"
                >
                  {techIcons[tech]}
                  {tech}
                </span>
              ))}
            </div>

            {/* Mobile Date */}
            <div className="mt-4 sm:hidden">
              <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-fit border border-green-200 dark:border-green-800">
                <FaCalendarAlt className="text-xs" /> {exp.period}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Empty Space for the other side */}
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    // {
    //   role: "Playable Ads | MERN Stack",
    //   company: "Funsol Technolgies",
    //   period: "Mar 2025 - Present",
    //   description:
    //     "Developing scalable web applications using MongoDB, Express, React, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    //   technologies: [
    //     "Playable Ads",
    //     "HTML5 Ads",
    //     "CapCut",
    //     "Google Web Designer",
    //     "Next.js",
    //     "TypeScript",
    //   ],
    // },

    {
      role: "Frontend Developer",
      company: "Solushyfy Pvt Ltd",
      period: "Aug 2024 - June 2025",
      description:
        "Assisted in the development of company website and internal tools. Gained hands-on experience with modern web technologies and agile methodologies.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "CSS",
        "JavaScript",
        "React",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Internship Pakistan (Remote)",
      period: "Jan 2024 - April 2024",
      description:
        "Contributed to the development of frontend features and improved user interface components, gaining hands-on experience with modern frontend frameworks and collaborative workflows." ,     
      technologies: 
      ["HTML",
        "Tailwind CSS",
        "CSS",
        "JavaScript",
        "React",
      ],
    },
  
  ];

  return (
    <section
      id="experience"
      className="py-20 transition-colors relative overflow-hidden"
    >
      <div className="w-full max-w-[78rem] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to
            work with.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-green-500/20 via-green-500/50 to-green-500/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
