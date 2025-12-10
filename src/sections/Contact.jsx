import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-5xl" />,
      url: "https://www.linkedin.com/in/abubakar-khalid-7b9428377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      description: "Let's connect professionally",
      action: "Connect Now",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-5xl" />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=abubakarkhalad4@gmail.com&su=Let's Work Together&body=Hi Abubakar Khalid, I would like to discuss a project with you.",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      description: "Drop me a line anytime",
      action: "Send Message",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-5xl" />,
      url: "https://wa.me/+923225713034", // Replace with your actual WhatsApp number
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      description: "Chat directly on WhatsApp",
      action: "Chat Now",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-5xl" />,
      url: "https://www.facebook.com/share/1AZoGpvWbR/",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      description: "Follow my social updates",
      action: "Follow Me",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl" />,
      url: "https://github.com/Abubakkar-khalid",
      color: "text-gray-800 dark:text-white",
      bg: "bg-gray-50 dark:bg-gray-800",
      border: "border-gray-200 dark:border-gray-700",
      description: "Check out my code repos",
      action: "View Profile",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 transition-colors relative overflow-hidden"
    >
      <div className="w-full max-w-[78rem] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Together
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing product design work or partnership
            opportunities. Pick your favorite platform and say hello!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl border ${link.border} ${link.bg} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div
                className={`mb-6 p-4 rounded-full bg-white dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform duration-300 ${link.color}`}
              >
                {link.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {link.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                {link.description}
              </p>

              <div
                className={`mt-auto flex items-center gap-2 font-bold text-sm uppercase tracking-wider ${link.color} group-hover:gap-4 transition-all`}
              >
                {link.action} <FaArrowRight />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
