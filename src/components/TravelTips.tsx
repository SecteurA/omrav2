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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">إرشادات السفر</h2>
          <p className="text-xl text-white/90">دليلك الشامل لرحلة عمرة مريحة وآمنة</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((category, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-white transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/20 rounded-lg ml-4">
                  <category.icon className="w-6 h-6 text-accent-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-accent-dark ml-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ملاحظات هامة</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <div key={index} className="flex items-start p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors duration-300">
                <note.icon className="w-6 h-6 text-accent-dark ml-3 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{note.title}</h4>
                  <p className="text-gray-700 text-sm">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}