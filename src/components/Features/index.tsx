import React from 'react';
import { Hotel, Plane, Users, Clock, Shield, Headphones } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SectionTitle from './SectionTitle';

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

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="لماذا تختارنا؟"
          subtitle="نقدم لكم خدمات متكاملة لرحلة عمرة مريحة"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}