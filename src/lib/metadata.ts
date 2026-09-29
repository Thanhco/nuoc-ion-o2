import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/config/site";

type MetadataImage = { url: string; width: number; height: number; alt: string };
type MetadataOptions = { image?: MetadataImage };

export function createMetadata(title: string, description: string = siteConfig.description, path = "/", options: MetadataOptions = {}): Metadata {
  const url = getSiteUrl();
  const canonical = `${url}${path === "/" ? "" : path}`;
  const image = options.image ?? { url: "/images/big-bottle.png", width: 421, height: 593, alt: "Bình nước O2 20 lít" };
  return {
    title,
    description,
    metadataBase: new URL(url),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
