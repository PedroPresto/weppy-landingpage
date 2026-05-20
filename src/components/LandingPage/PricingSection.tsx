'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { plans } from './LandingPageData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const PricingSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="pricing" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Planos</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Um plano completo.{' '}
                        <span className="text-[var(--orange)]">Dois jeitos</span> de poupar.
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Todas as funcionalidades em qualquer plano. A diferença é o quanto você economiza ao se comprometer com prazos maiores.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start max-w-2xl mx-auto lg:max-w-3xl">
                    {plans.map((plan, index) => {
                        const isPopular = plan.popular;
                        return (
                            <div
                                key={plan.id}
                                className={`relative p-8 md:p-10 rounded-2xl transition-all duration-500
                                    ${isPopular
                                        ? 'bg-[var(--surface)] ring-2 ring-[var(--orange)] shadow-[0_24px_60px_-20px_rgba(255,89,2,0.25)]'
                                        : 'bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-strong)]'}
                                    ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                                `}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="badge-new px-3 py-1 text-[0.6875rem]">
                                            Mais escolhido
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[var(--ink)] mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[var(--ink-2)] leading-relaxed min-h-[3rem]">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="pb-6 border-b border-[var(--line)] mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.04em]">
                                            {plan.price}
                                        </span>
                                        <span className="text-[var(--ink-3)] text-base">{plan.period}</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-3 text-xs">
                                        <span className="line-through text-[var(--ink-3)]">{plan.originalPrice}</span>
                                        <span className="badge-new px-2 py-0.5">{plan.savings}</span>
                                    </div>
                                    <p className="mono text-[var(--ink-3)] mt-3">
                                        {plan.id === 'mensal'
                                            ? 'Total R$ 97 / mês'
                                            : plan.id === 'trimestral'
                                                ? 'R$ 247 a cada 3 meses'
                                                : 'R$ 300 / ano · menos de R$ 1/dia'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--ink-2)]">
                                            <Check className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.checkoutUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isPopular ? 'btn-orange' : 'btn-ghost'} w-full group`}
                                >
                                    <span>{isPopular ? 'Garantir economia máxima' : 'Contratar'}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-12 text-center text-sm text-[var(--ink-3)]">
                    Pagamento via Pix ou cartão · Garantia integral de 7 dias · Setup em 5 minutos
                </p>
            </div>
        </section>
    );
};
