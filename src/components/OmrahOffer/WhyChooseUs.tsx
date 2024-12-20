import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Users } from 'lucide-react';

const benefits = [
  {
    Icon: Star,
    text: 'جودة عالية بأسعار تنافسية'
  },
  {
    Icon: Calendar,
    text: 'تنظيم متكامل يضمن راحتكم'
  },
  {
    Icon: Users,
    text: 'فريق دعم متواجد لخدمتكم'
  }
];

export default function WhyChooseUs() {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        لماذا تختار برنامجنا؟
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map(({ Icon, text }, index) => (
          <motion.div 
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + (index * 0.1) }}
          >
            <Icon className="w-6 h-6 text-accent ml-2" />
            <span>{text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}