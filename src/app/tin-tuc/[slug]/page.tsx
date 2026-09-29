import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { getNewsArticleBySlug, newsArticles } from "@/data/news";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) return createMetadata("Tin tức | O2", undefined, "/tin-tuc");
  return createMetadata(`${article.title} | O2`, article.excerpt, `/tin-tuc/${article.slug}`, {
    image: { url: article.image, width: 1200, height: 750, alt: article.imageAlt },
  });
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="news-article-page">
      <section className="news-article-hero page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Tin tức", href: "/tin-tuc" }, { label: article.title }]} />
          <Reveal className="news-article-hero__content">
            <div className="news-article-meta"><span>{article.category}</span><time>{article.date}</time></div>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </Reveal>
        </div>
      </section>
      <Reveal className="news-article-body container">
        <div className={`news-article-image news-article-image--${article.imageFit}`}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 820px) 100vw, 900px" priority /></div>
        <div className="news-article-copy">
          {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="news-card__link" href="/tin-tuc">Quay lại Tin tức <ArrowUpRight size={17} /></Link>
      </Reveal>
    </main>
  );
}
