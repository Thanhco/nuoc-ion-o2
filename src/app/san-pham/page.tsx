import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Sản phẩm | Nước tinh khiết O2",
  "Khám phá các sản phẩm nước O2 với dung tích và nhu cầu sử dụng khác nhau.",
  "/san-pham",
);

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero products-page-intro">
        <div className="container products-page-intro__container">
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]} />
          <Reveal className="products-page-intro-reveal">
            <p className="eyebrow">SẢN PHẨM O2</p>
            <h1>
              <span className="products-title-desktop"><span>Chọn dung tích phù hợp</span><span>với nhu cầu của bạn.</span></span>
              <span className="products-title-mobile"><span>Chọn dung tích</span><span>phù hợp với bạn.</span></span>
            </h1>
            <p>Ba lựa chọn dung tích cho gia đình, văn phòng và nhu cầu mang theo hằng ngày.</p>
          </Reveal>
        </div>
      </section>
      <section className="products-list">
        <div className="container">
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}
