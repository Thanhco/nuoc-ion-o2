import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
export function MobileActionBar() { return <div className="mobile-action-bar"><a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}><PhoneIcon />Gọi</a><Link href="/lien-he" className="mobile-action-primary">Đặt nước</Link></div>; }
