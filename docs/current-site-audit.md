# Audit website hiện tại — Nước đóng chai O2

Ngày audit: 2026-09-28  
Nguồn chính: `https://nuocdongchaio2.com/` và các tài nguyên public được website tải về.

## Phạm vi và phương pháp

Website hiện tại là một React SPA build tĩnh. Trong phiên audit, browser automation không khả dụng, vì vậy audit được thực hiện read-only qua HTML shell, JavaScript bundle và các tài nguyên public của website. Không đăng nhập, không gửi form, không thay đổi dữ liệu.

Các phát hiện dưới đây chỉ ghi nhận nội dung đã thấy trong app bundle hoặc response public. Những nội dung không có nguồn được đánh dấu `Chưa tìm thấy` hoặc `TODO`, không suy đoán thêm.

## 1. Tóm tắt hiện trạng

- Homepage đang tải từ `nuocdongchaio2.com` nhưng metadata runtime lại dùng canonical `https://ionkiemo2.vn/`.
- App có 3 route nội bộ được khai báo: `/`, `/about`, `/products`.
- Không tìm thấy route sản phẩm chi tiết, liên hệ, quy trình, chứng nhận, tin tức hoặc bài viết.
- Header/footer hiện chỉ liên kết tới Trang chủ, Thương hiệu và Sản phẩm.
- `robots.txt` và `sitemap.xml` trả HTTP 200 nhưng nội dung là HTML app shell, không phải robots file/XML sitemap hợp lệ.
- Title của HTML shell để trống; metadata được chèn ở client-side theo từng route.
- Sản phẩm hiện có 3 bản ghi: Bình 20L - Tiêu Chuẩn, Combo 4 Bình 20L và Chai 250ml - Tiện Lợi.
- Không thấy giá sản phẩm, chứng nhận cụ thể, mã sản phẩm, thông số kỹ thuật chi tiết hoặc dữ liệu bài viết.

## 2. Sitemap / URL hiện tại

### URL nội bộ có thể xác nhận từ router và navigation

| URL | Trạng thái | Title runtime | Mục đích | Heading / nội dung chính | CTA | Hình ảnh | Metadata SEO |
|---|---|---|---|---|---|---|---|
| `/` | Có trong router | `Nước khoáng i-on kiềm \| Trang chủ` | Landing page tổng quan thương hiệu, sản phẩm và hướng liên hệ | Hero: `Nước đóng chai, đóng bình O2` / `đồng bộ cho mọi nhu cầu`; đoạn giới thiệu hướng người dùng tới thương hiệu, sản phẩm, dịch vụ và liên hệ. Có section `Cam kết mang đến sức khỏe tốt nhất`. | `Khám phá thương hiệu`, `Xem sản phẩm`; có hành động gọi đặt hàng trong các card sản phẩm | Logo, `big-bottle...png`; background gradient/pattern tạo bằng CSS/SVG data URI | Description: `Khám phá thương hiệu nước khoáng i-on kiềm O2 với dịch vụ giao nhanh, sản phẩm an toàn và thông tin liên hệ rõ ràng.`; robots `index,follow`; canonical đang trỏ `https://ionkiemo2.vn/` |
| `/about` | Có trong router | `Nước khoáng i-on kiềm \| Thương hiệu` | Giới thiệu thương hiệu, sứ mệnh/tầm nhìn và cam kết | H1: `Về chúng tôi`; intro: `Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực cung cấp nước uống i-on kiềm chất lượng cao tại Việt Nam`; có nội dung `Cam kết mang đến sức khỏe tốt nhất`, đề cập kinh nghiệm, gia đình/doanh nghiệp/tổ chức và nước giàu i-on kiềm | Chưa thấy CTA page-specific rõ ràng trong phần đã audit | Logo, `big-bottle...png` | Description: `Tìm hiểu về sứ mệnh, tầm nhìn và cam kết chất lượng của thương hiệu nước khoáng i-on kiềm O2 cùng quy trình sản xuất an toàn.`; canonical `https://ionkiemo2.vn/about` |
| `/products` | Có trong router | `Nước khoáng i-on kiềm \| Sản phẩm` | Danh sách và lọc sản phẩm | H1: `Sản phẩm của chúng tôi`; intro: `Đa dạng kích thước và dung tích, phù hợp với mọi nhu cầu sử dụng` | Search, filter theo loại, `Gọi đặt hàng` | Logo, `big-bottle...png`, `small-bottle...png` | Description: `Lọc và tìm kiếm các sản phẩm nước i-on kiềm O2 phù hợp nhu cầu gia đình, cá nhân hay doanh nghiệp với thông tin dung tích và tính năng chi tiết.`; canonical `https://ionkiemo2.vn/products` |

