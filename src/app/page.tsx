import { ArrowUpRight, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/button";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__background" aria-hidden="true" />
        <div className="home-hero__readability" aria-hidden="true" />
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <Reveal className="home-hero__reveal" delay={0}><p className="home-hero__eyebrow">NƯỚC TINH KHIẾT I-ON KIỀM O2</p></Reveal>
            <Reveal className="home-hero__reveal" delay={100}><h1 className="home-hero__title"><span className="home-hero__title-line home-hero__title-line--first"><span>Chọn sự</span> <span>tinh khiết</span></span><span className="home-hero__title-line">cho mỗi ngày.</span></h1></Reveal>
            <Reveal className="home-hero__reveal" delay={200}><p className="home-hero__description">Nước đóng chai, đóng bình O2 — những lựa chọn rõ ràng cho gia đình, văn phòng và nhịp sống cá nhân.</p></Reveal>
            <Reveal className="home-hero__reveal" delay={300}><div className="home-hero__actions"><Button href="/lien-he">Đặt nước ngay <ArrowUpRight /></Button><Button href="/san-pham" variant="secondary">Xem sản phẩm <ArrowUpRight /></Button></div></Reveal>
            <Reveal className="home-hero__reveal" delay={380}><div className="home-hero__contact" aria-label="Gọi trực tiếp">
              <span className="home-hero__contact-icon phone-ring-icon"><PhoneIcon size={19} /></span>
              <span className="home-hero__contact-copy">
                <span className="home-hero__contact-label">GỌI TRỰC TIẾP</span>
                <span className="home-hero__contact-numbers">
                  <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
                  <span aria-hidden="true">•</span>
                  <a href={`tel:${siteConfig.secondaryPhone.replaceAll(" ", "")}`}>{siteConfig.secondaryPhone}</a>
                </span>
              </span>
            </div></Reveal>
          </div>
        </div>
      </section>

      <section className="home-products-editorial">
        <div className="container">
          <Reveal className="home-section-intro" delay={0}>
            <div><p className="eyebrow">SẢN PHẨM O2</p><h2><span>Chọn dung tích</span><span>phù hợp với bạn.</span></h2></div>
            <Button href="/san-pham" variant="text">Xem tất cả sản phẩm <ArrowUpRight /></Button>
          </Reveal>
          <div className="product-grid editorial-product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </div>
      </section>

      <section id="order" className="home-final-cta">
        <Reveal className="container home-final-cta__inner" reveal="fade-up" delay={0}>
          <div><p className="eyebrow">O2 MỖI NGÀY</p><h2><span>Chọn O2</span><span>cho mỗi ngày.</span></h2><p>Khám phá các dung tích hiện có và lựa chọn theo nhu cầu sử dụng.</p></div>
          <div className="home-final-cta__actions"><Button href="/san-pham">Xem sản phẩm <ArrowUpRight /></Button><Button href="/lien-he" variant="secondary">Đặt nước ngay <ArrowUpRight /></Button></div>
        </Reveal>
      </section>
    </>
  );
}
