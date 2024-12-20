import React from 'react';
import VideoPlayer from './VideoPlayer';
import FeaturesList from './FeaturesList';
import BookingButton from './BookingButton';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <VideoPlayer />
          </div>
          <div className="flex flex-col space-y-8">
            <FeaturesList />
            <BookingButton />
          </div>
        </div>
      </div>
    </section>
  );
}