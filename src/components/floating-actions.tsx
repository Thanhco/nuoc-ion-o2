"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const getThreshold = () => Math.min(650, window.innerHeight * 0.7);

const socialLinks = [
  { key: "zalo", label: "Zalo", href: siteConfig.social.zalo, mark: "Zalo" },
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook, mark: "f" },
  { key: "tiktok", label: "TikTok", href: siteConfig.social.tiktok, mark: "♪" },
] as const;

export function FloatingActions() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  useEffect(() => {
    let lastVisible = false;
    const updateVisibility = () => {
      const nextVisible = window.scrollY > getThreshold();
      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setBackToTopVisible(nextVisible);
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

  return (
    <div className={`floating-actions${backToTopVisible ? " has-back-to-top" : ""}${socialsOpen ? " socials-open" : ""}`}>
      <button type="button" className="back-to-top" aria-label="Lên đầu trang" onClick={scrollToTop}>↑</button>
      <div className="floating-socials">
        <button type="button" className="floating-socials__toggle" aria-label={socialsOpen ? "Đóng liên hệ mạng xã hội" : "Mở liên hệ mạng xã hội"} aria-expanded={socialsOpen} onClick={() => setSocialsOpen((open) => !open)}>
          <span aria-hidden="true">◎</span>
        </button>
        <div className="floating-socials__links">
          {socialLinks.map((social) => (
            <a key={social.key} className={`floating-social floating-social--${social.key}`} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Liên hệ qua ${social.label}`} data-label={social.label}>
              <span aria-hidden="true">{social.mark}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
