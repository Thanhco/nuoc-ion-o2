"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { MenuIcon, XIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/o2-logo.jpg" alt="Logo O2" width={56} height={56} priority />
          <span className="brand-name">
            <strong>Công Ty TNHH Nước Tinh Khiết <span className="company-name-nowrap">I-ON Kiềm <span className="brand-name__accent">O2</span></span></strong>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {links.map((link) => <Link key={link.href} href={link.href} className={isActive(link.href) ? "is-active" : undefined} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <div className="header-phone-block" aria-label="Số điện thoại">
            <a className="header-phone-number" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
            <a className="header-phone-number" href={`tel:${siteConfig.secondaryPhone.replaceAll(" ", "")}`}>{siteConfig.secondaryPhone}</a>
          </div>
          <Button href="/lien-he">Đặt nước ngay</Button>
        </div>
        <button className="menu-button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {open ? <div className="mobile-menu"><nav aria-label="Điều hướng mobile">{links.map((link) => <Link key={link.href} href={link.href} className={isActive(link.href) ? "is-active" : undefined} aria-current={isActive(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Button href="/lien-he" className="mobile-menu-cta">Đặt nước ngay</Button></nav></div> : null}
    </header>
  );
}
