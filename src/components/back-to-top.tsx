"use client";

import { useEffect, useState } from "react";

const getThreshold = () => Math.min(650, window.innerHeight * 0.7);

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastVisible = false;

    const updateVisibility = () => {
      const nextVisible = window.scrollY > getThreshold();
      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setVisible(nextVisible);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return <button type="button" className={`back-to-top${visible ? " is-visible" : ""}`} aria-label="Về đầu trang" onClick={scrollToTop}>↑</button>;
}
