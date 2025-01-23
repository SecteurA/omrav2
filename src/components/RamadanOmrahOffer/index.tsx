import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon } from 'lucide-react';
import PriceTable from './PriceTable';
import OfferDetails from './OfferDetails';
import WhyChooseUs from './WhyChooseUs';
import BookingForm from '../shared/BookingForm';

export default function RamadanOmrahOffer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-br from-accent/10 via-white to-accent-light/30 rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                عمرة رمضان
              </h2>
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              ابتداء من 20 فبراير 2025
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="text-base sm:text-lg text-gray-700">إبتداء من</span>
              <motion.span 
                className="text-2xl sm:text-3xl font-bold text-red-600"
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                19,900 درهم
              </motion.span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {/* Price Table Section */}
            <PriceTable />

            {/* Program Details and Booking Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <OfferDetails />
              <BookingForm variant="page" />
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
          </div>
        </motion.div>
      </div>
    </section>
  );
}