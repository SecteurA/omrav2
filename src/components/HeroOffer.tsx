import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 1 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function HeroOffer() {
  return (
    <div className="text-white">
      <motion.div 
        className="flex items-center gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Star className="w-6 h-6 text-accent" />
        <h2 className="text-2xl font-bold">عمرة يناير</h2>
      </motion.div>

      <motion.div 
        className="space-y-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="flex items-center gap-4">
          <motion.span 
            className="text-4xl font-bold text-accent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            12,900
          </motion.span>
          <div className="text-lg">
            <span className="text-red-500 line-through">13,900</span>
            <span className="block">درهم</span>
          </div>
        </div>
        <motion.div 
          className="flex items-center text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Clock className="w-5 h-5 ml-2" />
          <span>من 21/01/2025 إلى 04/02/2025</span>
        </motion.div>
      </motion.div>

      <motion.h3 
        className="text-xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        ما الذي يشمله البرنامج؟
      </motion.h3>

      <ul className="space-y-2 text-lg">
        {[
          'تذكرة الطائرة ذهابا وإياب مباشرة',
          'السكن بالفنادق المذكورة أو ما يعادله',
          'تأشيرة الدخول الى المملكة العربية السعودية',
          'التنقلات داخل المملكة العربية السعودية',
          'الزيارات بالمدينة المنورة ومكة المكرمة'
        ].map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={listItemVariants}
          >
            <Check className="w-5 h-5 text-accent ml-2 mt-1" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <Link 
          to="/booking" 
          className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
        >
          احجز الآن
        </Link>
      </motion.div>
    </div>
  );
}