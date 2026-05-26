'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from './LandingPageData';

export const TestimonialsSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="testimonials" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Quem usa</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Quem usa automação WhatsApp.{' '}
                        <span className="text-[var(--orange)]">Resultados reais.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={t.name}
                            className={`card flex flex-col ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                ))}
                            </div>
                            <p className="text-sm md:text-[0.9375rem] text-[var(--ink)] leading-relaxed mb-6 flex-1">
                                &ldquo;{t.content}&rdquo;
                            </p>
                            <div className="pt-5 border-t border-[var(--line)] flex items-center gap-3">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--orange-soft)]">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        sizes="44px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-[var(--ink)] leading-tight">{t.name}</p>
                                    <p className="text-xs text-[var(--ink-3)] leading-tight mt-0.5 truncate">{t.role}</p>
                                </div>
                            </div>
                            <div className="mt-3 inline-flex items-center self-start px-2.5 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold">
                                {t.stats}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
