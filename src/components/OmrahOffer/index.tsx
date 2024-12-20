import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PriceDisplay from './PriceDisplay';
import ProgramFeatures from './ProgramFeatures';

export default function OmrahOffer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-accent-light to-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Star className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                عمرة يناير
              </h2>
              <Star className="w-8 h-8 text-accent" />
            </div>
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-bold">
              عرض خاص
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <PriceDisplay />
            <ProgramFeatures />
          </div>
        </motion.div>
      </div>
    </section>
  );
}