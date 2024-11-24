"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { ServiceCard } from "./ServicesCard";

const features = [
  {
    icon: "💻",
    title: "Web App Development",
    description:
      "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
    color: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/20",
    hoverColor: "hover:border-blue-500",
    textColor: "text-blue-500",
  },
  {
    icon: "🎨",
    title: "Web Design",
    description:
      "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
    color: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    shadowColor: "shadow-purple-500/20",
    hoverColor: "hover:border-purple-500",
    textColor: "text-purple-500",
  },
  {
    icon: "🚀",
    title: "Deployments and Hosting",
    description:
      "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
    color: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    shadowColor: "shadow-pink-500/20",
    hoverColor: "hover:border-pink-500",
    textColor: "text-pink-500",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    description:
      "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
    color: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    shadowColor: "shadow-orange-500/20",
    hoverColor: "hover:border-orange-500",
    textColor: "text-orange-500",
  },
  {
    icon: "⚡",
    title: "Full-Stack Development",
    description:
      "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
    color: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    shadowColor: "shadow-teal-500/20",
    hoverColor: "hover:border-teal-500",
    textColor: "text-teal-500",
  },
  {
    icon: "🎯",
    title: "And everything else",
    description:
      "Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we've done it AND we'll do it for you.",
    color: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    shadowColor: "shadow-cyan-500/20",
    hoverColor: "hover:border-cyan-500",
    textColor: "text-cyan-500",
  },
];

const ServiceFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Turning your ideas into reality with cutting-edge technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              feature={feature}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
