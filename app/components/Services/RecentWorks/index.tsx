"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample project data with tall images
const projects = [
  {
    title: "Atopchurn",
    description:
      "Project for most popular selling platform starts it build from scratch.",
    subtitle: "Used by 500+ experience users jumping by the technical highness",
    images: ["/recent-work-3.png", "/recent-work-2.png", "/recent-work-1.png"],
    link: "#",
    color: "#5C43E8",
  },
  {
    title: "Creme Digital",
    description:
      "Digital platforms for better experience of all applications give black present to print.",
    subtitle:
      "Since 2015, Creme Digital solutions have supported brands that virtually every industry",
    images: ["/recent-work-3.png", "/recent-work-2.png", "/recent-work-1.png"],
    link: "#",
    color: "#FF6B6B",
  },
];

const RecentWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string>("");

  return (
    <div className="w-full py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          Recent <span className="text-[#5C43E8]">Work</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          A look at some of the amazing websites that we&apos;ve built recently
        </p>
      </motion.div>

      <div className="px-8 md:px-32">
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projectIndex * 0.2 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + projectIndex * 0.2 }}
                >
                  <h3
                    className="text-3xl font-semibold mb-5"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center px-6 py-3 bg-[#5C43E8] text-white rounded-lg font-medium hover:bg-[#4935c8] transition-all"
                    whileHover={{ y: -2 }}
                  >
                    Live Preview
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>

              <div className="md:col-span-8 grid grid-cols-2 gap-6">
                {[0, 1].map((imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative h-[300px] overflow-hidden rounded-xl"
                    onMouseEnter={() =>
                      setHoveredIndex(`${projectIndex}-${imageIndex}`)
                    }
                    onMouseLeave={() => setHoveredIndex("")}
                  >
                    <motion.div
                      className="absolute w-full"
                      animate={{
                        y:
                          hoveredIndex === `${projectIndex}-${imageIndex}`
                            ? "-66.67%"
                            : "0%",
                      }}
                      transition={{
                        duration: 20,
                        ease: "linear",
                        repeat:
                          hoveredIndex === `${projectIndex}-${imageIndex}`
                            ? Infinity
                            : 0,
                      }}
                    >
                      {project.images.map((image, idx) => (
                        <div key={idx} className="relative w-full h-[600px]">
                          <Image
                            src={image}
                            alt={`${project.title} view ${idx + 1}`}
                            width={400}
                            height={800}
                          />
                        </div>
                      ))}
                    </motion.div>
                    <div className="absolute inset-0 bg-[#5C43E8]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <h4 className="text-white text-xl font-semibold">
                          View Project
                        </h4>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
