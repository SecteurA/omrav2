import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Building2, 
  Car, 
  FileCheck, 
  MapPin
} from 'lucide-react';

const features = [
  {
    icon: Plane,
    text: 'تذكرة الطائرة ذهابا وإياب مباشرة',
  },
  {
    icon: Building2,
    text: 'السكن بالفنادق المذكورة أعلاه أو ما يعادله',
  },
  {
    icon: FileCheck,
    text: 'تأشيرة الدخول الى المملكة العربية السعودية',
  },
  {
    icon: Car,
    text: 'التنقلات داخل المملكة العربية السعودية بواسطة باصات مكيفة',
  },
  {
    icon: MapPin,
    text: 'الزيارات بالمدينة المنورة ومكة المكرمة',
  }
];

export default function ProgramFeatures() {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        اسعار البرنامج تشمل ما يلي:
      </motion.h3>
      
      <ul className="space-y-4">
        {features.map(({ icon: Icon, text }, index) => (
          <motion.li 
            key={index}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
          >
            <div className="bg-accent/10 p-2 rounded-lg">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <span className="text-gray-800">{text}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div 
        className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <h4 className="font-bold text-red-800 mb-2">الشروط العامة للبيع:</h4>
        <p className="text-red-700">جواز سفر لا تقل مدة صلاحيته على 6 أشهر</p>
      </motion.div>

      <motion.div 
        className="mt-6 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        <p className="font-semibold mb-2">للمزيد من المعلومات والحجز يرجى الاتصال بالأرقام التالية:</p>
        <ul className="space-y-1 text-accent font-medium">
          <li dir="ltr">+212 5 37 72 99 24</li>
          <li dir="ltr">+212 5 37 72 99 25</li>
          <li dir="ltr">+212 661-343417</li>
          <li dir="ltr">+212 648 48 00 88</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}