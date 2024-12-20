import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Shield, Moon } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: "تجربة روحانية فريدة",
    description: "أداء العمرة في شهر رمضان المبارك"
  },
  {
    icon: Shield,
    title: "تنظيم متكامل",
    description: "نهتم بكافة التفاصيل لضمان رحلة مريحة وآمنة"
  },
  {
    icon: Users,
    title: "فريق دعم متخصص",
    description: "مرشدون ذوو خبرة لمساعدتكم في أداء المناسك"
  },
  {
    icon: Moon,
    title: "أجواء رمضانية مميزة",
    description: "إفطار وتراويح في رحاب الحرم الشريف"
  }
];

export default function WhyChooseUs() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        لماذا تختار عمرة رمضان معنا؟
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="bg-accent/10 p-4 rounded-full">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-accent font-medium text-lg">
          اغتنم فرصة أداء العمرة في شهر رمضان المبارك
        </p>
      </motion.div>
    </motion.div>
  );
}