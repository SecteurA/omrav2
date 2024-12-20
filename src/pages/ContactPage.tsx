import React, { useEffect } from 'react';
import { updateMetaTags } from '../utils/seo';
import Contact from '../components/Contact';
import PageHeader from '../components/shared/PageHeader';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: 'اتصل بنا - Travel4You | تواصل معنا لحجز رحلة العمرة',
      description: 'تواصل مع Travel4You للاستفسار عن رحلات العمرة وحجز رحلتك. فريق خدمة العملاء متاح على مدار الساعة لمساعدتك.',
      keywords: 'اتصل بنا, خدمة العملاء, حجز العمرة, استفسارات العمرة, Travel4You'
    });
  }, []);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="تواصل معنا"
        description="نحن هنا لمساعدتك والإجابة على جميع استفساراتك"
      />
      <Contact />
    </div>
  );
}