### URL được kiểm tra nhưng không phải tài liệu chuẩn

| URL | Kết quả |
|---|---|
| `/robots.txt` | HTTP 200 nhưng trả cùng HTML app shell (`<!doctype html>...`), không có directive robots hợp lệ |
| `/sitemap.xml` | HTTP 200 nhưng trả cùng HTML app shell, không phải XML sitemap |

### URL không tìm thấy trong router/navigation hiện tại

`/gioi-thieu`, `/san-pham`, `/san-pham/[slug]`, `/quy-trinh-san-xuat`, `/chat-luong`, `/tin-tuc`, `/tin-tuc/[slug]`, `/lien-he` chưa tồn tại trong app hiện tại. Đây là các route đề xuất cho bản redesign, không phải URL cũ đã xác nhận.

## 3. Nội dung doanh nghiệp và liên hệ đã xác nhận

Các giá trị dưới đây xuất hiện trong cấu hình public của app:

- Tên: `Công ty TNHH nước tinh khiết i-on kiềm O2`
- Tên hiển thị thương hiệu: `Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2`
- Hotline chính: `0906 635 113`
- Số liên hệ thứ hai: `0909 953 806`
- Địa chỉ: `131/1 Đ. Xuân Thới Sơn 26, Ấp 6, xã Xuân Thới Sơn, TP.HCM`
- Email: `contact@ionkiemo2.vn`
- Giờ làm việc: `Thứ 2 - Thứ 7: 8:00 - 18:00`
- Facebook: `https://www.facebook.com/profile.php?id=61581188233646`
- TikTok: `https://www.tiktok.com/@ctytnhhnuocionkiemo2`
- Zalo: app có link handler `zalo.me` nhưng không thấy số/link Zalo đích cụ thể trong dữ liệu public đã audit.

Lưu ý: cần xác nhận lại địa chỉ, hotline, email và link mạng xã hội với chủ doanh nghiệp trước khi publish redesign. Không tự chỉnh sửa hoặc chuẩn hóa các giá trị này.

## 4. Sản phẩm hiện tại

| Sản phẩm | Dung tích | Nhóm | Mô tả | Features đã thấy | Hình |
|---|---:|---|---|---|---|
| Bình 20L - Tiêu Chuẩn | 20 lít | Gia đình | Bình nước 20 lít dung tích chuẩn, phù hợp cho gia đình và văn phòng | `Tinh khiết tuyệt đối`; `Giàu i-on kiềm`; `Đạt chuẩn VSATTP` | `big-bottle.e8ebba6239b10dddc529.png` |
| Combo 4 Bình 20L | 80 lít | Combo | Combo tiết kiệm cho nhu cầu sử dụng lâu dài | `Giá ưu đãi`; `Giao hàng miễn phí`; `Tặng kèm phụ kiện` | `big-bottle.e8ebba6239b10dddc529.png` |
| Chai 250ml - Tiện Lợi | 250ml | Cá nhân | Chai nhỏ gọn, tiện mang theo khi đi làm, đi học | `Nhỏ gọn`; `Tiện lợi`; `Thiết kế hiện đại` | `small-bottle.55f16a3fd5c2c05389b3.png` |

Không tìm thấy giá, SKU, tồn kho, quy cách đóng thùng, thông số pH/khoáng chất, hướng dẫn bảo quản hoặc sản phẩm liên quan. Các claim như `Đạt chuẩn VSATTP`, `Giàu i-on kiềm`, `Tinh khiết tuyệt đối` cần được doanh nghiệp cung cấp tài liệu chứng minh trước khi dùng trong SEO/schema hoặc viết nổi bật hơn.

