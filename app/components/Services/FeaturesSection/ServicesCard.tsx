"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";
import { AnyObject } from "antd/es/_util/type";

export const ServiceCard = ({
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
