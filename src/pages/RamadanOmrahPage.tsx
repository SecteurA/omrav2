import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RamadanOmrahOffer from '../components/RamadanOmrahOffer';
import PageHeader from '../components/shared/PageHeader';
import { updateMetaTags } from '../utils/seo';

export default function RamadanOmrahPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: 'عمرة رمضان - Travel4You | احجز رحلتك الآن',
      description: 'احجز عمرة رمضان مع Travel4You. باقات متنوعة وخدمات متكاملة لرحلة روحانية مميزة في شهر رمضان المبارك.',
      keywords: 'عمرة رمضان, حجز عمرة رمضان, باقات العمرة, رحلات مكة في رمضان, عمرة رمضان 2024'
    });
  }, [location]);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="رحلة روحانية مميزة في الشهر الفضيل"
        description=""
        backgroundImage="https://data.wget.ma/travel4you/slide.avif"
      />
      <RamadanOmrahOffer />
    </div>
  );
}