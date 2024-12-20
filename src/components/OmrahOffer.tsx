import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Plane, 
  Building2, 
  Car, 
  FileCheck, 
  UtensilsCrossed, 
  Users2,
  Calendar,
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OmrahOffer() {
  const features = [
    {
      icon: Plane,
      text: 'تذاكر الطيران ذهابًا وإيابًا',
      description: 'رحلات مباشرة مع أفضل شركات الطيران'
    },
    {
      icon: Building2,
      text: 'إقامة مريحة في فنادق قريبة من الحرم',
      description: 'فنادق فاخرة بموقع متميز'
    },
    {
      icon: Car,
      text: 'المواصلات بين المطار والفندق والحرم',
      description: 'خدمة نقل مريحة وآمنة'
    },
    {
      icon: FileCheck,
      text: 'خدمات التأشيرة',
      description: 'إنهاء جميع الإجراءات بسهولة'
    },
    {
      icon: UtensilsCrossed,
      text: 'وجبات يومية (حسب البرنامج)',
      description: 'وجبات متنوعة وصحية'
    },
    {
      icon: Users2,
      text: 'مرشدون متخصصون لتيسير المناسك',
      description: 'مرشدون ذوو خبرة لمساعدتكم'
    }
  ];

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
                فرصة ذهبية لأداء العمرة بأسعار مخفضة!
              </h2>
              <Star className="w-8 h-8 text-accent" />
            </div>
            <p className="text-xl text-gray-700">
              يسرنا أن نقدم لكم تخفيضًا مميزًا على برنامج العمرة الخاص بنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Price Display */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تفاصيل العرض المذهل</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">السعر قبل التخفيض:</span>
                  <span className="text-2xl font-bold text-red-500 line-through">11,900 درهم</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">السعر بعد التخفيض:</span>
                  <div className="flex items-center">
                    <motion.span 
                      className="text-3xl font-bold text-accent"
                      animate={{
                        scale: [1, 1.1, 1],
                        textShadow: [
                          "0 0 0px rgba(253,182,64,0)",
                          "0 0 10px rgba(253,182,64,0.5)",
                          "0 0 0px rgba(253,182,64,0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      11,400
                    </motion.span>
                    <span className="text-3xl font-bold text-accent mr-1">درهم</span>
                  </div>
                </div>
                <div className="flex items-center text-accent">
                  <Clock className="w-5 h-5 ml-2" />
                  <span>العرض لفترة محدودة فقط!</span>
                </div>
              </div>
            </motion.div>

            {/* Program Features */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ما الذي يشمله البرنامج؟</h3>
              <ul className="space-y-4">
                {features.map(({ icon: Icon, text, description }, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="bg-accent/10 p-2 rounded-lg ml-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{text}</h4>
                      <p className="text-sm text-gray-600 mt-1">{description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">لماذا تختار برنامجنا؟</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { Icon: Star, text: 'جودة عالية بأسعار تنافسية' },
                { Icon: Calendar, text: 'تنظيم متكامل يضمن راحتكم' },
                { Icon: Users, text: 'فريق دعم متواجد لخدمتكم' }
              ].map(({ Icon, text }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + (0.1 * index) }}
                >
                  <Icon className="w-6 h-6 text-accent ml-2" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/booking">
              <motion.button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز مقعدك الآن
              </motion.button>
            </Link>
            <p className="mt-4 text-gray-600">المقاعد محدودة! لا تفوّت الفرصة</p>
            <p className="mt-2 text-xl text-accent font-semibold">
              معًا نحقق حلمكم في زيارة بيت الله الحرام
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}