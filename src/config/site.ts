export const siteConfig = {
  name: "Công Ty TNHH Nước Tinh Khiết I-ON Kiềm O2",
  shortName: "Nước O2",
  description:
    "Nước đóng chai, đóng bình O2 với thông tin sản phẩm và liên hệ rõ ràng cho gia đình, văn phòng và nhu cầu cá nhân.",
  phone: "0906 635 113",
  secondaryPhone: "0909 953 806",
  email: "contact@ionkiemo2.vn",
  address: "131/1 Đ. Xuân Thới Sơn 26, Ấp 6, xã Xuân Thới Sơn, TP.HCM",
  workingHours: "Thứ 2 - Thứ 7: 8:00 - 18:00",
  social: {
    zalo: "https://zalo.me/0906635113",
    facebook: "https://www.facebook.com/profile.php?id=61581188233646",
    tiktok: "https://www.tiktok.com/@ctytnhhnuocionkiemo2",
  },
} as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("NEXT_PUBLIC_SITE_URL is required for production builds.");
    }

    return "http://localhost:3000";
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) URL.");
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http or https.");
  }

  if (parsedUrl.username || parsedUrl.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must not contain credentials.");
  }

  return parsedUrl.toString().replace(/\/$/, "");
}

export const siteUrl = getSiteUrl();
