import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Users, Plane, CreditCard, CheckCircle } from 'lucide-react';
import BookingForm from '../components/shared/BookingForm';
import PageHeader from '../components/shared/PageHeader';
import { updateMetaTags } from '../utils/seo';

export default function BookingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: 'حجز العمرة - Travel4You | احجز رحلتك الآن',
      description: 'احجز رحلة العمرة الآن مع Travel4You. أسعار تنافسية، خدمات متكاملة، وباقات متنوعة تناسب جميع الاحتياجات.',
      keywords: 'حجز العمرة, أسعار العمرة, باقات العمرة, رحلات مكة, حجز فنادق مكة'
    });
  }, [location]);

  const benefits = [
    {
      icon: Plane,
      title: "رحلات مباشرة",
      description: "رحلات مباشرة مع أفضل شركات الطيران"
    },
    {
      icon: Calendar,
      title: "مواعيد مرنة",
      description: "اختر التاريخ المناسب لك ولعائلتك"
    },
    {
      icon: Users,
      title: "خدمة شخصية",
      description: "مرشد خاص لمساعدتك في جميع مراحل الرحلة"
    },
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة لراحتك"
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      description: "نضمن لك تجربة سفر مميزة ومريحة"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="حجز العمرة"
        description="ابدأ رحلتك الروحانية معنا"
      />

      <section className="py-20 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مميزات الحجز معنا</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">عرض خاص محدود!</h2>
                <p className="text-lg mb-4">احجز الآن واحصل على:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>خصم 500 درهم على الباقة الأساسية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>ترقية مجانية لغرفة مطلة على الحرم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>خدمة توصيل مجانية من وإلى المطار</span>
                  </li>
                </ul>
                <p className="text-sm">* العرض ساري حتى نهاية الشهر</p>
              </div>
            </div>

            <div>
              <BookingForm variant="page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}