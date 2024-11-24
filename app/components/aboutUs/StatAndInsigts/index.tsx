"use client";
import React from "react";
import { motion } from "framer-motion";
import { CameraOutlined, UserOutlined, GiftOutlined } from "@ant-design/icons";
import { ClrButton } from "../../Button/Base";
import Image from "next/image";

const StatsInsights = () => {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const stats = [
    {
      icon: <CameraOutlined className="w-6 h-6" />,
      value: "20",
      label: "Year of Experience",
    },
    {
      icon: <GiftOutlined className="w-6 h-6" />,
      value: "50+",
      label: "Successful Project",
    },
    {
      icon: <UserOutlined className="w-6 h-6" />,
      value: "94",
      label: "Trusted Employee",
    },
  ];

  const images = [
    {
      url: "/AboutUS/about-us-1.png",
      alt: "Team meeting in modern office",
    },
    {
      url: "/AboutUS/about-us-2.png",
      alt: "Person working on laptop",
    },
    {
      url: "/AboutUS/about-us-3.png",
      alt: "Team collaboration",
    },
    {
      url: "/AboutUS/about-us-4.png",
      alt: "Creative team discussion",
    },
    {
      url: "/AboutUS/about-us-5.png",
      alt: "Business planning",
    },
    {
      url: "/AboutUS/about-us-6.png",
      alt: "Modern workplace",
    },
  ];

  return (
    <div style={{ marginTop: "40px", marginBottom: "10px" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-12 p-8 max-w-7xl mx-auto bg-white rounded-2xl shadow-lg"
      >
        {/* Left Section - Stats and Text */}
        <motion.div variants={itemVariants} className="flex-1 space-y-8">
          <div className="space-y-4">
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Strategies and Insights for Achieving Your Goals
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={itemVariants}>
              Discover proven strategies and valuable insights for setting and
              achieving your goals. The blog offers practical advice on
              succeeding in today&apos;s dynamic environment.
            </motion.p>
          </div>
          <ClrButton btntype="primary">Learn More</ClrButton>
          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 transition-all hover:shadow-lg"
              >
                <motion.div
                  className="text-purple-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-purple-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Image Grid */}
        <motion.div className="flex-1" variants={itemVariants}>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="h-48 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={100}
                  quality={50}
                  loading="eager"
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StatsInsights;
