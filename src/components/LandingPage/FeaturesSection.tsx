'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { features } from './LandingPageData';

export const FeaturesSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="features" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Recursos</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Tudo que um time de vendas faz,{' '}
                        <span className="text-[var(--orange)]">só que sem dormir</span>.
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Oito ferramentas pensadas para empresas que vivem no WhatsApp e querem parar de perder venda por demora, despreparo ou falta de gente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className={`card ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--purple-soft)] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[var(--purple-deep)]" strokeWidth={2} />
                                    </div>
                                    <span className="mono text-[var(--ink-3)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
