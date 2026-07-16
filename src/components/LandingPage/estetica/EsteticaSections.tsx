'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Check, Plus, Minus, Clock, Shield, Zap, MessageCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { ChatMockup } from '../ChatMockup';
import { VideoTestimonialCard } from '../VideoTestimonialCard';
import { plans } from '../LandingPageData';
import {
    esteticaHeroChat,
    esteticaScene,
    esteticaBenefits,
    esteticaSteps,
    esteticaTestimonials,
    esteticaVideo,
    esteticaFaqs,
    esteticaUrgencyFeatures,
    esteticaDemo,
    LANDING_LEADS_ENDPOINT,
} from './EsteticaData';

/* ========================= HERO ========================= */
export const EsteticaHero: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section ref={ref.ref} className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute -top-32 right-0 w-[44rem] h-[44rem] rounded-full opacity-50 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,89,2,0.12) 0%, transparent 70%)' }}
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-32 w-[36rem] h-[36rem] rounded-full opacity-40 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(194,122,255,0.12) 0%, transparent 70%)' }}
            />

            <div className="container-editorial relative z-10">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <div className={`inline-flex items-center gap-2 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            <span className="badge-ai">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-deep)]" />
                                Assistente de IA para WhatsApp · Beleza
                            </span>
                        </div>

                        <h1
                            className={`mt-6 text-balance text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.0] tracking-[-0.04em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
                        >
                            Enquanto você atende uma,
                            <br className="hidden md:block" />
                            <span className="text-[var(--orange)]">a IA agenda a próxima.</span>
                        </h1>

                        <p className={`mt-6 text-base md:text-lg text-[var(--ink-2)] leading-relaxed max-w-xl ${ref.isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                            Enquanto você atende, um assistente de IA responde cada cliente na hora, tira dúvidas, passa
                            valores e agenda direto no seu WhatsApp. Você não perde mais nenhuma cliente por estar ocupada
                            fazendo o que ama. Configura em 15 minutos, sem entender nada de tecnologia.
                        </p>

                        <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${ref.isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                            <a href="#pricing" className="btn-orange group">
                                <span>Encher minha agenda</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href={esteticaDemo.waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost group"
                            >
                                <MessageCircle className="w-4 h-4 text-[var(--wa-green-deep,#25D366)]" />
                                <span>Fale com a IA agora</span>
                            </a>
                        </div>

                        <div className={`mt-10 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in animation-delay-700' : 'opacity-0'}`}>
                            <span className="badge-online">+2.300 negócios automatizados</span>
                            <span className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                <span className="font-semibold text-[var(--ink)]">4.9</span>
                                <span className="text-[var(--ink-3)]">/ 5 satisfação</span>
                            </span>
                            <span className="mono text-[var(--ink-3)]">responde em &lt; 1 segundo</span>
                        </div>
                    </div>

                    <div className={`col-span-12 lg:col-span-5 flex justify-center lg:justify-end ${ref.isVisible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                        <ChatMockup
                            contactName="Marina Hair & Beauty"
                            contactSubtitle="online · IA respondendo"
                            steps={esteticaHeroChat}
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ===================== A CENA (antes/depois) ===================== */
export const EsteticaScene: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="results" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Você conhece essa cena</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Cliente na cadeira. Celular vibrando.{' '}
                        <span className="text-[var(--orange)]">Lead escapando.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Não é culpa sua. Você estava trabalhando. Mas a cliente que espera 2 horas some, e a que some não volta.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className={`${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-5 ring-1 ring-red-100">
                            ANTES · sem IA
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            Você responde 2 horas depois. Ela já fechou com outra.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Perdi a conta de quantas clientes sumiram porque respondi tarde.
                        </p>
                        <ChatMockup
                            contactName="Bruna Alves"
                            contactSubtitle="visto por último às 20:03"
                            steps={esteticaScene.before}
                            size="md"
                        />
                    </div>

                    <div className={`${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold mb-5 ring-1 ring-[var(--orange)]/20">
                            DEPOIS · com Weppy
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            A IA responde na hora. Horário fechado.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Agora respondem na hora, mesmo com as minhas mãos ocupadas.
                        </p>
                        <ChatMockup
                            contactName="Bruna Alves"
                            contactSubtitle="online · IA respondendo"
                            steps={esteticaScene.after}
                            size="md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ===================== COMO FUNCIONA ===================== */
export const EsteticaHowItWorks: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="how-it-works" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Simples de verdade</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Se você sabe usar o WhatsApp,{' '}
                        <span className="text-[var(--orange)]">você já sabe usar a Weppy.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Sem programação, sem site, sem equipe de TI. Você deixa tudo pronto em menos de 15 minutos e a IA
                        começa a atender no mesmo dia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {esteticaSteps.map((step, index) => {
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
                                    <span className="mono text-[var(--ink-3)]">passo {String(step.step).padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">{step.title}</h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ===================== AS TRÊS DORES ===================== */
export const EsteticaBenefits: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="features" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>O que muda na sua semana</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Três coisas que roubam seu faturamento.{' '}
                        <span className="text-[var(--orange)]">Resolvidas.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {esteticaBenefits.map((b, index) => {
                        const Icon = b.icon;
                        return (
                            <div
                                key={b.id}
                                className={`card ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-[var(--orange-soft)] flex items-center justify-center mb-5">
                                    <Icon className="w-5 h-5 text-[var(--orange)]" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">{b.title}</h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">{b.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ===================== PROVA SOCIAL ===================== */
export const EsteticaTestimonials: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="testimonials" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Quem já fez isso</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Profissionais de beleza que{' '}
                        <span className="text-[var(--orange)]">pararam de ver o dinheiro escapar.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-6 lg:gap-8 items-stretch">
                    {/* Depoimento em vídeo (cliente real) */}
                    <div className={`mx-auto w-full max-w-[320px] lg:max-w-none ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <VideoTestimonialCard
                            name={esteticaVideo.name}
                            role={esteticaVideo.role}
                            videoUrl={esteticaVideo.videoUrl}
                            className="h-full"
                        />
                    </div>

                    {/* Cards de texto */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {esteticaTestimonials.map((t, index) => (
                            <div
                                key={t.name}
                                className={`card flex flex-col ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                    ))}
                                </div>
                                <p className="text-sm md:text-[0.9375rem] text-[var(--ink)] leading-relaxed mb-6 flex-1">
                                    &ldquo;{t.content}&rdquo;
                                </p>
                                <div className="pt-5 border-t border-[var(--line)] flex items-center gap-3">
                                    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--orange-soft)]">
                                        <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-[var(--ink)] leading-tight">{t.name}</p>
                                        <p className="text-xs text-[var(--ink-3)] leading-tight mt-0.5 truncate">{t.role}</p>
                                    </div>
                                </div>
                                <div className="mt-3 inline-flex items-center self-start px-2.5 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold">
                                    {t.stats}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ===================== PREÇO ===================== */
export const EsteticaPricing: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="pricing" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Planos</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Menos de R$1 por dia.{' '}
                        <span className="text-[var(--orange)]">Pra nunca mais perder uma cliente.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Uma cliente recuperada já paga a Weppy do mês inteiro. E ela recupera várias, todo dia, enquanto você atende.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start max-w-2xl mx-auto lg:max-w-3xl">
                    {plans.map((plan, index) => {
                        const isPopular = plan.popular;
                        return (
                            <div
                                key={plan.id}
                                className={`relative p-8 md:p-10 rounded-2xl transition-all duration-500
                                    ${isPopular
                                        ? 'bg-[var(--surface)] ring-2 ring-[var(--orange)] shadow-[0_24px_60px_-20px_rgba(255,89,2,0.25)]'
                                        : 'bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-strong)]'}
                                    ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                                `}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="badge-new px-3 py-1 text-[0.6875rem]">Mais escolhido</span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[var(--ink)] mb-1">{plan.name}</h3>
                                    <p className="text-sm text-[var(--ink-2)] leading-relaxed min-h-[3rem]">{plan.description}</p>
                                </div>

                                <div className="pb-6 border-b border-[var(--line)] mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.04em]">{plan.price}</span>
                                        <span className="text-[var(--ink-3)] text-base">{plan.period}</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-3 text-xs">
                                        <span className="line-through text-[var(--ink-3)]">{plan.originalPrice}</span>
                                        <span className="badge-new px-2 py-0.5">{plan.savings}</span>
                                    </div>
                                    <p className="mono text-[var(--ink-3)] mt-3">
                                        {plan.id === 'mensal' ? 'Total R$ 97 / mês' : 'R$ 300 / ano · menos de R$ 1/dia'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--ink-2)]">
                                            <Check className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.checkoutUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isPopular ? 'btn-orange' : 'btn-ghost'} w-full group`}
                                >
                                    <span>{isPopular ? 'Começar e economizar 80%' : 'Começar agora'}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-12 text-center text-sm text-[var(--ink-3)]">
                    Pagamento via Pix ou cartão · Garantia integral de 7 dias · Setup em 15 minutos
                </p>
            </div>
        </section>
    );
};

/* ===================== FECHAMENTO (urgência + FAQ + CTA) ===================== */
export const EsteticaClose: React.FC = () => {
    const ref = useScrollAnimation(0.05);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section id="close" ref={ref.ref} className="relative py-24 md:py-32 bg-[var(--bg)] overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] rounded-full opacity-30 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,89,2,0.18) 0%, transparent 70%)' }}
            />

            <div className="container-editorial relative z-10">
                {/* Urgência */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
                    <div className={`lg:col-span-7 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="eyebrow mb-4">Última chamada</p>
                        <h2 className="text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold">
                            Sua próxima cliente{' '}
                            <span className="text-[var(--orange)]">está te chamando agora.</span>
                        </h2>
                        <p className="mt-5 text-lg text-[var(--ink-2)] max-w-xl">
                            A pergunta é só uma: você vai responder na hora ou daqui a duas horas? Configure sua IA em 15
                            minutos e volte a atender sabendo que nenhuma mensagem fica sem resposta.
                        </p>
                        <a href="#pricing" className="btn-orange mt-8 group">
                            <span>Encher minha agenda</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    <div className={`lg:col-span-5 ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <ul className="space-y-3">
                            {esteticaUrgencyFeatures.map((item, i) => (
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
                            Tudo que você precisa saber antes de começar
                        </h3>
                        <p className="mt-4 text-[var(--ink-2)] leading-relaxed">
                            Não achou sua dúvida? Fala com a gente direto no WhatsApp.
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-2">
                        {esteticaFaqs.map((faq, i) => {
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
                        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(194,122,255,0.6) 0%, transparent 50%)' }}
                    />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-5">
                            Comece hoje. Veja a agenda encher esta semana.
                        </h2>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                            7 dias de garantia. Se a IA não vender pra você, devolvemos cada centavo. Sem perguntas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--orange)] font-semibold hover:bg-white/90 transition-all duration-300 group"
                            >
                                <span>Encher minha agenda</span>
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

/* ===================== CAPTURA DE LEAD (a IA te chama) ===================== */
export const EsteticaLeadCapture: React.FC = () => {
    const ref = useScrollAnimation(0.1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const digits = phone.replace(/\D/g, '');
        if (digits.length < 10) {
            setStatus('error');
            setErrorMsg('Digite seu WhatsApp com DDD, ex: 61 99999-9999.');
            return;
        }

        setStatus('loading');
        try {
            const form = e.currentTarget;
            const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value || '';
            const res = await fetch(LANDING_LEADS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone: digits, source: '/estetica', website: honeypot }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.message || 'Não conseguimos enviar agora.');
            }
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : 'Não conseguimos enviar agora. Tente de novo.');
        }
    };

    return (
        <section id="ia-te-chama" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={`${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="eyebrow mb-4">Prove antes de assinar</p>
                        <h2 className="text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold">
                            Ainda na dúvida?{' '}
                            <span className="text-[var(--orange)]">Deixa que a IA te chama.</span>
                        </h2>
                        <p className="mt-5 text-lg text-[var(--ink-2)] max-w-xl">
                            Deixe seu WhatsApp e receba uma mensagem da nossa IA em instantes. Converse com ela como se
                            fosse sua cliente: pergunte preço, peça horário, teste à vontade. É exatamente assim que ela
                            vai atender as suas clientes.
                        </p>
                        <p className="mt-4 text-sm text-[var(--ink-3)]">
                            Sem compromisso e sem spam: é uma conversa de demonstração, você para quando quiser.
                        </p>
                    </div>

                    <div className={`${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        {status === 'success' ? (
                            <div className="p-8 md:p-10 rounded-2xl bg-[var(--surface)] ring-2 ring-[#25D366] text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-[#25D366] flex items-center justify-center mb-5">
                                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                                    Prontinho! A IA já vai te chamar 💬
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                                    Abre seu WhatsApp: a mensagem chega em instantes. Responda e converse com ela à vontade.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="p-8 md:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_24px_60px_-20px_rgba(255,89,2,0.15)]"
                            >
                                <label className="block text-sm font-medium text-[var(--ink)] mb-1.5" htmlFor="lead-name">
                                    Seu nome <span className="text-[var(--ink-3)] font-normal">(opcional)</span>
                                </label>
                                <input
                                    id="lead-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Como a IA deve te chamar?"
                                    className="w-full mb-4 px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[var(--orange)] transition-colors"
                                />

                                <label className="block text-sm font-medium text-[var(--ink)] mb-1.5" htmlFor="lead-phone">
                                    Seu WhatsApp
                                </label>
                                <input
                                    id="lead-phone"
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="(61) 99999-9999"
                                    className="w-full mb-2 px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[var(--orange)] transition-colors"
                                />

                                {/* Honeypot anti-bot: humanos não veem este campo */}
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hidden"
                                />

                                {status === 'error' && (
                                    <p className="text-sm text-red-500 mb-2">{errorMsg}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-orange w-full group mt-3 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <MessageCircle className="w-4 h-4" />
                                    )}
                                    <span>{status === 'loading' ? 'Enviando...' : 'Quero que a IA me chame'}</span>
                                </button>

                                <p className="mt-4 text-center text-xs text-[var(--ink-3)]">
                                    Ou, se preferir,{' '}
                                    <a
                                        href={esteticaDemo.waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-[var(--ink)] transition-colors"
                                    >
                                        chame a IA você mesma agora
                                    </a>
                                    .
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
