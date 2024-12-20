import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ImportantNoteProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export default function ImportantNote({ icon: Icon, title, content }: ImportantNoteProps) {
  return (
    <div className="flex items-start p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors duration-300">
      <Icon className="w-6 h-6 text-accent-dark ml-3 mt-1" />
      <div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700 text-sm">{content}</p>
      </div>
    </div>
  );
}