
import { useEffect, useState, useRef } from 'react';

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export const ANIMATION_CLASSES = {
  fadeIn: 'opacity-0 animate-fadeIn',
  slideUp: 'opacity-0 animate-slideUp',
  slideInLeft: 'opacity-0 animate-slideInLeft',
  slideInRight: 'opacity-0 animate-slideInRight',
};
