import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, FileText, Bus, MapPin, Star, Moon } from 'lucide-react';

const features = [
  {
    icon: Plane,
    text: "تذكرة الطائرة ذهابا وإياب مباشرة"
  },
  {
    icon: Building2,
    text: "السكن بالفنادق المذكورة أعلاه أو ما يعادله"
  },
  {
    icon: FileText,
    text: "تأشيرة الدخول الى المملكة العربية السعودية"
  },
  {
    icon: Bus,
    text: "التنقلات داخل المملكة العربية السعودية بواسطة باصات مكيفة"
  },
  {
    icon: MapPin,
    text: "الزيارات بالمدينة المنورة ومكة المكرمة"
  }
];

const ramadanBenefits = [
  {
    icon: Star,
    text: "صلاة التراويح في الحرم المكي الشريف"
  },
  {
    icon: Moon,
    text: "إفطار رمضان في رحاب الحرم"
  }
];

export default function OfferDetails() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        اسعار البرنامج تشمل ما يلي:
      </h3>

      <ul className="space-y-4 mb-8">
        {features.map(({ icon: Icon, text }, index) => (
          <motion.li 
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="bg-accent/10 p-2 rounded-lg mt-1">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <span className="text-gray-700">{text}</span>
          </motion.li>
        ))}
      </ul>

      <div className="bg-accent/5 rounded-lg p-4 mb-8">
        <h4 className="font-bold text-gray-900 mb-4">مميزات خاصة بعمرة رمضان:</h4>
        <ul className="space-y-4">
          {ramadanBenefits.map(({ icon: Icon, text }, index) => (
            <motion.li 
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (index * 0.1) }}
            >
              <div className="bg-accent/20 p-2 rounded-lg mt-1">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-gray-700">{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div 
        className="bg-red-50 border border-red-200 rounded-lg p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <h4 className="font-bold text-red-800 mb-2">الشروط العامة للبيع:</h4>
        <p className="text-red-700">جواز سفر لا تقل مدة صلاحيته على 6 أشهر</p>
      </motion.div>
    </motion.div>
  );
}