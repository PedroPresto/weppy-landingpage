'use client';

import React from 'react';
import { Paperclip, FileText, Download } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { knowledgeSources, knowledgeBenefits, knowledgeDemo } from './LandingPageData';

export const KnowledgeBaseSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="knowledge" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Coluna esquerda — texto */}
                    <div>
                        <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            Base de Conhecimento
                        </p>
                        <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                            A IA que conhece o seu negócio{' '}
                            <span className="text-[var(--orange)]">de cor</span>.
                        </h2>
                        <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                            Suba seus PDFs, FAQs, catálogos e tabelas de preço. A Weppy aprende tudo sobre o seu negócio e responde cada cliente com as suas próprias informações no seu tom, sem inventar nada.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {knowledgeBenefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <li
                                        key={benefit.text}
                                        className={`flex items-start gap-3 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${300 + index * 80}ms` }}
                                    >
                                        <Icon className="w-5 h-5 text-[var(--orange)] shrink-0 mt-0.5" strokeWidth={2} />
                                        <span className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                                            {benefit.text}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Coluna direita — fontes + demo */}
                    <div className={`${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        {/* Card de fontes */}
                        <div className="card">
                            <p className="mono text-[var(--ink-3)] mb-4">FONTES TREINADAS</p>
                            <div className="grid grid-cols-2 gap-3">
                                {knowledgeSources.map((src) => {
                                    const Icon = src.icon;
                                    return (
                                        <div
                                            key={src.label}
                                            className="flex items-center gap-3 rounded-xl border border-[var(--line)] p-3"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[var(--purple-soft)] flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4 text-[var(--purple-deep)]" strokeWidth={2} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-[var(--ink)] leading-tight truncate">
                                                    {src.label}
                                                </p>
                                                <p className="text-xs text-[var(--ink-3)] leading-tight truncate">
                                                    {src.hint}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Destaque — treinar com o próprio WhatsApp (.txt) */}
                        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[var(--orange-soft)] ring-1 ring-[var(--orange)]/20 p-4">
                            <div className="w-9 h-9 rounded-lg bg-[var(--surface)] flex items-center justify-center shrink-0">
                                <Download className="w-4 h-4 text-[var(--orange)]" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[var(--ink)] leading-tight">
                                    Treine com o seu próprio WhatsApp
                                </p>
                                <p className="mt-1 text-xs text-[var(--ink-2)] leading-relaxed">
                                    Exporte o histórico das suas conversas em <span className="font-semibold text-[var(--ink)]">.txt</span> direto do WhatsApp e suba na Weppy. A IA aprende com os seus atendimentos reais — do seu jeito de vender.
                                </p>
                            </div>
                        </div>

                        {/* Mini demo pergunta -> resposta */}
                        <div className="card mt-5">
                            <p className="mono text-[var(--ink-3)] mb-4">NA PRÁTICA</p>

                            <div className="flex justify-end mb-3">
                                <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--purple-soft)] px-4 py-2.5">
                                    <p className="text-sm text-[var(--ink)]">{knowledgeDemo.question}</p>
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-[var(--line)] px-4 py-2.5">
                                    <p className="text-sm text-[var(--ink)] leading-relaxed">{knowledgeDemo.answer}</p>
                                    <div className="mt-2.5 flex items-center gap-1.5 text-[var(--ink-3)]">
                                        <Paperclip className="w-3.5 h-3.5" strokeWidth={2} />
                                        <FileText className="w-3.5 h-3.5" strokeWidth={2} />
                                        <span className="text-xs">{knowledgeDemo.source}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
