// src/components/LandingPage/HowItWorksSection.tsx

import React from 'react';
import { howItWorks } from './LandingPageData';

export const HowItWorksSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Poppins'] mb-4 animate-fade-in-up">
                        Como Funciona em 4 Passos Simples
                    </h2>
                    <p className="text-xl text-gray-600 font-['Inter'] animate-fade-in-up animation-delay-300">
                        Configure e comece a vender em menos de 15 minutos
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {howItWorks.map((step, index) => (
                        <div
                            key={index}
                            className="text-center group relative animate-fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative mb-6">
                                {/* Ícone e número do passo */}
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-500 relative z-10 shadow-2xl shadow-orange-500/20">
                                    <step.icon className="w-10 h-10 text-white" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 animate-pulse shadow-lg">
                                    {step.step}
                                </div>

                                {/* Linha de conexão (só aparece em ecrãs de computador e não no último item) */}
                                {index < howItWorks.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent transform translate-x-2">
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 w-0 group-hover:w-full transition-all duration-1000" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 font-['Inter'] group-hover:text-gray-500 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};