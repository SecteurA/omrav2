import React from 'react';
import LazyImage from './LazyImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function AirlinePartners() {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const airlines = [
    {
      name: "طيران الإمارات",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
      alt: "Emirates Airlines Logo"
    },
    {
      name: "الخطوط السعودية",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Saudia_Logo.png",
      alt: "Saudi Airlines Logo"
    },
    {
      name: "الخطوط الملكية المغربية",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Royal_Air_Maroc_2020.svg",
      alt: "Royal Air Maroc Logo"
    },
    {
      name: "الاتحاد للطيران",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Etihad_Airways_Logo.svg",
      alt: "Etihad Airways Logo"
    },
    {
      name: "الخطوط التركية",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Turkish_Airlines_logo_2019.svg",
      alt: "Turkish Airlines Logo"
    }
  ];

  return (
    <section ref={elementRef} className="py-16 bg-gray-50">
      {isVisible && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">شركاؤنا في النجاح</h2>
            <p className="text-xl text-gray-600">نتعاون مع أفضل شركات الطيران العالمية</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {airlines.map((airline, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-24"
              >
                <LazyImage 
                  src={airline.logo} 
                  alt={airline.alt}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = `https://placehold.co/200x100/ffffff/666666?text=${encodeURIComponent(airline.name)}`;
                    target.className = target.className.replace('grayscale', '');
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}