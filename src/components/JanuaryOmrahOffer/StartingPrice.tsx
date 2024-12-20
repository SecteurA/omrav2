import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function StartingPrice() {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2">
        <Star className="w-6 h-6 text-accent" />
        <span className="text-lg text-gray-700">إبتداء من</span>
      </div>
      <motion.div 
        className="text-4xl font-bold text-red-600"
        animate={{
          scale: [1, 1.1, 1],
          textShadow: [
            "0 0 0px rgba(220,38,38,0)",
            "0 0 10px rgba(220,38,38,0.5)",
            "0 0 0px rgba(220,38,38,0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        12,900
        <span className="text-2xl mr-2">درهم</span>
      </motion.div>
    </motion.div>
  );
}