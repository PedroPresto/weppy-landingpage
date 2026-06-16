'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { howItWorks } from './LandingPageData';

export const HowItWorksSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="how-it-works" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Como funciona</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Como Automatizar seu WhatsApp.{' '}
                        <span className="text-[var(--orange)]">4 passos, menos de 15 minutos.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Você não precisa saber programar. Se sabe usar o WhatsApp, já sabe usar a Weppy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {howItWorks.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.step}
                                className={`card-glow ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--orange-soft)] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[var(--orange)]" strokeWidth={2} />
                                    </div>
                                    <span className="mono text-[var(--ink-3)]">
                                        passo {String(step.step).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
