import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { NewsArticle } from "@/data/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="news-card">
      <Link className={`news-card__image news-card__image--${article.imageFit}`} href={`/tin-tuc/${article.slug}`} aria-label={`Đọc ${article.title}`}>
        <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
      </Link>
      <div className="news-card__body">
        <div className="news-card__meta"><span>{article.category}</span><time>{article.date}</time></div>
        <h3><Link href={`/tin-tuc/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="news-card__link" href={`/tin-tuc/${article.slug}`}>Đọc bài viết <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
