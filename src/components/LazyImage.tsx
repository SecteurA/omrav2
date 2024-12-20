import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className = '', ...props }: LazyImageProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={className}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={className}
          {...props}
        />
      )}
    </div>
  );
}