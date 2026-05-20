'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const VslSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const videoId = '12c49cb7-89af-40cf-9d83-89dd3f031e35';
    const videoUrl = `https://player-vz-3efb57d2-c4e.tv.pandavideo.com.br/embed/?v=${videoId}&autoplay=true`;

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
                            Em <span className="text-[var(--orange)]">dois minutos</span>, entenda como a Weppy transforma cada mensagem em oportunidade.
                        </h2>
                    </div>
                </div>

                <div
                    className={`relative w-full aspect-video bg-[var(--ink)] overflow-hidden border border-[var(--line-strong)] transition-all duration-700 ${
                        isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
                    }`}
                >
                    {isVisible && (
                        <iframe
                            src={videoUrl}
                            title="Weppy Demonstração"
                            style={{ border: 'none' }}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />
                    )}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <p className="text-sm text-[var(--ink-3)] max-w-md">
                        Demonstração gravada com uma conta real, sem cortes nem efeitos. Veja exatamente o que vai funcionar para você.
                    </p>
                    <a href="#pricing" className="btn-primary">
                        <span>Quero automatizar</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
