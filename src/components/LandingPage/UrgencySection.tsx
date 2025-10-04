// src/components/LandingPage/UrgencySection.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { urgencyFeatures } from './LandingPageData';

interface UrgencySectionProps {
    onLoginClick: () => void;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ onLoginClick }) => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-red-500/10 relative overflow-hidden">
            {/* Efeito de fundo pulsante */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-yellow-500/5 animate-pulse" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-8 animate-fade-in-up">
                    ⚡ Oferta Limitada - Apenas Este Mês
                </h2>

                {/* Features de Urgência */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {urgencyFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <p className="text-yellow-300 font-['Inter']">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Garantia */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/50 rounded-xl p-6 mb-8 animate-fade-in-up animation-delay-500">
                    <p className="text-white text-xl font-['Poppins'] mb-2">
                        🎯 Garantia Blindada de 7 Dias
                    </p>
                    <p className="text-gray-300 font-['Inter']">
                        Se você não amar a Weppy em 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas.
                    </p>
                </div>

                {/* Botão de Ação */}
                <a
                    href="https://pay.kiwify.com.br/mSN9fqk"
                    className="group bg-gradient-to-r from-yellow-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-500 inline-flex items-center space-x-2 hover:scale-110 animate-fade-in-up animation-delay-700"
                >
                    <span>Garantir Meu Acesso Agora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};