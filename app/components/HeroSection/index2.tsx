import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

const HeroSection2 = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-extralight mb-8"
        >
          We Help
          <br />
          You Grow
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Redefining growth with innovative design solutions, 
          unlocking new opportunities and propelling startups 
          forward with impactful experiences crafted from 
          creativity and strategic insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            type="dashed"
            size="large"
            className="border-2 border-white text-white hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
          >
            Know More
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-screen">
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-1/4 w-px h-1/2 bg-white"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute right-12 top-1/4 w-px h-1/2 bg-white"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 top-1/4 w-24 h-24 bg-white"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection2;