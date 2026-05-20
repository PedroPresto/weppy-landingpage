'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChatMockup } from './ChatMockup';
import { heroChatSteps } from './LandingPageData';

interface HeroSectionProps {
    onLoginClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
    const heroRef = useScrollAnimation(0.05);
    void onLoginClick;

    return (
        <section
            ref={heroRef.ref}
            className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
        >
            {/* Glow de fundo */}
            <div
                aria-hidden="true"
                className="absolute -top-32 right-0 w-[44rem] h-[44rem] rounded-full opacity-50 pointer-events-none blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255,89,2,0.12) 0%, transparent 70%)',
                }}
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-32 w-[36rem] h-[36rem] rounded-full opacity-40 pointer-events-none blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(194,122,255,0.12) 0%, transparent 70%)',
                }}
            />

            <div className="container-editorial relative z-10">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-center">
                    {/* Coluna esquerda */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className={`inline-flex items-center gap-2 ${heroRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            <span className="badge-ai">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-deep)]" />
                                Assistente de IA para WhatsApp
                            </span>
                        </div>

                        <h1
                            className={`mt-6 text-balance text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.0] tracking-[-0.04em] text-[var(--ink)] font-semibold ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
                        >
                            <span className="text-[var(--orange)]">Venda</span> no piloto automático.
                            <br className="hidden md:block" />
                            <span className="text-[var(--orange)]"> Com IA</span> no WhatsApp.
                        </h1>

                        <p className={`mt-6 text-base md:text-lg text-[var(--ink-2)] leading-relaxed max-w-xl ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                            A Weppy conecta uma IA, treinada com o seu negócio, direto ao WhatsApp Business.
                            Ela qualifica, responde e vende 24h por dia. Configure sem conhecimento técnico em menos de 15 min.
                        </p>

                        <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                            <a href="#pricing" className="btn-orange group">
                                <span>Começar agora</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                            <a href="#vsl" className="btn-ghost">
                                <span>Ver demonstração</span>
                            </a>
                        </div>

                        <div className={`mt-10 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--ink-2)] ${heroRef.isVisible ? 'animate-fade-in animation-delay-700' : 'opacity-0'}`}>
                            <span className="badge-online">
                                +2.300 negócios automatizados
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                <span className="font-semibold text-[var(--ink)]">4.9</span>
                                <span className="text-[var(--ink-3)]">/ 5 satisfação</span>
                            </span>
                            <span className="mono text-[var(--ink-3)]">latência &lt; 800ms</span>
                        </div>
                    </div>

                    {/* Coluna direita — mockup */}
                    <div className={`col-span-12 lg:col-span-5 flex justify-center lg:justify-end ${heroRef.isVisible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                        <ChatMockup
                            contactName="Clínica Maringá"
                            contactSubtitle="online · IA respondendo"
                            steps={heroChatSteps}
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
