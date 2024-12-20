import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GuidelineCardProps {
  icon: LucideIcon;
  category: string;
  items: string[];
}

export default function GuidelineCard({ icon: Icon, category, items }: GuidelineCardProps) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-white transition-colors duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-accent/20 rounded-lg ml-4">
          <Icon className="w-6 h-6 text-accent-dark" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <span className="text-accent-dark ml-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}