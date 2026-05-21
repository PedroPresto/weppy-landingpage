'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const VslSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const videoUrl = 'https://www.youtube.com/embed/4PNlI2Svlho?rel=0&modestbranding=1&color=white';

    return (
        <section id="vsl" ref={ref} className="relative py-24 md:py-32">
            <div className="container-editorial">
                <div className="grid grid-cols-12 gap-8 mb-16">
                    <div className="col-span-12 md:col-span-3">
                        <span className="editorial-number block">II.</span>
                        <p className="eyebrow mt-3">Em movimento</p>
                    </div>
                    <div className={`col-span-12 md:col-span-9 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2
                            className="text-balance text-3xl md:text-5xl leading-[1.1] tracking-[-0.03em] text-[var(--ink)]"
                        >
                            Veja a <span className="text-[var(--orange)]">automação WhatsApp</span> da Weppy em ação: cada mensagem vira oportunidade.
                        </h2>
                    </div>
                </div>

                <div
                    className={`group relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[var(--line)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    {isVisible && (
                        <iframe
                            src={videoUrl}
                            title="Weppy Demonstração"
                            style={{ border: 'none' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />
                    )}
                    {/* Overlay that appears with the YouTube control bar to hide total duration */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ height: 40, width: 130, background: '#212121' }}
                    />
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <p className="text-sm text-[var(--ink-3)] max-w-md">
                        Demonstração gravada com uma conta real, sem cortes nem efeitos. Veja exatamente o que vai funcionar para você.
                    </p>
                    <a href="#pricing" className="btn-orange">
                        <span>Quero automatizar</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
