'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { conversionFlow, conversionBenefits } from './LandingPageData';

export const ConversionTrackingSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="tracking" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        Rastreamento de Conversões
                    </p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Saiba exatamente qual anúncio gerou{' '}
                        <span className="text-[var(--orange)]">cada venda no WhatsApp</span>.
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        O WhatsApp sempre quebrou a sua atribuição: o anúncio gera a conversa, mas você nunca soube quais viraram venda. A Weppy fecha esse ciclo, cada conversão fechada pela IA volta para o seu Pixel da Meta, otimizando suas campanhas com dados reais.
                    </p>
                </div>

                {/* Fluxo de 4 passos */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {conversionFlow.map((stepItem, index) => {
                        const Icon = stepItem.icon;
                        const isLast = index === conversionFlow.length - 1;
                        return (
                            <div
                                key={stepItem.title}
                                className={`relative card ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--purple-soft)] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[var(--purple-deep)]" strokeWidth={2} />
                                    </div>
                                    <span className="mono text-[var(--ink-3)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-base font-semibold text-[var(--ink)] mb-2 leading-tight">
                                    {stepItem.title}
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                                    {stepItem.description}
                                </p>
                                {!isLast && (
                                    <ArrowRight
                                        className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-5 h-5 text-[var(--ink-3)]"
                                        strokeWidth={2}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Benefícios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {conversionBenefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.text}
                                className={`flex items-start gap-3 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <Icon className="w-5 h-5 text-[var(--orange)] shrink-0 mt-0.5" strokeWidth={2} />
                                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                                    {benefit.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
