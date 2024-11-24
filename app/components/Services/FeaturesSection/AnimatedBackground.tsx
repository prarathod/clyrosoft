"use client";
import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
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
