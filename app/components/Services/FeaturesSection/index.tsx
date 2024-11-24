"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";
import { AnyObject } from "antd/es/_util/type";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Flowing Curves */}
      <motion.div
        className="absolute w-[800px] h-[800px] -top-1/4 -left-1/4"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute w-[600px] h-[600px] top-3/4 -right-1/4"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const ServiceCard = ({
  feature,
  index,
  hoveredIndex,
  setHoveredIndex,
}: AnyObject) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="relative group"
    >
      <div
        className={`
          relative h-full backdrop-blur-xl bg-white/5 
          border ${feature.borderColor} ${feature.hoverColor}
          rounded-2xl p-6 transition-all duration-300 
          hover:shadow-2xl ${feature.shadowColor}
          transform hover:-translate-y-1 hover:scale-[1.02]
        `}
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 ${feature.color} blur-xl opacity-30 rounded-2xl transition-opacity duration-300 group-hover:opacity-60`}
        />

        {/* Content Container */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-between">
            <div
              className={`
              w-14 h-14 rounded-xl ${feature.color}
              flex items-center justify-center text-2xl
              border ${feature.borderColor}
              transform transition-transform duration-300
              group-hover:scale-110 group-hover:rotate-3
            `}
            >
              {feature.icon}
            </div>

            <motion.div
              animate={{
                x: hoveredIndex === index ? 0 : -10,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className={`${feature.textColor}`}
            >
              <ArrowRightOutlined className="w-6 h-6" />
            </motion.div>
          </div>

          <h3
            className={`text-xl font-semibold mb-3 text-white group-hover:${feature.textColor} transition-colors duration-300`}
          >
            {feature.title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl transition-opacity opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 rotate-180 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
        </div>
      </div>
    </motion.div>
  );
};

const ServiceFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
