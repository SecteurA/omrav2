import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  backgroundImage = 'https://data.wget.ma/travel4you/slide.avif' 
}: PageHeaderProps) {
  return (
    <div className="relative h-[300px] mb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
}