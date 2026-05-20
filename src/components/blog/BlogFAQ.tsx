type FaqItem = { question: string; answer: string };

export default function BlogFAQ({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-20 pt-16 border-t border-[var(--line)]">
      <p className="eyebrow mb-4">Perguntas frequentes</p>
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl text-[var(--ink)] tracking-tight mb-10"
        style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}
      >
        Dúvidas que sempre aparecem.
      </h2>
      <div className="border-t border-[var(--line)]">
        {items.map((item, i) => (
          <details key={i} className="group border-b border-[var(--line)]">
            <summary className="cursor-pointer list-none flex items-baseline gap-6 py-6">
              <span className="editorial-number flex-shrink-0 w-10">{String(i + 1).padStart(2, '0')}</span>
              <span
                className="flex-1 text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors tracking-tight"
                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}
              >
                {item.question}
              </span>
              <span className="text-[var(--ink-3)] text-xl group-open:rotate-45 transition-transform duration-500" aria-hidden="true">+</span>
            </summary>
            <p className="pb-6 pl-16 pr-10 text-[var(--ink-2)] leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
