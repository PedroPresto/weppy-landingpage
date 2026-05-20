'use client';

import React, { useState } from 'react';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { CompaniesSection } from '@/components/LandingPage/CompaniesSection';
import { VslSection } from '@/components/LandingPage/VslSection';
import { HowItWorksSection } from '@/components/LandingPage/HowItWorksSection';
import { FeaturesSection } from '@/components/LandingPage/FeaturesSection';
import { ComparisonSection } from '@/components/LandingPage/ComparisonSection';
import { TestimonialsSection } from '@/components/LandingPage/TestimonialSection';
import { PricingSection } from '@/components/LandingPage/PricingSection';
import { CloseSection } from '@/components/LandingPage/CloseSection';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { FloatingWhatsAppButton } from '@/components/LandingPage/FloatingWhatsAppButton';
import { PurchaseToastController } from '@/components/LandingPage/PurchaseToastController';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLoginClick = () => {
        window.location.href = 'https://app.weppy.com.br';
    };

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] relative">
            <PurchaseToastController />
            <FloatingWhatsAppButton />

            <LandingHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onLoginClick={handleLoginClick}
            />
            <main>
                <HeroSection onLoginClick={handleLoginClick} />
                <CompaniesSection />
                <VslSection />
                <HowItWorksSection />
                <FeaturesSection />
                <ComparisonSection />
                <TestimonialsSection />
                <PricingSection />
                <CloseSection onLoginClick={handleLoginClick} />
            </main>
            <LandingFooter />
        </div>
    );
}
