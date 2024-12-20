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

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent ml-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">اتصل بنا</h3>
                    <p className="text-gray-600 ltr">+212 537 72 99 24</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent ml-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">راسلنا</h3>
                    <p className="text-gray-600 ltr">contact@travel4you.ma</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent ml-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">موقعنا</h3>
                    <p className="text-gray-600">27 شارع الأمير مولاي عبد الله رقم 2، الرباط</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5721398457247!2d-6.837160824520796!3d34.01715097941439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c7c6c344da7%3A0x8f94dc3d89c9f13e!2s27%20Avenue%20Prince%20Moulay%20Abdellah%2C%20Rabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1709913824607!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
