'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { InstagramMockup } from './InstagramMockup';
import { instagramFlow, instagramBenefits, instagramDemo, instagramStats } from './LandingPageData';

export const InstagramSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section
            id="instagram"
            ref={ref.ref}
            className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]"
        >
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <div className={`flex items-center gap-3 mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <p className="eyebrow">Automação de Instagram</p>
                        <span className="badge-new">novo</span>
                    </div>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Comentou no seu post?{' '}
                        <span className="text-[var(--orange)]">A Weppy já está no direct dele.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Aquele post que bombou deixou dezenas de comentários pedindo preço, link e informação. Você
                        respondeu quantos? A Weppy responde todos, no mesmo segundo, e ainda manda o direct com o botão
                        que leva a pessoa para onde você quiser.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-y-14 lg:gap-y-0 lg:gap-x-14 items-center">
                    {/* Passos */}
                    <div className="col-span-12 lg:col-span-6">
                        <ol className="relative space-y-8 pl-10">
                            <span aria-hidden="true" className="absolute left-[15px] top-3 bottom-3 w-px bg-[var(--line)]" />
                            {instagramFlow.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <li
                                        key={step.title}
                                        className={`relative ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${index * 110}ms` }}
                                    >
                                        <span className="absolute -left-10 top-0 grid place-items-center w-8 h-8 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
                                            <Icon className="w-4 h-4 text-[var(--orange)]" strokeWidth={2} />
                                        </span>
                                        <div className="flex items-baseline gap-3">
                                            <h3 className="text-lg font-semibold text-[var(--ink)] leading-tight">
                                                {step.title}
                                            </h3>
                                            <span className="mono text-[var(--ink-3)]">{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                        <p className="mt-1.5 text-sm text-[var(--ink-2)] leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ol>

                        {/* Números */}
                        <div className={`mt-12 pt-8 border-t border-[var(--line)] grid grid-cols-3 gap-4 ${ref.isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
                            {instagramStats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs text-[var(--ink-3)] leading-snug">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className={`mt-10 ${ref.isVisible ? 'animate-fade-in-up animation-delay-700' : 'opacity-0'}`}>
                            <a href="#pricing" className="btn-orange group">
                                <span>Quero isso no meu Instagram</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Demonstração */}
                    <div className={`col-span-12 lg:col-span-6 ${ref.isVisible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                        <InstagramMockup {...instagramDemo} />
                    </div>
                </div>

                {/* Benefícios */}
                <div className="mt-16 md:mt-20 pt-10 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-3 gap-6">
                    {instagramBenefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.text}
                                className={`flex items-start gap-3 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <Icon className="w-5 h-5 text-[var(--orange)] shrink-0 mt-0.5" strokeWidth={2} />
                                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">{benefit.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
