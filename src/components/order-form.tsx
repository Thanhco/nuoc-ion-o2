"use client";

import { useState } from "react";
import { products } from "@/data/products";

type OrderFormProps = { selectedProduct?: string };

export function OrderForm({ selectedProduct }: OrderFormProps) {
  const [product, setProduct] = useState(selectedProduct ?? "");
  const [submitted, setSubmitted] = useState(false);
  return <form className="order-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <div className="form-field"><label htmlFor="name">Họ tên</label><input id="name" name="name" required autoComplete="name" /></div>
    <div className="form-field"><label htmlFor="phone">Số điện thoại</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
    <div className="form-row"><div className="form-field"><label htmlFor="product">Sản phẩm</label><select id="product" name="product" value={product} onChange={(event) => setProduct(event.target.value)}><option value="">Chọn sản phẩm</option>{products.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></div><div className="form-field"><label htmlFor="quantity">Số lượng</label><input id="quantity" name="quantity" type="number" min="1" inputMode="numeric" /></div></div>
    <div className="form-field"><label htmlFor="note">Ghi chú</label><textarea id="note" name="note" rows={4} /></div>
    <button className="button button-primary form-submit" type="submit">Chuẩn bị thông tin đặt nước</button>
    {submitted ? <p className="form-notice" role="status">Thông tin đã sẵn sàng. Vui lòng gọi hotline để xác nhận đơn.</p> : <p className="form-helper">Form chưa gửi dữ liệu đến hệ thống. Vui lòng gọi hotline để xác nhận đơn.</p>}
  </form>;
}
