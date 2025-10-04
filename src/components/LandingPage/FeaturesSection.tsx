// src/components/LandingPage/FeaturesSection.tsx

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { InteractiveCard } from './InteractiveCard';
import { features } from './LandingPageData';

export const FeaturesSection: React.FC = () => {
    const featuresRef = useScrollAnimation(0.1);

    return (
        <section
            id="features"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A]/50 to-[#111111]/50 backdrop-blur-sm relative"
            ref={featuresRef.ref}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className={`text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4 transition-all duration-700 ${
                            featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        Recursos que Revolucionam seu Atendimento
                    </h2>
                    <p
                        className={`text-xl text-gray-400 font-['Inter'] max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                            featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        Descubra as funcionalidades que fazem do Weppy a escolha ideal para automatizar suas vendas
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <InteractiveCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            gradient={feature.gradient}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};