import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { products } from "@/data/products";
import { newsArticles } from "@/data/news";
export default function sitemap(): MetadataRoute.Sitemap { const url = getSiteUrl(); const paths = ["/", "/gioi-thieu", "/san-pham", "/tin-tuc", "/lien-he", ...products.map((product) => `/san-pham/${product.slug}`), ...newsArticles.map((article) => `/tin-tuc/${article.slug}`)]; return paths.map((path) => ({ url: `${url}${path}`, lastModified: new Date("2026-09-28"), changeFrequency: "monthly", priority: path === "/" ? 1 : path.startsWith("/tin-tuc/") ? 0.6 : path === "/tin-tuc" ? 0.8 : path.startsWith("/san-pham/") ? 0.7 : 0.8 })); }
