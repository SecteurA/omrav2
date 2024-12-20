import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BookingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
    >
      <Link to="/booking">
        <motion.button 
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-xl font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          احجز مقعدك الآن
        </motion.button>
      </Link>
    </motion.div>
  );
}