import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb, SiFramer, SiNextdotjs, SiTypescript } from 'react-icons/si';

const techIcons = {
    'React': <FaReact className="text-blue-500" />,
    'JavaScript': <FaJs className="text-yellow-500" />,
    'Tailwind': <SiTailwindcss className="text-cyan-400" />,
    'Vite': <SiVite className="text-purple-500" />,

    // Added MongoDB Init (separate skill entry)

    'Framer Motion': <SiFramer className="text-pink-500" />,

    // Added Next.js

    // Added TypeScript

    'HTML': <FaHtml5 className="text-orange-500" />,
    'CSS': <FaCss3 className="text-blue-500" />,
};

const ProjectModal = ({ project, onClose }) => {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        if (project) {
            setCurrentImage(project.image);
        }
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-gray-800 dark:text-white transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>

                    {/* Main Image */}
                    <div className="w-full h-64 md:h-96 relative">
                        <img
                            src={currentImage || project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div>
                                <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Description & Links */}
                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 space-y-4">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                                    >
                                        <FaGithub /> View Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm border border-gray-200 dark:border-gray-700"
                                    >
                                        {techIcons[tag] || <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {project.gallery && project.gallery.map((img, index) => (
                                    <div key={index} className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                                            onClick={() => setCurrentImage(img)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
