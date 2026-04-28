import { useEffect, useRef, useState } from 'react';

interface ObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>(options: ObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
}
