export type Product = {
  id: number;
  slug: string;
  name: string;
  capacity: string;
  category: string;
  shortDescription: string;
  description?: string;
  images: { src: string; alt: string; width: number; height: number }[];
  features: string[];
  specifications?: { label: string; value: string }[];
  seoTitle?: string;
  seoDescription?: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "binh-20l-tieu-chuan",
    name: "Bình 20L Tiêu chuẩn",
    capacity: "20 lít",
    category: "Gia đình",
    shortDescription: "Phù hợp cho nhu cầu sử dụng tại gia đình và văn phòng.",
    images: [{ src: "/images/big-bottle.png", alt: "Bình nước O2 20 lít", width: 421, height: 593 }],
    features: ["Gia đình", "Văn phòng", "20 lít"],
  },
  {
    id: 2,
    slug: "combo-4-binh-20l",
    name: "Combo 4 Bình 20L",
    capacity: "80 lít",
    category: "Gia đình / Văn phòng",
    shortDescription: "Bộ 4 bình 20 lít cho nhu cầu sử dụng thường xuyên.",
    images: [{ src: "/images/combo-4-binh-20l-cropped.png", alt: "Combo bốn bình nước O2 20 lít", width: 603, height: 271 }],
    features: ["Combo 4 bình", "80 lít", "Nhu cầu lâu dài"],
  },
  {
    id: 4,
    slug: "chai-500ml",
    name: "Chai 500ml",
    capacity: "500ml",
    category: "Cá nhân",
    shortDescription: "Chai dung tích 500ml cho nhu cầu sử dụng hằng ngày.",
    images: [{ src: "/images/o2-500ml.png", alt: "Chai nước O2 500ml", width: 379, height: 1058 }],
    features: ["500ml", "Đóng chai"],
  },
  {
    id: 3,
    slug: "chai-250ml-tien-loi",
    name: "Chai 250ml",
    capacity: "250ml",
    category: "Cá nhân",
    shortDescription: "Kích thước nhỏ gọn, thuận tiện mang theo khi đi học hoặc đi làm.",
    images: [{ src: "/images/o2-250ml.png", alt: "Chai nước O2 250ml", width: 367, height: 718 }],
    features: ["Nhỏ gọn", "250ml", "Mang theo"],
  },
];

export function getProductBySlug(slug: string) { return products.find((product) => product.slug === slug); }
export function getRelatedProducts(product: Product, limit = 3) { return products.filter((candidate) => candidate.id !== product.id).slice(0, limit); }
