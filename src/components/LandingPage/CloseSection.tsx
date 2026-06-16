'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { faqs, urgencyFeatures } from './LandingPageData';

export const CloseSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section id="close" ref={ref.ref} className="relative py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)] overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] rounded-full opacity-30 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,89,2,0.18) 0%, transparent 70%)' }}
            />

            <div className="container-editorial relative z-10">
                {/* Bloco de urgência */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
                    <div className={`lg:col-span-7 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="eyebrow mb-4">Última chamada</p>
                        <h2 className="text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold">
                            Cada minuto sem IA no WhatsApp é{' '}
                            <span className="text-[var(--orange)]">uma venda indo embora.</span>
                        </h2>
                        <p className="mt-5 text-lg text-[var(--ink-2)] max-w-xl">
                            Setup em 15 minutos. Garantia integral de 7 dias. Se não der resultado, devolvemos cada centavo.
                        </p>
                        <a href="#pricing" className="btn-orange mt-8 group">
                            <span>Ver planos e começar</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    <div className={`lg:col-span-5 ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <ul className="space-y-3">
                            {urgencyFeatures.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    <div className="lg:col-span-4">
                        <p className="eyebrow mb-4">Dúvidas frequentes</p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] leading-tight tracking-[-0.02em]">
                            Perguntas Frequentes sobre Automação de WhatsApp
                        </h3>
                        <p className="mt-4 text-[var(--ink-2)] leading-relaxed">
                            Não achou sua dúvida? Fala com a gente direto no WhatsApp.
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-2">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[var(--line)]">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:bg-[var(--surface-2)] -mx-3 px-3 rounded-lg transition-colors"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-[var(--ink)] font-semibold text-base md:text-[1.0625rem] leading-tight">
                                            {faq.question}
                                        </span>
                                        {isOpen
                                            ? <Minus className="w-5 h-5 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                                            : <Plus className="w-5 h-5 text-[var(--ink-3)] flex-shrink-0 mt-0.5" />}
                                    </button>
                                    {isOpen && (
                                        <div className="pb-5 -mt-1 text-[var(--ink-2)] leading-relaxed text-[0.9375rem] animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA final */}
                <div className={`relative rounded-3xl bg-gradient-to-br from-[var(--orange)] to-[#FF7E3D] p-10 md:p-16 text-center overflow-hidden ${ref.isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 80% 20%, rgba(194,122,255,0.6) 0%, transparent 50%)',
                        }}
                    />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-5">
                            Comece hoje. Veja resultado esta semana.
                        </h2>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                            7 dias de garantia. Se a IA não vender pra você, devolvemos cada centavo. Sem perguntas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="https://app.weppy.com.br"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--orange)] font-semibold hover:bg-white/90 transition-all duration-300 group"
                            >
                                <span>Ver demo</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-white/90 text-sm">
                            <div className="flex flex-col items-center gap-1.5">
                                <Zap className="w-5 h-5" />
                                <span>Setup 15 min</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Shield className="w-5 h-5" />
                                <span>7 dias garantia</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Clock className="w-5 h-5" />
                                <span>Cancele quando quiser</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
