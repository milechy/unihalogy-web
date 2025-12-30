'use client';

import { useState, useEffect, useRef } from 'react';

interface UseRevealStaggerOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  transitionDuration?: number;
}

export function useRevealStagger(
  itemCount: number,
  options: UseRevealStaggerOptions = {}
) {
  const {
    threshold = 0.25,
    rootMargin = '0px',
    staggerDelay = 100,
    transitionDuration = 600,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [threshold, rootMargin]);

  // Calculate styles for each item
  const getItemStyle = (index: number) => {
    if (prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'none',
      };
    }

    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
        transitionDelay: `${index * staggerDelay}ms`,
      };
    }

    return {
      opacity: 0,
      transform: 'translateY(24px)',
      transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
      transitionDelay: `${index * staggerDelay}ms`,
    };
  };

  return {
    containerRef,
    isVisible,
    prefersReducedMotion,
    getItemStyle,
  };
}

