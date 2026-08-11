import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, MessageCircle, Clock } from 'lucide-react';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';

/**
 * Página de obrigado do checkout da Kiwify.
 *
 * A conversão "Compra" do Google Ads é baseada em URL e dispara em
 * weppy.com.br/compra-aprovada. Como o clique no anúncio também acontece em
 * weppy.com.br, o cookie de atribuição já está no domínio certo quando o
 * cliente volta pra cá, coisa que não aconteceria se a conversão disparasse
 * dentro do pay.kiwify.com.br.
 */

export const metadata: Metadata = {
    title: 'Compra aprovada',
    description: 'Sua assinatura da Weppy foi confirmada. Veja os próximos passos para colocar a IA para atender.',
    // Página de pós-compra não deve ser indexada nem aparecer em busca.
    robots: { index: false, follow: false },
};

const SUPPORT_WHATSAPP =
    'https://wa.me/5561992817914?text=' +
    encodeURIComponent('Oi! Acabei de assinar a Weppy e quero configurar minha IA.');

const steps = [
    {
        icon: MessageCircle,
        title: 'Confira seu e-mail',
        description: 'Enviamos seus dados de acesso à plataforma. Se não achar, olhe no spam ou na aba promoções.',
    },
    {
        icon: Clock,
        title: 'Reserve 15 minutos',
        description: 'É o tempo de conectar seu WhatsApp, subir sua tabela de preços e deixar a IA pronta pra atender.',
    },
    {
        icon: Check,
        title: 'Chame a gente se travar',
        description: 'Nossa equipe configura junto com você, sem custo. É só chamar no WhatsApp.',
    },
];

export default function CompraAprovadaPage() {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
            <LandingHeader />

            <main className="container-editorial py-24 md:py-32">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366] flex items-center justify-center mb-8">
                        <Check className="w-9 h-9 text-white" strokeWidth={3} />
                    </div>

                    <p className="eyebrow mb-4">Pagamento confirmado</p>
                    <h1 className="text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] font-semibold">
                        Pronto. Agora é só{' '}
                        <span className="text-[var(--orange)]">colocar a IA pra trabalhar.</span>
                    </h1>
                    <p className="mt-5 text-lg text-[var(--ink-2)]">
                        Sua assinatura está ativa. Em poucos minutos você deixa tudo configurado e a IA já começa a
                        responder suas clientes.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.title}
                                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--line)]"
                            >
                                <Icon className="w-5 h-5 text-[var(--orange)] mb-4" />
                                <h2 className="font-semibold text-[var(--ink)] mb-2">{step.title}</h2>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
                    <a href={SUPPORT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-orange">
                        <MessageCircle className="w-4 h-4" />
                        <span>Configurar com a equipe</span>
                    </a>
                    <Link href="/" className="btn-ghost">
                        <span>Voltar para o site</span>
                    </Link>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
}
