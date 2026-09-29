# Phase 3 content audit

Ngày audit: 2026-09-28  
Nguồn: `docs/current-site-audit.md`, `src/config/site.ts`, `src/data/products.ts`, các asset trong `public/images/` và nội dung public đã audit từ website hiện tại.

## Kết luận triển khai

- `/gioi-thieu`: đủ nội dung factual để nâng cấp thành brand page.
- `/quy-trinh-san-xuat`: không triển khai trong Phase 3 vì không có bước quy trình nào được xác nhận trong source.
- `/chat-luong`: không triển khai trong Phase 3 vì không có tài liệu chứng nhận/kiểm nghiệm hoặc thông tin quality control đủ xác thực.
- Không thêm ảnh nhà máy, ảnh quy trình, certificate badge, logo tiêu chuẩn hoặc số liệu marketing.

## VERIFIED_CONTENT

### Brand / company

- Tên hiển thị: `Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2`.
- Website source giới thiệu O2 là đơn vị cung cấp nước uống i-on kiềm chất lượng cao tại Việt Nam.
- Nội dung source đề cập phục vụ gia đình, doanh nghiệp và tổ chức.
- Nội dung source có phần cam kết mang đến sức khỏe tốt nhất, nhưng không có số liệu hoặc bằng chứng định lượng đi kèm.

### Products / use context

- Bình 20L - Tiêu Chuẩn: 20 lít, phù hợp cho gia đình và văn phòng.
- Combo 4 Bình 20L: 80 lít, nhu cầu sử dụng lâu dài.
- Chai 250ml - Tiện Lợi: chai nhỏ gọn, tiện mang theo khi đi làm/đi học.
- Các feature đang có trong source product data được giữ nguyên ở Phase 1/2; Phase 3 không mở rộng claim từ các feature này.

### Contact / identity

- Hotline: `0906 635 113`.
- Hotline thứ hai: `0909 953 806`.
- Email: `contact@ionkiemo2.vn`.
- Địa chỉ: `131/1 Đ. Xuân Thới Sơn 26, Ấp 6, xã Xuân Thới Sơn, TP.HCM`.
- Giờ làm việc: `Thứ 2 - Thứ 7: 8:00 - 18:00`.

## MISSING_CONTENT

- Các bước sản xuất thực tế.
- Nguồn nước.
- Hệ thống xử lý/lọc/khử khuẩn.
- Số cấp lọc, RO, UV, Ozone hoặc công nghệ khác.
- Thông tin nhà máy, công suất, phòng kiểm nghiệm.
- Tiêu chuẩn, giấy phép, chứng nhận, kết quả kiểm nghiệm.
- Ảnh nhà máy, ảnh dây chuyền, ảnh quy trình, ảnh đội ngũ.
- Số năm kinh nghiệm, số khách hàng, số chai hoặc số liệu vận hành.
- Đối tác, giải thưởng, review và testimonial.

## UNVERIFIED_CONTENT

Các claim sau xuất hiện trong source product data/website cũ nhưng chưa có tài liệu xác minh độc lập trong repository:

- `Tinh khiết tuyệt đối`.
- `Giàu i-on kiềm`.
- `Đạt chuẩn VSATTP`.
- `Giá ưu đãi`.
- `Giao hàng miễn phí`.
- `Tặng kèm phụ kiện`.

Các claim trên không được mở rộng, diễn giải thành tiêu chuẩn/chứng nhận hoặc dùng làm structured data mới trong Phase 3.

## AVAILABLE_ASSETS

| Asset | Kích thước | Trạng thái |
|---|---:|---|
| `public/images/logo.jpg` | 2560×2560 | Asset thương hiệu public đã audit |
| `public/images/big-bottle.png` | 421×593 | Hình bình 20L public đã audit |
| `public/images/small-bottle.png` | 896×896 | Hình chai 250ml public đã audit |

Không có asset filename `certificate`, `test-result`, `factory` hoặc `production` trong `public/`. Không suy luận nội dung tài liệu từ tên file.

## Phase 3 content guardrails

- Brand page chỉ dùng company/product/use-context đã xác nhận ở trên.
- Không tạo `/quy-trinh-san-xuat` hoặc `/chat-luong` trong Phase 3.
- Không thêm menu item, sitemap URL hoặc CTA tới route chưa tồn tại.
- Không thêm structured data certification, rating, review, offers hoặc availability.
- Decorative visual chỉ dùng CSS hiện có, không mô phỏng nhà máy hay giấy chứng nhận.
