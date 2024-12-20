import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TravelTips from '../components/TravelTips';
import PageHeader from '../components/shared/PageHeader';
import { updateMetaTags } from '../utils/seo';

export default function TravelTipsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: 'نصائح السفر للعمرة - Travel4You | دليلك الشامل',
      description: 'دليلك الشامل لرحلة العمرة: نصائح مهمة، إرشادات السفر، والوثائق المطلوبة. كل ما تحتاج معرفته قبل السفر لأداء العمرة.',
      keywords: 'نصائح العمرة, إرشادات السفر, الوثائق المطلوبة للعمرة, الاستعداد للعمرة, نصائح السفر إلى مكة'
    });
  }, [location]);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="إرشادات السفر"
        description="كل ما تحتاج معرفته لرحلة عمرة مباركة"
      />
      <TravelTips />
    </div>
  );
}