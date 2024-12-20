import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="w-48 h-24 flex items-center">
              <img 
                src="https://data.wget.ma/travel4you/Travel4you-AR-white.avif" 
                alt="Travel4You"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400">
              نحن نقدم خدمات متكاملة لرحلات العمرة، مع التركيز على راحة وسلامة ضيوف الرحمن
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-accent mb-3">الصفحات الرئيسية</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-accent transition-colors">الرئيسية</Link>
                  </li>
                  <li>
                    <Link to="/booking" className="text-gray-400 hover:text-accent transition-colors">حجز العمرة</Link>
                  </li>
                  <li>
                    <Link to="/travel-tips" className="text-gray-400 hover:text-accent transition-colors">إرشادات السفر</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">تواصل معنا</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-accent mb-3">معلومات مهمة</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/travel-tips#documents" className="text-gray-400 hover:text-accent transition-colors">الوثائق المطلوبة</Link>
                  </li>
                  <li>
                    <Link to="/travel-tips#health" className="text-gray-400 hover:text-accent transition-colors">نصائح صحية</Link>
                  </li>
                  <li>
                    <Link to="/travel-tips#weather" className="text-gray-400 hover:text-accent transition-colors">معلومات الطقس</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-gray-400 ltr">+212 537 72 99 24</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-gray-400 ltr">contact@travel4you.ma</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-gray-400">27 شارع الأمير مولاي عبد الله رقم 2، الرباط</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6">تابعنا على</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/travelforyou.ma/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors"
              >
                <Facebook className="w-6 h-6 text-accent" />
              </a>
              <a 
                href="https://www.instagram.com/travel4you.ma/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors"
              >
                <Instagram className="w-6 h-6 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">جميع الحقوق محفوظة © {new Date().getFullYear()} Travel4You</p>
        </div>
      </div>
    </footer>
  );
}