import React from 'react';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import JanuaryOmrahOffer from '../components/JanuaryOmrahOffer';
import Features from '../components/Features';
import ReelVideo from '../components/ReelVideo';
import { updateMetaTags } from '../utils/seo';

export default function HomePage() {
  useEffect(() => {
    updateMetaTags({
      title: 'Travel4You - رحلات العمرة | حجز العمرة بأفضل الأسعار',
      description: 'احجز رحلة عمرة مع Travel4You بأفضل الأسعار. نقدم خدمات متكاملة تشمل حجز الطيران، الفنادق، المواصلات، والإرشاد.',
      keywords: 'عمرة, حج, رحلات العمرة, حجز العمرة, السفر إلى مكة, مكة المكرمة, المدينة المنورة'
    });
  }, []);

  return (
    <>
      <Hero />
      <JanuaryOmrahOffer />
      <Features />
      <ReelVideo />
    </>
  );
}