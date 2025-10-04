// src/app/page.tsx (NOVA VERSÃO PARA O NEXT.JS)

'use client';

import React, { useState, useEffect } from 'react';


import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { StatsSection } from '@/components/LandingPage/StatsSection';
import { CompaniesSection } from '@/components/LandingPage/CompaniesSection';
import { FeaturesSection } from '@/components/LandingPage/FeaturesSection';
import { ComparisonSection } from '@/components/LandingPage/ComparisonSection';
import { HowItWorksSection } from '@/components/LandingPage/HowItWorksSection';
import { TestimonialsSection } from '@/components/LandingPage/TestimonialSection';
import { PricingSection } from '@/components/LandingPage/PricingSection';
import { UrgencySection } from '@/components/LandingPage/UrgencySection';
import { FaqSection } from '@/components/LandingPage/FaqSection';
import { CtaSection } from '@/components/LandingPage/CtaSection';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { FloatingWhatsAppButton } from '@/components/LandingPage/FloatingWhatsAppButton';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLoginClick = () => {
        window.location.href = 'https://app.weppy.com.br';
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-x-hidden">
            <LandingHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onLoginClick={handleLoginClick}
            />
            <main className="relative z-10">
                <FloatingWhatsAppButton />
                <HeroSection onLoginClick={handleLoginClick} />
                <StatsSection />
                <CompaniesSection />
                <FeaturesSection />
                <ComparisonSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <PricingSection />
                <UrgencySection onLoginClick={handleLoginClick} />
                <FaqSection />
                <CtaSection onLoginClick={handleLoginClick} />
            </main>
            <LandingFooter />
        </div>
    );
};