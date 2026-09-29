import Image from "next/image";
import { BreadcrumbJsonLd, Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Giới thiệu O2 | Nước tinh khiết i-on kiềm",
  "Tìm hiểu về Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2 và các lựa chọn nước uống cho gia đình, doanh nghiệp và tổ chức.",
  "/gioi-thieu",
);

const breadcrumbs = [{ label: "Trang chủ", href: "/" }, { label: "Giới thiệu" }];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__background" aria-hidden="true" />
        <div className="about-hero__readability" aria-hidden="true" />
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="about-hero__grid">
            <Reveal className="about-hero__copy-reveal">
            <div className="about-hero__copy">
              <p className="eyebrow">GIỚI THIỆU O2</p>
              <h1><span>Nước uống O2</span><span>cho nhu cầu mỗi ngày.</span></h1>
              <p>O2 cung cấp các lựa chọn nước uống đóng bình và đóng chai, phù hợp cho gia đình, văn phòng và nhu cầu sử dụng hằng ngày.</p>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-statement">
        <Reveal className="container about-statement__inner">
          <p className="eyebrow">CÂU CHUYỆN O2</p>
          <h2><span>Mỗi nhu cầu sử dụng</span><span>có một lựa chọn phù hợp.</span></h2>
          <p>Từ bình 20 lít cho gia đình, văn phòng đến chai nhỏ tiện mang theo, O2 tập trung vào những lựa chọn rõ ràng cho từng hoàn cảnh sử dụng.</p>
        </Reveal>
      </section>

      <section className="about-story about-story--large">
        <div className="container about-story__grid">
          <Reveal className="about-story__visual-reveal" reveal="fade-left"><div className="about-story__visual about-story__visual--large" aria-label="Bình nước O2 20 lít"><span className="about-story__stage" aria-hidden="true" /><Image src="/images/big-bottle.png" alt="Bình nước O2 20 lít" width={421} height={593} sizes="(max-width: 767px) 76vw, 31vw" /></div></Reveal>
          <Reveal className="about-story__copy-reveal" reveal="fade-right"><div className="about-story__copy"><p className="eyebrow">BÌNH 20L</p><h2><span>Cho gia đình</span><span>và văn phòng.</span></h2><p>Bình 20 lít cho nhu cầu sử dụng thường xuyên tại gia đình và văn phòng.</p><Button href="/san-pham/binh-20l-tieu-chuan" variant="text">Xem sản phẩm <ArrowUpRight /></Button></div></Reveal>
        </div>
      </section>

      <section className="about-story about-story--small">
        <div className="container about-story__grid about-story__grid--reverse">
          <Reveal className="about-story__copy-reveal" reveal="fade-left"><div className="about-story__copy"><p className="eyebrow">CHAI 250ML</p><h2><span>Nhỏ gọn cho</span><span>nhu cầu mang theo.</span></h2><p>Chai 250ml có kích thước nhỏ gọn, thuận tiện mang theo khi đi học, đi làm hoặc trong các hoạt động hằng ngày.</p><Button href="/san-pham/chai-250ml-tien-loi" variant="text">Xem sản phẩm <ArrowUpRight /></Button></div></Reveal>
          <Reveal className="about-story__visual-reveal" reveal="fade-right"><div className="about-story__visual about-story__visual--small" aria-label="Chai nước O2 250ml"><span className="about-story__stage" aria-hidden="true" /><Image src="/images/small-bottle.png" alt="Chai nước O2 250ml" width={896} height={896} sizes="(max-width: 767px) 62vw, 25vw" /></div></Reveal>
        </div>
      </section>

      <section className="about-final-cta"><Reveal className="container about-final-cta__inner"><div><p className="eyebrow">BẮT ĐẦU TỪ NHU CẦU CỦA BẠN</p><h2><span>Chọn sản phẩm O2</span><span>phù hợp với bạn.</span></h2><p>Khám phá các dung tích hiện có và lựa chọn theo nhu cầu sử dụng.</p></div><div className="about-final-cta__actions"><Button href="/san-pham">Xem sản phẩm <ArrowUpRight /></Button><Button href="/lien-he" variant="secondary">Đặt nước ngay <ArrowUpRight /></Button></div></Reveal></section>

      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
