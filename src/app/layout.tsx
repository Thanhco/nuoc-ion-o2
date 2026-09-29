import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { FloatingActions } from "@/components/floating-actions";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, getSiteUrl } from "@/config/site";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin", "vietnamese"], variable: "--font-be-vietnam-pro", display: "swap" });

export const metadata: Metadata = createMetadata("Nước đóng chai O2 | Tinh khiết cho mọi nhu cầu");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: getSiteUrl(), email: siteConfig.email, telephone: siteConfig.phone, logo: `${getSiteUrl()}/images/logo.jpg`, address: { "@type": "PostalAddress", streetAddress: siteConfig.address } };
  return <html lang="vi"><body className={beVietnamPro.variable}><SiteHeader /><main>{children}</main><SiteFooter /><MobileActionBar /><FloatingActions /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
