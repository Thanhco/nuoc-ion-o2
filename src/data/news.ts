export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  imageFit: "contain" | "cover";
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "tim-hieu-cac-lua-chon-dung-tich-nuoc-o2",
    title: "Tìm hiểu các lựa chọn dung tích nước O2",
    excerpt: "Thông tin về các dung tích hiện có và cách lựa chọn theo nhu cầu sử dụng.",
    category: "THÔNG TIN O2",
    date: "09.2026",
    image: "/images/gioithieu.png",
    imageAlt: "Không gian sản phẩm nước O2 giữa thiên nhiên",
    imageFit: "cover",
    content: [
      "O2 hiện có các lựa chọn dung tích dành cho gia đình, văn phòng và nhu cầu mang theo hằng ngày.",
      "Bạn có thể xem thông tin từng sản phẩm, dung tích và mô tả sử dụng trên trang Sản phẩm hoặc liên hệ trực tiếp với O2 để được hỗ trợ.",
    ],
  },
  {
    slug: "o2-bo-sung-san-pham-chai-500ml",
    title: "O2 bổ sung sản phẩm chai 500ml",
    excerpt: "O2 vừa bổ sung chai 500ml vào danh mục sản phẩm, thêm lựa chọn bên cạnh chai 250ml.",
    category: "CẬP NHẬT SẢN PHẨM",
    date: "10.2026",
    image: "/images/o2-500ml.png",
    imageAlt: "Chai nước O2 500ml",
    imageFit: "contain",
    content: [
      "O2 vừa bổ sung sản phẩm chai 500ml vào danh mục. Đây là lựa chọn bên cạnh chai 250ml và các sản phẩm nước O2 dung tích khác.",
      "Xem thông tin chai 500ml trên trang sản phẩm hoặc liên hệ O2 để được hỗ trợ.",
    ],
  },
  {
    slug: "lua-chon-binh-20l-cho-gia-dinh-va-van-phong",
    title: "Lựa chọn bình 20L cho nhu cầu sử dụng hằng ngày",
    excerpt: "Tổng quan về lựa chọn bình 20L trong danh mục sản phẩm O2.",
    category: "THÔNG TIN SẢN PHẨM",
    date: "09.2026",
    image: "/images/big-bottle.png",
    imageAlt: "Bình nước O2 20L",
    imageFit: "contain",
    content: [
      "Bình 20L là lựa chọn có dung tích lớn trong danh mục O2, phù hợp để tham khảo cho nhu cầu sử dụng tại gia đình và văn phòng.",
      "Thông tin chi tiết về sản phẩm được cập nhật tại trang sản phẩm của O2.",
    ],
  },
  {
    slug: "chai-250ml-cho-nhu-cau-mang-theo",
    title: "Chai 250ml cho nhu cầu mang theo",
    excerpt: "Một lựa chọn nhỏ gọn trong danh mục sản phẩm O2.",
    category: "SẢN PHẨM O2",
    date: "09.2026",
    image: "/images/small-bottle.png",
    imageAlt: "Chai nước O2 250ml",
    imageFit: "contain",
    content: [
      "Chai 250ml có kích thước nhỏ gọn, thuận tiện để tham khảo khi cần một lựa chọn mang theo.",
      "Bạn có thể xem thêm thông tin sản phẩm và liên hệ O2 khi cần hỗ trợ.",
    ],
  },
  {
    slug: "cap-nhat-moi-tu-o2",
    title: "Những cập nhật mới từ O2",
    excerpt: "Theo dõi các nội dung mới được O2 cập nhật trên website.",
    category: "HOẠT ĐỘNG O2",
    date: "09.2026",
    image: "/images/lienhe.png",
    imageAlt: "Không gian hình ảnh O2",
    imageFit: "cover",
    content: [
      "Trang Tin tức là nơi O2 cập nhật thông tin sản phẩm, nội dung hướng dẫn xem danh mục và các thông tin mới trên website.",
      "Các nội dung sẽ được bổ sung dần theo từng chủ đề cụ thể.",
    ],
  },
];

export const featuredNews = newsArticles[0];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
