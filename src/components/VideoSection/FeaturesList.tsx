import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Clock, Users, MapPin, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: "خدمة متميزة",
    description: "نقدم لكم خدمة شاملة ومتكاملة من لحظة حجزكم حتى عودتكم إلى دياركم"
  },
  {
    icon: Users,
    title: "مرشدون متخصصون",
    description: "يرافقكم مرشدون ذوو خبرة لتسهيل رحلتكم وتوجيهكم في أداء المناسك"
  },
  {
    icon: MapPin,
    title: "فنادق مميزة",
    description: "إقامة في فنادق فاخرة قريبة من الحرم لراحتكم"
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نضمن لكم تجربة سفر مريحة وآمنة مع أفضل الخدمات"
  },
  {
    icon: Clock,
    title: "برامج مرنة",
    description: "باقات متنوعة تناسب جميع الاحتياجات والميزانيات"
  }
];

export default function FeaturesList() {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Star className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold text-gray-900">رحلة العمرة مع Travel4You</h2>
      </motion.div>
      
      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
          >
            <feature.icon className="w-6 h-6 text-accent mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}