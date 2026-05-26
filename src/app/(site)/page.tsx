import React from 'react';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { CompaniesSection } from '@/components/LandingPage/CompaniesSection';
import { VslSection } from '@/components/LandingPage/VslSection';
import { HowItWorksSection } from '@/components/LandingPage/HowItWorksSection';
import { FeaturesSection } from '@/components/LandingPage/FeaturesSection';
import { ComparisonSection } from '@/components/LandingPage/ComparisonSection';
import { TestimonialsSection } from '@/components/LandingPage/TestimonialSection';
import { PricingSection } from '@/components/LandingPage/PricingSection';
import { WhoUsesSection } from '@/components/LandingPage/WhoUsesSection';
import { CloseSection } from '@/components/LandingPage/CloseSection';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { FloatingWhatsAppButton } from '@/components/LandingPage/FloatingWhatsAppButton';
import { PurchaseToastController } from '@/components/LandingPage/PurchaseToastController';
import { faqs } from '@/components/LandingPage/LandingPageData';
import { SITE_URL } from '@/lib/seo';

/* ── JSON-LD: FAQPage (rich snippets no Google) ── */
const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

/* ── JSON-LD: BreadcrumbList ── */
const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    ],
};

export default function Home() {
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
                    <HeroSection />
                    <CompaniesSection />
                    <FeaturesSection />
                    <HowItWorksSection />
                    <VslSection />
                    <WhoUsesSection />
                    <ComparisonSection />
                    <TestimonialsSection />
                    <PricingSection />
                    <CloseSection />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
