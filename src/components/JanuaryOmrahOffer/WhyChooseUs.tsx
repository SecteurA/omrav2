import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: "جودة عالية بأسعار تنافسية",
    description: "نقدم أفضل الخدمات بأسعار في متناول الجميع"
  },
  {
    icon: Shield,
    title: "تنظيم متكامل يضمن راحتكم",
    description: "نهتم بكافة التفاصيل لضمان رحلة مريحة وآمنة"
  },
  {
    icon: Users,
    title: "فريق دعم متواجد لخدمتكم",
    description: "فريقنا متاح على مدار الساعة للإجابة على استفساراتكم"
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
        لماذا تختار برنامجنا؟
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="bg-accent/10 p-4 rounded-full">
              <Icon className="w-8 h-8 text-accent" />
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
          معًا نحقق حلمكم في زيارة بيت الله الحرام
        </p>
      </motion.div>
    </motion.div>
  );
}