import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BookingCTA() {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Link to="/booking">
        <motion.button 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          احجز مقعدك الآن
        </motion.button>
      </Link>
      
      <motion.p 
        className="mt-4 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        المقاعد محدودة! لا تفوّت الفرصة
      </motion.p>
      
      <motion.p 
        className="mt-2 text-xl text-accent font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        معًا نحقق حلمكم في زيارة بيت الله الحرام
      </motion.p>
    </motion.div>
  );
}