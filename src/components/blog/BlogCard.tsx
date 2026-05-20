import Image from "next/image";
import Link from "next/link";

type Media = { url: string; alt: string; cloudinaryUrl?: string | null; sizes?: { card?: { url: string } } };

export type BlogCardPost = {
  slug: string;
  title: string;
  excerpt?: string | null;
  publishedAt: string;
  category?: string | null;
  cover: Media;
};

const CATEGORY_LABEL: Record<string, string> = {
  "whatsapp-marketing": "WhatsApp Marketing",
  "automacao-vendas": "Automação",
  "atendimento": "Atendimento",
  "ia": "Inteligência Artificial",
  "cases": "Cases",
  "guias": "Guias",
};

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function BlogCard({ post }: { post: BlogCardPost }) {
  const src = post.cover.cloudinaryUrl ?? post.cover.sizes?.card?.url ?? post.cover.url;
  const categoryLabel = post.category ? CATEGORY_LABEL[post.category] : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block transition-opacity duration-500"
      aria-label={`Ler artigo: ${post.title}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--paper-2)] border border-[var(--line)]">
        {src ? (
          <Image
            src={src}
            alt={post.cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--ink)]/30" />
        {categoryLabel ? (
          <span className="absolute top-4 left-4 chip bg-[var(--paper-3)]" style={{ backdropFilter: 'blur(8px)' }}>
            {categoryLabel}
          </span>
        ) : null}
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-3">
          <time dateTime={post.publishedAt} className="eyebrow text-[10px]">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h3
          className="text-2xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-500 tracking-tight"
          style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 500, lineHeight: 1.15 }}
        >
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-3 line-clamp-3 text-[var(--ink-2)] text-[0.95rem] leading-relaxed">
            {post.excerpt}
          </p>
        ) : null}
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-px group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
          Ler artigo
        </span>
      </div>
    </Link>
  );
}
