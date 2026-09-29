import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ProductVisual } from "@/components/product-visual";
import { Reveal } from "@/components/reveal";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return <Reveal className="product-card-reveal">
    <article className="product-card">
      <Link href={`/san-pham/${product.slug}`} className="product-card-image" aria-label={`Xem ${product.name}`}>
        <ProductVisual product={product} />
      </Link>
      <div className="product-card-body">
        <div className="product-card-meta"><span>{product.category}</span><span className="product-capacity-badge">{product.capacity}</span></div>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <Link className="inline-link" href={`/san-pham/${product.slug}`}>Xem chi tiết <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  </Reveal>;
}
