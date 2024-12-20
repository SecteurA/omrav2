import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from './shared/BookingForm';
import HeroOffer from './HeroOffer';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] pt-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://data.wget.ma/travel4you/slide.avif')`
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <HeroOffer />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 md:justify-self-end w-full md:w-[400px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              type: "spring",
              stiffness: 100
            }}
          >
            <BookingForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}