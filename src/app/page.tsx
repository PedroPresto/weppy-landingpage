// src/app/page.tsx (NOVA VERSÃO PARA O NEXT.JS)

'use client';

import React, { useState, useEffect } from 'react';


import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { VslSection } from '@/components/LandingPage/VslSection';
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

            <div className="absolute top-0 left-0 h-full w-full overflow-hidden -z-10">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/20 rounded-full filter blur-3xl animate-blob opacity-50"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-red-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-50"></div>
            </div>

            <LandingHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onLoginClick={handleLoginClick}
            />
            <main className="relative z-10">
                <FloatingWhatsAppButton />
                <HeroSection onLoginClick={handleLoginClick} />
                <CompaniesSection />
                <VslSection />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <ComparisonSection />
                <PricingSection />
                <UrgencySection onLoginClick={handleLoginClick} />
                <FaqSection />
                <CtaSection onLoginClick={handleLoginClick} />
            </main>
            <LandingFooter />
        </div>
    );
};