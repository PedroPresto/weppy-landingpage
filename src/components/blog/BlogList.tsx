import Link from "next/link";
import BlogCard, { type BlogCardPost } from "./BlogCard";

type Props = {
  posts: BlogCardPost[];
  page: number;
  totalPages: number;
};

export default function BlogList({ posts, page, totalPages }: Props) {
  if (posts.length === 0) {
    return (
      <p className="py-24 text-center text-[var(--ink-3)] italic" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        Nenhum artigo publicado ainda. Volte em breve.
      </p>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="mt-20 flex items-center justify-center gap-2 pt-8 border-t border-[var(--line)]" aria-label="Paginação">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={p === 1 ? "/blog" : `/blog?page=${p}`}
              className={`px-4 py-2 text-sm transition-colors ${
                p === page
                  ? "text-[var(--ink)] border-b border-[var(--ink)]"
                  : "text-[var(--ink-3)] hover:text-[var(--ink)]"
              }`}
              aria-current={p === page ? "page" : undefined}
            >
              {String(p).padStart(2, '0')}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