## 5. Hình ảnh / tài nguyên public

| Tài nguyên | URL public | Loại | Dung lượng response | Ghi chú sử dụng |
|---|---|---|---:|---|
| Logo | `/static/media/logo.6dc7c7301cab3a6405a1.jpg` | JPEG | 576,913 bytes | Chỉ dùng lại sau khi xác nhận quyền sử dụng và chất lượng source |
| Bình lớn | `/static/media/big-bottle.e8ebba6239b10dddc529.png` | PNG | 193,885 bytes | Có thể dùng làm reference/product asset nếu chủ sở hữu xác nhận |
| Chai nhỏ | `/static/media/small-bottle.55f16a3fd5c2c05389b3.png` | PNG | 416,291 bytes | Có thể dùng làm reference/product asset nếu chủ sở hữu xác nhận |

Chưa tìm thấy ảnh nhà máy, ảnh quy trình, chứng nhận scan, ảnh đội ngũ hoặc bộ ảnh editorial. Không nên dùng ảnh stock để tạo cảm giác đó là cơ sở sản xuất thật.

## 6. Đề xuất information architecture mới

### Sitemap đề xuất

```text
/
├── /gioi-thieu
├── /san-pham
│   └── /san-pham/[slug]
├── /quy-trinh-san-xuat
├── /chat-luong
├── /tin-tuc
│   └── /tin-tuc/[slug]
└── /lien-he
```

### Quy tắc nội dung

- `/`: chuyển đổi nhanh, giới thiệu sản phẩm chủ lực và trust proof đã xác minh.
- `/gioi-thieu`: kể câu chuyện thương hiệu bằng nội dung thật từ page `/about`; phần thiếu dữ liệu để `TODO`.
- `/san-pham`: catalog premium, search/filter nhẹ, không hiển thị giá nếu chưa có giá thật.
- `/san-pham/[slug]`: chỉ render field có dữ liệu; ẩn phần thông số/claim chưa được xác nhận.
- `/quy-trinh-san-xuat`: chỉ publish các bước có tài liệu xác thực; hiện cần `TODO` cho toàn bộ chi tiết quy trình.
- `/chat-luong`: chỉ hiển thị chứng nhận/kiểm nghiệm sau khi có file, số hiệu, ngày cấp và đơn vị cấp.
- `/tin-tuc`: chỉ tạo khi có nguồn bài viết thật; không tạo bài placeholder giả như nội dung đã publish.
- `/lien-he`: dùng đúng hotline, email, địa chỉ và giờ làm việc đã xác nhận; CTA gọi/Zalo/form đặt nước.

## 7. Đề xuất UI/UX

- Visual system: nền trắng và xanh nước sâu làm nền tảng; aqua/cyan làm accent; gradient rất nhẹ, surface glass chỉ dùng ở vùng hero hoặc trust card.
- Typography: sans hiện đại, tương phản rõ giữa display heading và body; tránh uppercase toàn bộ đoạn dài.
- Layout: container rộng, nhiều khoảng thở, product visual lớn, card bo góc 20–28px, border mảnh và shadow thấp.
- Header: desktop có 7 mục theo sitemap mới và CTA `Đặt nước ngay`; mobile dùng menu sheet + sticky action bar `Gọi / Zalo / Đặt nước`.
- Homepage flow: hero → sản phẩm → lợi ích có nguồn → brand story → quy trình có trạng thái xác minh → chất lượng → CTA đặt nước → tin tức → footer.
- Conversion: lặp lại CTA ở hero, product section, product detail và cuối trang; ưu tiên gọi/Zalo trên mobile; form ngắn chỉ hỏi tên, số điện thoại, khu vực, nhu cầu.
- Accessibility: contrast AA, focus state rõ, touch target tối thiểu 44px, alt text theo sản phẩm, không phụ thuộc hover, tôn trọng `prefers-reduced-motion`.
- Performance: dùng `next/image`, kích thước ảnh rõ ràng, preload hero image có chọn lọc, lazy-load phần dưới fold, `next/font`, không thêm carousel nặng nếu không cần.

## 8. Design tokens đề xuất

