import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Plane, Users, Clock, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Hotel,
    title: 'فنادق فاخرة',
    description: 'إقامة في أفضل الفنادق القريبة من الحرم',
  },
  {
    icon: Plane,
    title: 'حجوزات طيران',
    description: 'رحلات مباشرة مع أفضل شركات الطيران',
  },
  {
    icon: Users,
    title: 'مرشدين متخصصين',
    description: 'مرشدين ذوي خبرة لمساعدتكم في أداء المناسك',
  },
  {
    icon: Clock,
    title: 'برامج مرنة',
    description: 'برامج متنوعة تناسب جميع المتطلبات',
  },
  {
    icon: Shield,
    title: 'ضمان الجودة',
    description: 'نضمن لكم أفضل الخدمات وأعلى معايير الجودة',
  },
  {
    icon: Headphones,
    title: 'دعم على مدار الساعة',
    description: 'فريق دعم متكامل لخدمتكم في أي وقت',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختارنا؟</h2>
          <p className="text-xl text-gray-600">نقدم لكم خدمات متكاملة لرحلة عمرة مريحة</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="text-center p-6"
                variants={item}
              >
                <motion.div 
                  className="inline-block p-4 bg-accent-light rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}