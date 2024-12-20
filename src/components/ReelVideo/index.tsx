import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ReelVideo() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowControls(true);
          })
          .catch(error => {
            console.error('Error playing video:', error);
            // Reset state if playback fails
            setIsPlaying(false);
            setShowControls(false);
          });
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      
      // Add event listeners
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('pause', handlePause);
      
      // Cleanup
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">شاهد رحلتنا</h2>
          <p className="text-xl text-gray-600">تجربة روحانية لا تنسى مع Travel4You</p>
        </motion.div>

        <motion.div 
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isPlaying && (
            <motion.button 
              className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer group z-10"
              onClick={handlePlayClick}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-8 h-8 text-white fill-white" />
              </motion.div>
            </motion.button>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://data.wget.ma/travel4you/t4u.mp4"
            poster="https://data.wget.ma/travel4you/clients.jpeg"
            controls={showControls}
            playsInline
            preload="metadata"
            muted={!isPlaying}
          />
        </motion.div>
      </div>
    </section>
  );
}