```text
colors:
  ink: #0B1F33
  text: #29445A
  muted: #6B8294
  water-50: #F2FBFD
  water-100: #DDF6FA
  aqua-500: #16B8C7
  blue-600: #1677B8
  blue-900: #063B63
  line: #DCEAF0
  surface: #FFFFFF

spacing: 4px base; section desktop 96–128px; section mobile 56–72px
radius: sm 12px; md 20px; lg 28px; pill 999px
shadow: soft 0 12px 40px rgba(7, 56, 86, .08)
container: max-width 1200–1280px; mobile gutter 20px; desktop gutter 32px
breakpoints: 640 / 768 / 1024 / 1280px
```

## 9. Component architecture đề xuất

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── gioi-thieu/page.tsx
│   ├── san-pham/page.tsx
│   ├── san-pham/[slug]/page.tsx
│   ├── quy-trinh-san-xuat/page.tsx
│   ├── chat-luong/page.tsx
│   ├── tin-tuc/page.tsx
│   ├── tin-tuc/[slug]/page.tsx
│   ├── lien-he/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── site-header.tsx
│   ├── mobile-action-bar.tsx
│   ├── site-footer.tsx
│   ├── hero.tsx
│   ├── product-card.tsx
│   ├── product-grid.tsx
│   ├── product-gallery.tsx
│   ├── trust-points.tsx
│   ├── process-timeline.tsx
│   ├── quality-proof.tsx
│   ├── order-cta.tsx
│   ├── news-card.tsx
│   └── breadcrumbs.tsx
├── content/
│   ├── company.ts
│   ├── products.ts
│   ├── process.ts
│   ├── quality.ts
│   └── news.ts
└── lib/
    ├── metadata.ts
    ├── schema.ts
    └── validation.ts
```

Server Components là mặc định. Client Components chỉ dùng cho mobile menu, filter/search sản phẩm, gallery và form đặt nước.

## 10. SEO và structured data

- Dùng domain canonical thống nhất sau khi chủ website xác nhận domain chính: `nuocdongchaio2.com` hay `ionkiemo2.vn`.
- Tạo `app/sitemap.ts` chỉ liệt kê route tồn tại và nội dung đã publish.
- Tạo `app/robots.ts` với sitemap URL thật.
- Metadata per route: title, description, canonical, Open Graph image, Twitter card.
- `Organization`/`LocalBusiness`: dùng tên, điện thoại, email, địa chỉ và giờ làm việc đã xác minh.
- `Product`: chỉ đưa tên, ảnh, mô tả, brand và thuộc tính có thật; không tạo `offers` nếu chưa có giá/availability.
- `Article`: chỉ dùng cho bài viết thật có title, date, author/publisher và image.
- `BreadcrumbList`: áp dụng cho các route sâu.

## 11. Các điểm cần xác nhận trước implementation

1. Domain canonical chính và domain cần redirect.
2. Quyền sử dụng logo, ảnh bình/chai và ảnh mới.
3. Tên doanh nghiệp, địa chỉ hành chính mới nhất, hotline/email/giờ làm việc.
4. Link Zalo chính thức.
5. Tài liệu chứng minh cho các claim VSATTP, i-on kiềm, tinh khiết và mọi chứng nhận.
6. Các bước quy trình sản xuất thực tế.
7. Giá, chính sách giao hàng, khu vực giao hàng và phụ kiện đi kèm.
8. Danh sách bài viết/tin tức thật hoặc quyết định chưa launch section tin tức.

## 12. Kế hoạch implementation sau khi được duyệt

1. Chốt content source và asset rights; lập content model có trạng thái `verified`/`TODO`.
2. Khởi tạo Next.js App Router + TypeScript + Tailwind; dựng tokens và layout responsive.
3. Xây header/footer, mobile action bar, homepage và product catalog.
4. Xây product detail, contact/order flow và các trang IA còn lại.
5. Thêm metadata, canonical, sitemap, robots và schema theo dữ liệu thật.
6. Tối ưu ảnh/font/bundle; kiểm tra keyboard, mobile viewport và reduced motion.
7. Chạy lint, typecheck, build và Lighthouse; sửa các vấn đề về CLS/LCP/contrast/metadata trước bàn giao.

Chưa có code implementation nào được bắt đầu trong phase này.
