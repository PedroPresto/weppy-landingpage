'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Stethoscope, Play, Users, Building2 } from 'lucide-react';

const SEGMENTS = [
    {
        icon: Stethoscope,
        title: 'Clínicas e Saúde',
        description:
            'Clínicas médicas, odontológicas e estéticas que usam WhatsApp para agendamentos, confirmações e triagem de pacientes, sem deixar nenhuma mensagem sem resposta.',
        tags: ['Agendamentos', 'Confirmações', 'Triagem'],
    },
    {
        icon: Play,
        title: 'Produtores Digitais',
        description:
            'Criadores de cursos, ebooks e infoprodutos que captam leads via Meta Ads e vendem na Kiwify. A Weppy conecta o anúncio ao WhatsApp e conduz o funil até o fechamento automático.',
        tags: ['Meta Ads', 'Kiwify', 'Funis de Venda'],
    },
    {
        icon: Users,
        title: 'Equipes de Vendas B2B',
        description:
            'Times comerciais que precisam qualificar grandes volumes de leads sem aumentar headcount. Os agentes triagem, nutrem e encaminham apenas os leads quentes para os closers.',
        tags: ['Qualificação de Leads', 'SDR com IA', 'CRM'],
    },
    {
        icon: Building2,
        title: 'Grandes Empresas',
        description:
            'Para grupos empresariais e corporações, a Weppy desenvolve soluções white label sob medida: plataforma com a identidade visual, domínio e funcionalidades exclusivas do cliente.',
        tags: ['White Label', 'Corporativo', 'Sob Medida'],
    },
];

export const WhoUsesSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.15);

    return (
        <section id="who-uses" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-balance text-3xl md:text-5xl leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
                        Quem usa a{' '}
                        <span className="text-[var(--orange)]">Weppy</span>
                    </h2>
                    <p className="mt-4 text-lg text-[var(--ink-2)] max-w-2xl">
                        De clínicas a produtores digitais, de times de vendas a grandes corporações, a plataforma se adapta ao seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SEGMENTS.map((segment, i) => {
                        const Icon = segment.icon;
                        return (
                            <div
                                key={segment.title}
                                className={`card p-8 flex flex-col gap-5 transition-all duration-500 ${
                                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: 'rgba(255,89,2,0.1)' }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: 'var(--orange)' }} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>
                                        {segment.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                                        {segment.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {segment.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--line)]"
                                            style={{ color: 'var(--ink-3)' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
