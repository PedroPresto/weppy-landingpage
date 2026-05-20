import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogPostHero from "@/components/blog/BlogPostHero";
import RichTextRenderer from "@/components/blog/RichTextRenderer";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogFAQ from "@/components/blog/BlogFAQ";
import { getPayloadInstance } from "@/lib/payload";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const revalidate = 3600;

type FaqItem = { question: string; answer: string };

async function fetchPost(slug: string) {
  try {
    const payload = await getPayloadInstance();
    const result = await payload.find({
      collection: "posts",
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: "published" } },
        ],
      },
      limit: 1,
      depth: 2,
    });
    return result.docs[0] ?? null;
  } catch {
    return null;
  }
}

async function fetchRelatedPosts(currentSlug: string, category: string | null) {
  try {
    const payload = await getPayloadInstance();
    const result = await payload.find({
      collection: "posts",
      where: {
        and: [
          { status: { equals: "published" } },
          { slug: { not_equals: currentSlug } },
          ...(category ? [{ category: { equals: category } }] : []),
        ],
      },
      sort: "-publishedAt",
      limit: 3,
      depth: 1,
    });
    return result.docs;
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const payload = await getPayloadInstance();
    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      limit: 1000,
      depth: 0,
    });
    return result.docs.map((doc) => ({ slug: doc.slug as string }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return { title: "Artigo não encontrado" };

  const cover = post.cover as { url: string; cloudinaryUrl?: string | null; sizes?: { full?: { url: string } } };
  const ogImage = cover?.cloudinaryUrl ?? cover?.sizes?.full?.url ?? cover?.url;
  const description = (post.excerpt as string | null) ?? undefined;
  const keywords = (post.keywords as string | null) ?? undefined;
  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.title as string,
    description,
    keywords: keywords ? keywords.split(",").map((s) => s.trim()) : undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title as string,
      description,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title as string }] : undefined,
      url,
      type: "article",
      siteName: SITE_NAME,
      locale: "pt_BR",
      publishedTime: post.publishedAt as string,
      modifiedTime: (post.modifiedAt as string | null) ?? (post.publishedAt as string),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title as string,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  const cover = post.cover as {
    url: string;
    alt: string;
    cloudinaryUrl?: string | null;
    sizes?: { full?: { url: string } };
  };
  const author = post.author as { name?: string | null; role?: string | null } | null;
  const category = (post.category as string | null) ?? null;
  const faqItems = (post.faq as FaqItem[] | null) ?? [];
  const url = `${SITE_URL}/blog/${slug}`;
  const ogImage = cover?.cloudinaryUrl ?? cover?.sizes?.full?.url ?? cover?.url;

  const related = await fetchRelatedPosts(slug, category);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: ogImage ? [ogImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: (post.modifiedAt as string | null) ?? post.publishedAt,
    inLanguage: "pt-BR",
    keywords: (post.keywords as string | null) ?? undefined,
    articleSection: category ?? undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: author?.name ?? "Equipe Weppy",
      ...(author?.role ? { jobTitle: author.role } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diário", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title as string, item: url },
    ],
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <article className="bg-[var(--paper)]">
        <BlogPostHero
          title={post.title as string}
          publishedAt={post.publishedAt as string}
          modifiedAt={(post.modifiedAt as string | null) ?? null}
          category={category}
          author={author}
          cover={cover}
        />

        <div className="container-editorial py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2 hidden md:block">
              <div className="sticky top-32">
                <p className="eyebrow mb-3">Compartilhar</p>
                <ShareButtons url={url} title={post.title as string} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 md:col-start-3 max-w-3xl">
              <RichTextRenderer content={post.content as never} />

              {faqItems.length > 0 ? <BlogFAQ items={faqItems} /> : null}

              <footer className="mt-20 pt-10 border-t border-[var(--line)] flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
                <Link href="/blog" className="text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-px hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                  ← Voltar ao diário
                </Link>
                <div className="md:hidden">
                  <ShareButtons url={url} title={post.title as string} />
                </div>
              </footer>

              <aside className="mt-20 p-10 md:p-14 bg-[var(--ink)] text-[var(--paper)]">
                <p className="eyebrow mb-6" style={{ color: 'var(--accent)' }}>
                  Pronto para escalar?
                </p>
                <h3
                  className="text-3xl md:text-4xl text-balance leading-tight tracking-tight max-w-xl"
                  style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, color: 'var(--paper)' }}
                >
                  Conversas que viram vendas,{' '}
                  <span className="serif-italic" style={{ color: 'var(--accent)' }}>vinte e quatro horas por dia</span>.
                </h3>
                <a
                  href="https://app.weppy.com.br"
                  target="_blank"
                  rel="noopener"
                  className="mt-10 inline-flex items-center gap-2 px-7 py-4 text-sm font-medium transition-colors"
                  style={{ background: 'var(--accent)', color: 'var(--ink)' }}
                >
                  Começar agora
                </a>
              </aside>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="bg-[var(--paper-2)] py-20 md:py-28 border-t border-[var(--line)]">
            <div className="container-editorial">
              <div className="flex items-end justify-between mb-12">
                <h2
                  className="text-3xl md:text-4xl text-[var(--ink)] tracking-tight"
                  style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}
                >
                  Continue lendo
                </h2>
                <Link href="/blog" className="hidden sm:inline-flex items-center text-sm text-[var(--ink-2)] hover:text-[var(--ink)] border-b border-[var(--ink-3)] pb-px">
                  Todos os artigos →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                {related.map((rp) => {
                  const rpCover = rp.cover as { url: string; alt: string; cloudinaryUrl?: string | null };
                  const src = rpCover?.cloudinaryUrl ?? rpCover?.url;
                  return (
                    <Link
                      key={rp.slug as string}
                      href={`/blog/${rp.slug}`}
                      className="group block"
                    >
                      {src ? (
                        <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--paper-3)]">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: `url(${src})` }}
                            role="img"
                            aria-label={rpCover.alt}
                          />
                        </div>
                      ) : null}
                      <h3
                        className="mt-5 text-xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors tracking-tight"
                        style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 500, lineHeight: 1.2 }}
                      >
                        {rp.title as string}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
