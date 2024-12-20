import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6,
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}