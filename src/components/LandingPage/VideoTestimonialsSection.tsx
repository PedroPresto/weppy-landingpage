'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { VideoTestimonialCard } from './VideoTestimonialCard';
import { videoTestimonials } from './LandingPageData';

export const VideoTestimonialsSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="video-depoimentos" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Na voz de quem usa</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        De clínicas a lojas digitais.{' '}
                        <span className="text-[var(--orange)]">Resultado no rosto de quem usa.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Depoimentos reais de clientes que automatizaram o WhatsApp com a Weppy, cada um do seu segmento.
                    </p>
                </div>

                <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {videoTestimonials.map((v, index) => (
                        <div
                            key={v.name}
                            className={`shrink-0 w-[240px] sm:w-[260px] snap-start ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 90}ms` }}
                        >
                            <VideoTestimonialCard name={v.name} role={v.role} videoUrl={v.videoUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
