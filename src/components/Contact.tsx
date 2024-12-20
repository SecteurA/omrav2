import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600">نحن هنا لمساعدتك والإجابة على استفساراتك</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  الرسالة
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors">
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">اتصل بنا</h3>
                  <p className="text-gray-600">+966 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">راسلنا</h3>
                  <p className="text-gray-600">info@travel4you.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">موقعنا</h3>
                  <p className="text-gray-600">المملكة العربية السعودية، مكة المكرمة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}