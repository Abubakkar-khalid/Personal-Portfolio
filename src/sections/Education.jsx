import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "BS Software Engineering",
      institution: "Hazara University of Mansehra",
      period: "2022 - Present",
      description: "Studying core Software Engineering fundamentals",
      achievements: [
        "Focusing on MERN Stack & Next.js (Advanced)",
        "Building real projects alongside academic work",
        "Status: In Progress (Currently in 7th Semester)",
      ],
    },
    {
      degree: "FSC",
      institution: "Government Higher Secondary collage Garhi Habibullah",
      period: "2020 - 2022",
      description:
        "Learned programming basics, networking & web fundamentals. Built foundational understanding of IT & software development.",
      achievements: ["Mastered key subjects like mathematics and physics, vital for engineering problem-solving"],
    },
  ];

  return (
    <section
      id="education"
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications that have shaped
            my technical foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                    <FaCalendarAlt className="text-xs" /> {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium mb-4">
                  <FaUniversity className="text-green-500" />
                  {edu.institution}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
