import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Thermometer, 
  Heart, 
  BookOpen, 
  Map,
  AlertCircle,
  Sun,
  Moon
} from 'lucide-react';
import GuidelineCard from './GuidelineCard';
import ImportantNote from './ImportantNote';

export default function TravelTips() {
  const guidelines = [
    {
      category: "الوثائق المطلوبة",
      icon: FileText,
      items: [
        "جواز سفر صالح لمدة 6 أشهر على الأقل",
        "صور شخصية بخلفية بيضاء",
        "شهادة التطعيم ضد كوفيد-19",
        "تأمين صحي للسفر"
      ]
    },
    {
      category: "ما يجب إحضاره",
      icon: Briefcase,
      items: [
        "ملابس بيضاء للإحرام (للرجال)",
        "ملابس فضفاضة ومحتشمة",
        "أحذية مريحة للمشي",
        "مستلزمات النظافة الشخصية"
      ]
    },
    {
      category: "نصائح صحية",
      icon: Heart,
      items: [
        "احمل أدويتك الشخصية مع الوصفات الطبية",
        "تأكد من أخذ التطعيمات اللازمة",
        "احمل معقم يدين ومناديل مبللة",
        "اشرب الكثير من الماء للترطيب"
      ]
    },
    {
      category: "معلومات عن الطقس",
      icon: Thermometer,
      items: [
        "الصيف: حار جداً (35-45 درجة مئوية)",
        "الشتاء: معتدل (20-30 درجة مئوية)",
        "احمل مظلة للوقاية من الشمس",
        "استخدم واقي شمس عالي الحماية"
      ]
    }
  ];

  const importantNotes = [
    {
      icon: Sun,
      title: "نصائح للنهار",
      content: "تجنب التعرض المباشر لأشعة الشمس، واحرص على شرب الماء بكثرة"
    },
    {
      icon: Moon,
      title: "نصائح للمساء",
      content: "استغل الأوقات المسائية لأداء العمرة والطواف لتجنب الزحام"
    },
    {
      icon: BookOpen,
      title: "الأدعية والأذكار",
      content: "احمل كتيب الأدعية والأذكار الخاصة بالعمرة"
    },
    {
      icon: Map,
      title: "التنقل",
      content: "احتفظ بخريطة الحرم وتعرف على المعالم الرئيسية"
    },
    {
      icon: AlertCircle,
      title: "تنبيهات هامة",
      content: "احتفظ برقم مرشدك وعنوان الفندق معك دائماً"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <GuidelineCard key={index} {...guideline} />
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ملاحظات هامة</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <ImportantNote key={index} {...note} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}