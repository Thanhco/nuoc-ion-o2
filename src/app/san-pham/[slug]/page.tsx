import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { BreadcrumbJsonLd, Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowUpRight, PhoneIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { ProductVisual } from "@/components/product-visual";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getSiteUrl, siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

type ProductPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return createMetadata("Sản phẩm không tồn tại | Nước O2", undefined, `/san-pham/${slug}`);
  const image = product.images[0];
  const dimensions = product.slug === "chai-250ml-tien-loi" ? { width: 896, height: 896 } : { width: 421, height: 593 };
  return createMetadata(product.seoTitle ?? `${product.name} | Nước O2`, product.seoDescription ?? product.shortDescription, `/san-pham/${product.slug}`, { image: { ...dimensions, url: image.src, alt: image.alt } });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const relatedProducts = getRelatedProducts(product);
  const breadcrumbs = [{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm", href: "/san-pham" }, { label: product.name }];
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description ?? product.shortDescription, image: product.images.map((image) => `${getSiteUrl()}${image.src}`), brand: { "@type": "Brand", name: "O2" }, url: `${getSiteUrl()}/san-pham/${product.slug}` };

  return <>
    <section className="product-detail-hero"><div className="container"><Breadcrumbs items={breadcrumbs} /><div className="product-detail-grid"><Reveal className="product-detail-visual-reveal" reveal="fade-left"><div className="product-detail-visual"><ProductVisual product={product} variant="detail" /><span className="visual-caption">NƯỚC O2 · {product.capacity}</span></div></Reveal><Reveal className="product-detail-copy-reveal" reveal="fade-right"><div className="product-detail-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="product-capacity">{product.capacity}</p><p className="product-detail-description">{product.description ?? product.shortDescription}</p><div className="product-features">{product.features.filter((feature) => feature !== product.capacity).map((feature) => <span key={feature}>{feature}</span>)}</div><div className="product-detail-actions"><a className="button button-primary" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}><PhoneIcon /> Gọi đặt nước</a><Button href="/lien-he" variant="secondary">Liên hệ đặt hàng <ArrowUpRight /></Button></div><p className="product-detail-note">Liên hệ để được hỗ trợ đặt nước.</p></div></Reveal></div></div></section>
    <section className="section related-products"><div className="container"><div className="section-row"><div className="section-heading"><p className="eyebrow">Khám phá thêm</p><h2>Sản phẩm khác</h2></div><Button href="/san-pham" variant="text">Xem tất cả <ArrowUpRight /></Button></div><div className="product-grid">{relatedProducts.map((relatedProduct) => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}</div></div></section>
    <BreadcrumbJsonLd items={breadcrumbs} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
  </>;
}
