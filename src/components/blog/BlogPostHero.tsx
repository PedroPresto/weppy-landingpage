import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  publishedAt: string;
  modifiedAt?: string | null;
  category?: string | null;
  author?: { name?: string | null; role?: string | null } | null;
  cover: { url: string; alt: string; cloudinaryUrl?: string | null; sizes?: { full?: { url: string } } };
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

export default function BlogPostHero({ title, publishedAt, modifiedAt, category, author, cover }: Props) {
  const src = cover.cloudinaryUrl ?? cover.sizes?.full?.url ?? cover.url;
  const categoryLabel = category ? CATEGORY_LABEL[category] : null;

  return (
    <header className="relative bg-[var(--paper)] pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[var(--line)]">
      <div className="container-editorial">
        <nav aria-label="breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3 text-xs text-[var(--ink-3)] uppercase tracking-[0.15em]">
            <li>
              <Link href="/" className="hover:text-[var(--ink)] transition-colors">Início</Link>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--ink)] transition-colors">Blog</Link>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-9">
            {categoryLabel ? (
              <p className="eyebrow mb-6 text-[var(--accent)]">{categoryLabel}</p>
            ) : null}
            <h1
              className="text-balance text-4xl md:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.035em] text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400 }}
            >
              {title}
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 md:pl-8 md:border-l md:border-[var(--line)] flex flex-col justify-end gap-4">
            <div>
              <p className="eyebrow mb-2">Por</p>
              <p className="text-[var(--ink)] text-base">
                {author?.name ?? 'Equipe Weppy'}
              </p>
              {author?.role ? (
                <p className="text-sm text-[var(--ink-3)]">{author.role}</p>
              ) : null}
            </div>
            <div>
              <p className="eyebrow mb-2">Publicado</p>
              <time dateTime={publishedAt} className="text-sm text-[var(--ink-2)]">
                {formatDate(publishedAt)}
              </time>
              {modifiedAt && modifiedAt !== publishedAt ? (
                <p className="text-xs text-[var(--ink-3)] mt-1">
                  Atualizado em {formatDate(modifiedAt)}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {src ? (
          <figure className="mt-16 md:mt-20">
            <div className="relative aspect-[16/9] w-full bg-[var(--paper-2)] border border-[var(--line)] overflow-hidden">
              <Image
                src={src}
                alt={cover.alt}
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-[var(--ink-3)] italic" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
              {cover.alt}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </header>
  );
}
