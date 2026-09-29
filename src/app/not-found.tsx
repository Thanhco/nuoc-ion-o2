import { Button } from "@/components/button";

export default function NotFound() {
  return <section className="not-found-page"><div className="container not-found-inner"><p className="eyebrow">404</p><h1>Không tìm thấy trang.</h1><p>Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p><div className="not-found-actions"><Button href="/">Về trang chủ</Button><Button href="/san-pham" variant="secondary">Xem sản phẩm</Button></div></div></section>;
}
