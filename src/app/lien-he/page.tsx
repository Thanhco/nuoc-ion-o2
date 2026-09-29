import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata(
  "Liên hệ | O2",
  "Thông tin liên hệ của Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2.",
  "/lien-he",
);

const zaloUrl = "https://zalo.me/0906635113";
const mapsUrl = "https://maps.app.goo.gl/yz6P6L8YtubKTHJ1A";
const phoneHref = (phone: string) => `tel:${phone.replaceAll(" ", "")}`;

export default function ContactPage() {
  return (
    <main className="contact-hero">
      <div className="contact-hero__background" aria-hidden="true" />
      <div className="contact-hero__readability" aria-hidden="true" />
      <div className="container contact-hero__container">
        <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />

        <div className="contact-hero__content">
          <div className="contact-hero__copy">
            <Reveal className="contact-hero__reveal" delay={0}><p className="eyebrow contact-hero__eyebrow">LIÊN HỆ O2</p></Reveal>
            <Reveal className="contact-hero__reveal" delay={80}><h1>Chúng tôi sẵn sàng lắng nghe nhu cầu của bạn.</h1></Reveal>
            <Reveal className="contact-hero__reveal" delay={160}><p className="contact-hero__lead">
              Liên hệ với O2 để được hỗ trợ thông tin sản phẩm và nhu cầu sử dụng.
            </p></Reveal>

            <Reveal className="contact-hero__reveal contact-details-reveal" delay={220}><div className="contact-details" aria-label="Thông tin liên hệ">
              <div className="contact-detail contact-detail--phone">
                <span className="contact-detail__icon phone-ring-icon"><PhoneIcon size={17} /></span>
                <div>
                  <span className="contact-detail__label">Điện thoại</span>
                  <div className="contact-detail__values contact-detail__values--phones">
                    <a className="contact-phone-number" href={phoneHref(siteConfig.phone)}>{siteConfig.phone}</a>
                    <span aria-hidden="true">·</span>
                    <a className="contact-phone-number" href={phoneHref(siteConfig.secondaryPhone)}>{siteConfig.secondaryPhone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon"><MailIcon size={17} /></span>
                <div>
                  <span className="contact-detail__label">Email</span>
                  <a className="contact-detail__value" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
              <div className="contact-detail contact-detail--address">
                <a className="contact-detail__icon" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Mở địa chỉ Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2 trên Google Maps"><PinIcon size={17} /></a>
                <div>
                  <span className="contact-detail__label">Địa chỉ</span>
                  <a className="contact-detail__value contact-address" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Mở địa chỉ Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2 trên Google Maps">{siteConfig.address}</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon"><ClockIcon size={17} /></span>
                <div>
                  <span className="contact-detail__label">Giờ làm việc</span>
                  <div className="contact-detail__value contact-hours">
                    <span>Thứ 2 - Thứ 7</span>
                    <span>8:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div></Reveal>

            <Reveal className="contact-hero__reveal" delay={300}><div className="contact-socials">
              <a className="contact-social" href={zaloUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-social__qr"><Image src="/images/qr-zalo.png" alt="Mã QR Zalo O2" width={128} height={128} /></span>
                <strong>Zalo</strong>
                <span>Quét mã để mở Zalo</span>
              </a>
              <a className="contact-social" href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                <span className="contact-social__qr"><Image src="/images/qr-facebook.png" alt="Mã QR Facebook O2" width={128} height={128} /></span>
                <strong>Facebook</strong>
                <span>Theo dõi O2</span>
              </a>
            </div></Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
