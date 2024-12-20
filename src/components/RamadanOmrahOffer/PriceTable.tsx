import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Check } from 'lucide-react';
import { packages, roomTypes, colorVariants } from './data/packages';

export default function PriceTable() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100 col-span-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-gray-900">الباقات والأسعار</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full">
        {packages.map((pkg, index) => {
          const colors = colorVariants[pkg.color];
          
          return (
            <motion.div 
              key={index}
              className={`relative bg-gradient-to-b ${colors.gradient} to-white border ${colors.border} rounded-xl p-4 sm:p-6 transition-all duration-300 ${colors.hover} hover:shadow-xl group w-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h4 className={`text-lg font-bold ${colors.text} mb-4 text-center`}>
                باقة {pkg.name}
              </h4>
              
              <div className="space-y-3 mb-4">
                {pkg.hotels.map((hotel, idx) => (
                  <motion.div 
                    key={idx}
                    className={`${colors.light} p-3 sm:p-4 rounded-lg transition-transform duration-300 hover:scale-[1.02]`}
                    whileHover={{ y: -2 }}
                  >
                    <div className={`${colors.text} font-semibold mb-1`}>{hotel.city}</div>
                    <div className="text-gray-900 font-medium text-sm sm:text-base">{hotel.name}</div>
                    <div className="text-gray-600 text-xs sm:text-sm mt-1">{hotel.nights}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                {roomTypes.map((type) => {
                  const price = pkg.prices[type];
                  const isAvailable = price !== "------";
                  
                  return (
                    <motion.div 
                      key={type}
                      className={`${isAvailable ? colors.price : 'bg-gray-50'} rounded-lg p-2 sm:p-3 flex justify-between items-center transition-all duration-300 hover:shadow-md text-sm sm:text-base`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        {isAvailable && <Check className="w-4 h-4 text-accent" />}
                        <span className={isAvailable ? 'text-gray-900' : 'text-gray-400'}>
                          {type}
                        </span>
                      </div>
                      <span className={`font-bold ${isAvailable ? 'text-gray-900' : 'text-gray-400'}`}>
                        {isAvailable ? `${price} درهم` : "------"}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 text-sm text-gray-500 text-center">
        * الأسعار تشمل جميع الخدمات المذكورة
      </div>
    </motion.div>
  );
}