import Image from "next/image";
import type { Product } from "@/data/products";

type ProductVisualProps = { product: Product; variant?: "card" | "detail" };

export function ProductVisual({ product, variant = "card" }: ProductVisualProps) {
  const isCombo = product.slug === "combo-4-binh-20l";
  const isBottle = product.slug === "chai-250ml-tien-loi" || product.slug === "chai-500ml";
  const image = product.images[0];
  const className = `product-visual product-visual-${variant} product-visual-${product.slug} ${isCombo ? "product-visual-combo" : ""} ${isBottle ? `product-visual-bottle product-visual--${product.capacity}` : ""}`.trim();

  return <div className={className} aria-label={isCombo ? "Bốn bình 20L được trình bày cùng nhau" : undefined}>
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={isCombo ? "(max-width: 767px) 88vw, 28vw" : variant === "detail" ? "(max-width: 767px) 82vw, 43vw" : "(max-width: 767px) 76vw, 29vw"}
    />
  </div>;
}
