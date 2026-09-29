import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site";
const mapsUrl = "https://maps.app.goo.gl/yz6P6L8YtubKTHJ1A";
const phoneHref = (phone: string) => `tel:${phone.replaceAll(" ", "")}`;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Reveal className="footer-reveal">
        <div className="footer-brand">
          <Image src="/images/logo.jpg" alt="Logo O2" width={60} height={60} />
          <p className="footer-name">Công Ty TNHH Nước Tinh Khiết <span className="company-name-nowrap">I-ON Kiềm O2</span></p>
          <p>Đồng hành cùng những lựa chọn nước uống đóng bình và đóng chai cho gia đình, văn phòng và nhu cầu hằng ngày.</p>
        </div>
        </Reveal>

        <Reveal className="footer-reveal">
        <div className="footer-explore">
          <p className="footer-label">Khám phá</p>
          <nav className="footer-links" aria-label="Liên kết chân trang">
            <Link href="/gioi-thieu">Giới thiệu</Link>
            <Link href="/san-pham">Sản phẩm</Link>
            <Link href="/tin-tuc">Tin tức</Link>
            <Link href="/lien-he">Liên hệ</Link>
            <Link href="/lien-he">Đặt nước</Link>
          </nav>
        </div>
        </Reveal>

        <Reveal className="footer-reveal">
        <div className="footer-contact-column">
          <p className="footer-label">Liên hệ</p>
          <div className="footer-contact">
            <div className="footer-contact-group">
              <PhoneIcon size={19} />
              <div className="footer-contact-values">
                <a href={phoneHref(siteConfig.phone)}>{siteConfig.phone}</a>
                <a href={phoneHref(siteConfig.secondaryPhone)}>{siteConfig.secondaryPhone}</a>
              </div>
            </div>
            <a className="footer-contact-group" href={`mailto:${siteConfig.email}`}>
              <MailIcon size={19} />
              <span>{siteConfig.email}</span>
            </a>
            <a className="footer-contact-group" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Mở địa chỉ Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2 trên Google Maps">
              <PinIcon size={19} />
              <span>{siteConfig.address}</span>
            </a>
            <div className="footer-contact-group">
              <ClockIcon size={19} />
              <div className="footer-hours">
                <span>Thứ 2 – Thứ 7</span>
                <strong>8:00 – 18:00</strong>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <Reveal className="container footer-bottom-reveal" reveal="fade" delay={220}>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} O2. All rights reserved.</span>
        </div>
      </Reveal>
    </footer>
  );
}
