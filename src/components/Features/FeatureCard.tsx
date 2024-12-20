import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div 
      className="text-center p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <motion.div 
        className="inline-block p-4 bg-accent-light rounded-full mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1 + (index * 0.1)
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <Icon className="w-8 h-8 text-accent" />
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5,
          delay: 0.2 + (index * 0.1)
        }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5,
          delay: 0.3 + (index * 0.1)
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}