import React from 'react';
import { motion } from 'framer-motion';

export default function VideoPlayer() {
  return (
    <motion.div 
      className="w-full px-4 sm:px-0 sm:max-w-[435px]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full pb-[147.13%]"> {/* 640/435 ≈ 147.13% */}
        <motion.iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/0Xb5XwbrkRA"
          title="رحلة العمرة"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}