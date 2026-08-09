'use client';

import React from 'react';
import { ArrowRight, Star, Users, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { KiwifyLogo, KIWIFY_GREEN, KIWIFY_GREEN_DEEP } from './KiwifyLogo';

/** Verde oficial da Kiwify, o checkout usado nos planos. Dá o tom da seção. */
const GREEN = KIWIFY_GREEN;
const GREEN_DEEP = KIWIFY_GREEN_DEEP;

const proofs = [
    { icon: Users, value: '+2.300', label: 'negócios automatizados' },
    { icon: Star, value: '4.9', label: 'de 5 em satisfação' },
    { icon: ShieldCheck, value: '7 dias', label: 'de garantia integral' },
];

/** Medalha de premiação: raios, anéis e o #1 no centro. */
const Medal: React.FC = () => (
    <svg viewBox="0 0 240 240" className="w-full h-full" role="img" aria-label="Primeiro lugar em vendas">
        <defs>
            <radialGradient id="kwMedalCore" cx="35%" cy="28%">
                <stop offset="0%" stopColor="#0FD183" />
                <stop offset="60%" stopColor={GREEN} />
                <stop offset="100%" stopColor={GREEN_DEEP} />
            </radialGradient>
            <linearGradient id="kwRibbon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF7A33" />
                <stop offset="100%" stopColor="#FF5902" />
            </linearGradient>
        </defs>

        {/* Raios */}
        <g opacity="0.5">
            {Array.from({ length: 28 }).map((_, i) => (
                <rect
                    key={i}
                    x="119"
                    y="6"
                    width="2"
                    height="26"
                    rx="1"
                    fill={GREEN}
                    opacity={i % 2 === 0 ? 0.9 : 0.35}
                    transform={`rotate(${(360 / 28) * i} 120 120)`}
                />
            ))}
        </g>

        {/* Anéis */}
        <circle cx="120" cy="120" r="86" fill="none" stroke={GREEN} strokeWidth="1" opacity="0.35" />
        <circle
            cx="120"
            cy="120"
            r="78"
            fill="none"
            stroke={GREEN}
            strokeWidth="1.5"
            strokeDasharray="3 6"
            opacity="0.55"
        />

        {/* Disco */}
        <circle cx="120" cy="120" r="66" fill="url(#kwMedalCore)" />
        <circle cx="120" cy="120" r="66" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.35" />
        <circle cx="120" cy="120" r="56" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.22" />
        {/* Brilho */}
        <ellipse cx="98" cy="92" rx="30" ry="18" fill="#ffffff" opacity="0.16" transform="rotate(-28 98 92)" />

        <text
            x="120"
            y="139"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="56"
            fontWeight="700"
            letterSpacing="-3"
        >
            #1
        </text>

        {/* Fita */}
        <g>
            <rect x="52" y="180" width="136" height="30" rx="4" fill="url(#kwRibbon)" />
            <path d="M52 180 L38 188 L52 196 Z" fill={GREEN_DEEP} opacity="0.9" />
            <path d="M188 180 L202 188 L188 196 Z" fill={GREEN_DEEP} opacity="0.9" />
            <text
                x="120"
                y="200"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="700"
                letterSpacing="2.4"
            >
                TOP EM VENDAS
            </text>
        </g>
    </svg>
);

/**
 * Faixa de autoridade logo acima dos planos. O verde é o da Kiwify de propósito,
 * é o que faz a seção ler como "ranking da Kiwify" sem precisar carimbar a marca
 * deles como se fosse um selo emitido por eles.
 */
export const KiwifyRankSection: React.FC = () => {
    const ref = useScrollAnimation(0.15);

    return (
        <section
            id="ranking"
            ref={ref.ref}
            className="relative py-20 md:py-28 bg-[var(--surface-2)] border-y border-[var(--line)] overflow-hidden"
        >
            {/* Fio verde no topo, assinatura da seção */}
            <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, transparent, ${GREEN} 30%, ${GREEN} 70%, transparent)` }}
            />
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full opacity-50 pointer-events-none blur-3xl"
                style={{ background: `radial-gradient(circle, ${GREEN}26 0%, transparent 70%)` }}
            />

            <div className="container-editorial relative z-10">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-16 items-center">
                    {/* Medalha */}
                    <div className={`col-span-12 lg:col-span-4 flex flex-col items-center ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="w-[15rem] h-[15rem] md:w-[17rem] md:h-[17rem] drop-shadow-[0_24px_48px_rgba(2,177,104,0.28)]">
                            <Medal />
                        </div>
                        <p className="mt-5 flex items-center gap-2 text-xs text-[var(--ink-3)]">
                            assinatura via
                            <KiwifyLogo className="w-4 h-4 rounded-[3px]" />
                            <span className="font-semibold text-[var(--ink-2)]">Kiwify</span>
                        </p>
                    </div>

                    {/* Claim */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className={`flex flex-wrap items-center gap-3 mb-5 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            <span
                                className="inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
                                style={{ background: GREEN }}
                            >
                                <span
                                    className="grid place-items-center w-5 h-5 rounded-full bg-white"
                                    style={{ color: GREEN }}
                                >
                                    <KiwifyLogo variant="glyph" className="w-3.5 h-3.5" />
                                </span>
                                Ranking Kiwify
                            </span>
                            <span className="flex items-center gap-1">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--orange)] text-[var(--orange)]" />
                                ))}
                                <span className="ml-1.5 text-xs font-semibold text-[var(--ink-2)]">4.9 de 5</span>
                            </span>
                        </div>

                        <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                            A plataforma de automação{' '}
                            <span style={{ color: GREEN }}>#1 em vendas na Kiwify</span>.
                        </h2>

                        <p className={`mt-5 text-base md:text-lg text-[var(--ink-2)] max-w-2xl ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                            Milhares de negócios colocaram a IA para atender, viram a agenda encher e voltaram para
                            renovar.
                        </p>

                        <div className={`mt-9 grid grid-cols-1 sm:grid-cols-3 ${ref.isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
                            {proofs.map((proof, index) => {
                                const Icon = proof.icon;
                                return (
                                    <div
                                        key={proof.label}
                                        className={`flex items-start gap-3 py-4 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0
                                border-t sm:border-t-0 sm:border-l border-[var(--line)] ${index === 0 ? 'sm:border-l-0' : ''}`}
                                    >
                                        <Icon className="w-5 h-5 shrink-0 mt-1" style={{ color: GREEN }} strokeWidth={2} />
                                        <div>
                                            <p className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] leading-none">
                                                {proof.value}
                                            </p>
                                            <p className="mt-1.5 text-xs text-[var(--ink-3)] leading-snug">{proof.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={`mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center ${ref.isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                            <a href="#pricing" className="btn-orange group shrink-0">
                                <span>Ver os planos</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>

                            {/* Ocupa a sobra da linha e centraliza a barra dentro dela */}
                            <div className="w-full sm:flex-1 sm:flex sm:justify-center">
                                <div
                                    className="flex w-fit flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border px-4 py-3"
                                    style={{ borderColor: `${GREEN}40`, background: `${GREEN}0F` }}
                                >
                                    <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: GREEN }} strokeWidth={2.2} />
                                    <span className="text-sm text-[var(--ink-2)]">
                                        Pagamento processado pela{' '}
                                        <span className="font-semibold text-[var(--ink)]">Kiwify</span>
                                    </span>
                                    <span aria-hidden="true" className="hidden sm:inline text-[var(--ink-3)]">·</span>
                                    <span className="text-sm font-semibold text-[var(--ink)]">Garantia de 7 dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
