'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChatMockup } from './ChatMockup';
import { beforeAfterChats } from './LandingPageData';

export const ComparisonSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="results" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Antes e depois</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        O mesmo cliente. <span className="text-[var(--orange)]">Resultados opostos.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        A diferença entre perder a venda e fechar a venda mora no tempo da primeira resposta.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className={`${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-5 ring-1 ring-red-100">
                            ANTES · sem IA
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            Cliente espera. E vai pro concorrente.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Três mensagens sem resposta. Em 6 minutos, o lead morre.
                        </p>
                        <ChatMockup
                            contactName="Maria Mendes"
                            contactSubtitle="visto por último às 23:14"
                            steps={beforeAfterChats.before}
                            size="md"
                        />
                    </div>

                    <div className={`${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold mb-5 ring-1 ring-[var(--orange)]/20">
                            DEPOIS · com Weppy
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            IA responde em segundos. Pedido fechado.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Primeira resposta em &lt;1s. Cliente engaja, pedido sai.
                        </p>
                        <ChatMockup
                            contactName="Maria Mendes"
                            contactSubtitle="online · IA respondendo"
                            steps={beforeAfterChats.after}
                            size="md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
