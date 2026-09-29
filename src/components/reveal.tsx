"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export type RevealType = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  reveal?: RevealType;
  delay?: number;
};

export function Reveal({ children, className = "", reveal = "fade-up", delay }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const show = () => {
      element.classList.remove("reveal-animation-ready");
      element.classList.add("reveal-animation-visible");
    };
    const fallbackTimer = window.setTimeout(show, 1200);
    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        window.clearTimeout(fallbackTimer);
        show();
        observer?.disconnect();
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      element.classList.add("reveal-animation-ready");
      observer.observe(element);
    } catch {
      window.clearTimeout(fallbackTimer);
      show();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      observer?.disconnect();
      element.classList.remove("reveal-animation-ready", "reveal-animation-visible");
    };
  }, []);

  const style = delay === undefined ? undefined : { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return <div ref={elementRef} className={`reveal-animation ${className}`.trim()} data-reveal={reveal} data-delay={delay} style={style}>{children}</div>;
}
