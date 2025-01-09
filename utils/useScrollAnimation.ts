"use client";

import { useEffect, useRef, RefObject } from "react";

export function useScrollAnimation(
  options: IntersectionObserverInit = {},
): RefObject<HTMLDivElement | null> {
  // Allow null in the RefObject type
  const ref = useRef<HTMLDivElement | null>(null); // Initialize with null

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
}
