import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowUpRight } from "@/components/icons";
import { NewsCard } from "@/components/news-card";
import { Reveal } from "@/components/reveal";
import { featuredNews, newsArticles } from "@/data/news";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Tin tức | O2",
  "Cập nhật thông tin sản phẩm, hoạt động và những nội dung mới từ O2.",
  "/tin-tuc",
);

export default function NewsPage() {
  const latestArticles = newsArticles.slice(1);

  return (
    <>
      <section className="news-page-intro page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Tin tức" }]} />
          <Reveal className="news-page-intro__content">
            <p className="eyebrow">TIN TỨC O2</p>
            <h1><span>Câu chuyện &amp;</span><span>thông tin từ O2.</span></h1>
            <p>Cập nhật thông tin sản phẩm, hoạt động và những nội dung mới từ O2.</p>
          </Reveal>
        </div>
      </section>

      <main className="news-page-content">
        <section className="news-featured container" aria-labelledby="featured-news-title">
          <Reveal className="news-section-intro"><p className="eyebrow">BÀI VIẾT NỔI BẬT</p></Reveal>
          <Reveal className="news-featured__grid">
            <Link className={`news-featured__image news-featured__image--${featuredNews.imageFit}`} href={`/tin-tuc/${featuredNews.slug}`} aria-label={`Đọc ${featuredNews.title}`}>
              <Image src={featuredNews.image} alt={featuredNews.imageAlt} fill sizes="(max-width: 767px) 100vw, 58vw" priority />
            </Link>
            <div className="news-featured__body">
              <div className="news-article-meta"><span>{featuredNews.category}</span><time>{featuredNews.date}</time></div>
              <h2 id="featured-news-title"><Link href={`/tin-tuc/${featuredNews.slug}`}>{featuredNews.title}</Link></h2>
              <p>{featuredNews.excerpt}</p>
              <Link className="news-card__link" href={`/tin-tuc/${featuredNews.slug}`}>Đọc bài viết <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
        </section>

        <section className="news-latest container" aria-labelledby="latest-news-title">
          <Reveal className="news-section-intro"><p className="eyebrow" id="latest-news-title">MỚI NHẤT</p></Reveal>
          <div className="news-grid">
            {latestArticles.map((article) => (
              <Reveal key={article.slug} className="news-card-reveal">
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
