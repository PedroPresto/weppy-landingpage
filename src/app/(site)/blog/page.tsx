import type { Metadata } from "next";
import Link from "next/link";
import BlogList from "@/components/blog/BlogList";
import { getPayloadInstance } from "@/lib/payload";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Diário: Automação, IA e Vendas pelo WhatsApp",
  description:
    "Guias, cases e estratégias sobre automação de WhatsApp, IA conversacional e como vender mais com atendimento inteligente.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Diário Weppy",
    description:
      "Guias, cases e estratégias sobre automação de WhatsApp, IA conversacional e vendas.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const PAGE_SIZE = 12;

type SearchParams = { page?: string };

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  let posts: {
    slug: string;
    title: string;
    excerpt: string | null;
    publishedAt: string;
    category: string | null;
    cover: { url: string; alt: string; cloudinaryUrl?: string | null; sizes?: { card?: { url: string } } };
  }[] = [];
  let totalPages = 1;

  try {
    const payload = await getPayloadInstance();
    const result = await payload.find({
      collection: "posts",
      where: {
        and: [
          { status: { equals: "published" } },
          { publishedAt: { less_than_equal: new Date().toISOString() } },
        ],
      },
      sort: "-publishedAt",
      limit: PAGE_SIZE,
      page,
      depth: 1,
    });

    posts = result.docs.map((doc) => ({
      slug: doc.slug as string,
      title: doc.title as string,
      excerpt: (doc.excerpt as string | null | undefined) ?? null,
      publishedAt: doc.publishedAt as string,
      category: (doc.category as string | null | undefined) ?? null,
      cover: doc.cover as { url: string; alt: string; cloudinaryUrl?: string | null; sizes?: { card?: { url: string } } },
    }));
    totalPages = result.totalPages;
  } catch {
    // ignore
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Diário Weppy",
    description: "Artigos sobre automação de WhatsApp, IA e vendas.",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diário", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="min-h-screen bg-[var(--paper)] pt-32 md:pt-40 pb-24">
        <div className="container-editorial">
          <nav aria-label="breadcrumb" className="mb-12">
            <ol className="flex items-center gap-3 text-xs text-[var(--ink-3)] uppercase tracking-[0.15em]">
              <li>
                <Link href="/" className="hover:text-[var(--ink)] transition-colors">Início</Link>
              </li>
              <li aria-hidden="true">·</li>
              <li aria-current="page" className="text-[var(--ink-2)]">Diário</li>
            </ol>
          </nav>

          <header className="grid grid-cols-12 gap-8 mb-20 pb-16 border-b border-[var(--line)]">
            <div className="col-span-12 md:col-span-3">
              <span className="editorial-number">Vol. I</span>
              <p className="eyebrow mt-3">Diário {SITE_NAME}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1
                className="text-balance text-4xl md:text-7xl leading-[1.02] tracking-[-0.04em] text-[var(--ink)]"
                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400 }}
              >
                Conversas que viram{' '}
                <span className="serif-italic text-[var(--accent)]">vendas</span>.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[var(--ink-2)] leading-relaxed max-w-2xl">
                Guias práticos, cases reais e estratégias testadas para você vender mais e atender melhor com inteligência artificial.
              </p>
            </div>
          </header>

          <BlogList posts={posts} page={page} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
