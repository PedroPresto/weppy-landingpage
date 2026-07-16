import React from 'react';
import type { Metadata } from 'next';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { FloatingWhatsAppButton } from '@/components/LandingPage/FloatingWhatsAppButton';
import { PurchaseToastController } from '@/components/LandingPage/PurchaseToastController';
import {
    EsteticaHero,
    EsteticaScene,
    EsteticaHowItWorks,
    EsteticaBenefits,
    EsteticaTestimonials,
    EsteticaPricing,
    EsteticaLeadCapture,
    EsteticaClose,
} from '@/components/LandingPage/estetica/EsteticaSections';
import { esteticaFaqs } from '@/components/LandingPage/estetica/EsteticaData';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Automação de WhatsApp para Beleza · IA que Agenda por Você',
    description:
        'Cabeleireira, manicure, lash, sobrancelha e estética: a IA da Weppy responde suas clientes na hora, passa valores e agenda no WhatsApp enquanto você atende. Setup em 15 min, sem chip novo.',
    alternates: { canonical: '/estetica' },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: `${SITE_URL}/estetica`,
        siteName: 'Weppy',
        title: 'Automação de WhatsApp para Beleza · IA que Agenda por Você | Weppy',
        description:
            'Enquanto você atende uma cliente, a IA agenda a próxima. A Weppy responde na hora, passa valores e fecha horários no seu WhatsApp por você. Setup em 15 min.',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Weppy para Beleza' }],
    },
};

/* ── JSON-LD: FAQPage (rich snippets no Google) ── */
const FAQ_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: esteticaFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};

/* ── JSON-LD: BreadcrumbList ── */
const BREADCRUMB_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Estética', item: `${SITE_URL}/estetica` },
    ],
};

export default function EsteticaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
            />

            <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] relative">
                <PurchaseToastController />
                <FloatingWhatsAppButton />

                <LandingHeader />
                <main>
                    <EsteticaHero />
                    <EsteticaScene />
                    <EsteticaHowItWorks />
                    <EsteticaBenefits />
                    <EsteticaTestimonials />
                    <EsteticaPricing />
                    <EsteticaLeadCapture />
                    <EsteticaClose />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
