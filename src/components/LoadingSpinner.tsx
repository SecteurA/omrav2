import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-accent"></div>
    </div>
  );
}