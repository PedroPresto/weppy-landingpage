// src/components/LandingPage/CtaSection.tsx

import React from 'react';
import { ArrowRight, Sparkles, Shield, Award, Headphones as HeadphonesIcon } from 'lucide-react';

interface CtaSectionProps {
    onLoginClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onLoginClick }) => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700 rounded-3xl p-12 backdrop-blur-xl overflow-hidden group">
                    {/* Efeito de hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4 animate-fade-in-up">
                            Acesse o Modo de Demonstração
                        </h2>
                        <p className="text-xl text-gray-400 font-['Inter'] mb-8 animate-fade-in-up animation-delay-300">
                            Faça Login e conheça nossa plataforma por dentro
                        </p>

                        {/* Botão Principal */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up animation-delay-500">
                            <button
                                onClick={onLoginClick}
                                className="group bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 inline-flex items-center space-x-2 hover:scale-110"
                            >
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Quero Conhecer</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Mini-benefícios */}
                        <div className="text-gray-400 font-['Inter'] text-sm mb-8 animate-fade-in-up animation-delay-700">
                            ✅ Acesso grátis • ❌ Sem cartão • 🚀 Login em 1 min
                        </div>

                        {/* Ícones de confiança */}
                        <div className="flex justify-center items-center space-x-8 text-gray-500 animate-fade-in-up animation-delay-1000">
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <Shield className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                                <span className="text-sm group-hover:text-white transition-colors">SSL Seguro</span>
                            </div>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <Award className="w-5 h-5 group-hover:text-red-400 transition-colors" />
                                <span className="text-sm group-hover:text-white transition-colors">LGPD Compliant</span>
                            </div>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <HeadphonesIcon className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
                                <span className="text-sm group-hover:text-white transition-colors">Suporte 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};