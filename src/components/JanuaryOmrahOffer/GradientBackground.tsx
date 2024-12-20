import React from 'react';
import { motion } from 'framer-motion';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent-light via-white to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative">
        {children}
      </div>
    </section>
  );
}