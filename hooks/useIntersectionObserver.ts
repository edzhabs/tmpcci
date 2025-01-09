"use client";
import { useEffect, useRef, useState, RefObject } from "react";

export function useIntersectionObserver<T extends HTMLElement>(
  options = {},
): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<T>(null as T | null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return [targetRef as RefObject<T>, isIntersecting];
}
