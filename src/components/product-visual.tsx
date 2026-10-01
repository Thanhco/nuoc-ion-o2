import Image from "next/image";
import type { Product } from "@/data/products";

type ProductVisualProps = { product: Product; variant?: "card" | "detail"; mobileImageSource?: string };

export function ProductVisual({ product, variant = "card", mobileImageSource }: ProductVisualProps) {
  const isCombo = product.slug === "combo-4-binh-20l";
  const isBottle = product.slug === "chai-250ml-tien-loi" || product.slug === "chai-500ml";
  const image = product.images[0];
  const className = `product-visual product-visual-${variant} product-visual-${product.slug} ${isCombo ? "product-visual-combo" : ""} ${isBottle ? `product-visual-bottle product-visual--${product.capacity}` : ""}`.trim();

  const imageElement = <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={variant === "detail" ? "(max-width: 1023px) 88vw, 38vw" : isCombo ? "(max-width: 620px) 88vw, (max-width: 1199px) 42vw, 24vw" : "(max-width: 767px) 76vw, 29vw"}
    />;

  return <div className={className} aria-label={isCombo ? "Bốn bình 20L được trình bày cùng nhau" : undefined}>
    {mobileImageSource ? <picture className="product-visual__responsive-picture"><source media="(max-width: 768px)" srcSet={mobileImageSource} />{imageElement}</picture> : imageElement}
  </div>;
}
