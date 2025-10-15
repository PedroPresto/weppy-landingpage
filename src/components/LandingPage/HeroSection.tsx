import React from 'react';
import { ArrowRight, PlayCircle, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { benefits } from './LandingPageData';

interface HeroSectionProps {
    onLoginClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
    const heroRef = useScrollAnimation(0.1);

    return (
        <section
            // --- ALTERAÇÕES AQUI ---
            // Adicionado pt-28 (padding-top) para criar espaço para o menu fixo
            // Adicionado pb-12 (padding-bottom) para melhor espaçamento em ecrãs pequenos
            className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 relative overflow-hidden text-center"
            // --------------------
            ref={heroRef.ref}
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="aurora-bg">
                    <div className="aurora-gradient aurora-1"></div>
                    <div className="aurora-gradient aurora-2"></div>
                    <div className="aurora-gradient aurora-3"></div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto relative z-10">

                <div
                    className={`inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8 transition-all duration-700 ${heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="animate-pulse"><Clock className="w-4 h-4 text-orange-400 mr-2" /></div>
                    <span className="text-orange-300 text-sm font-medium">Promoção de lançamento: 50% OFF apenas nos próximos 7 dias</span>
                    <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </div>

                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-poppins mb-6 leading-tight transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    O seu WhatsApp vendendo no
                    <span className="block mt-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-800 bg-clip-text text-transparent animate-gradient-x">
                        piloto automático.
                    </span>
                </h1>

                <p className={`text-lg md:text-xl text-gray-400 font-inter max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    Não perca mais vendas por demorar a responder. Tenha um assistente virtual que qualifica leads, tira dúvidas e fecha vendas 24h por dia.
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <a
                        href="#vsl"
                        className="group bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105"
                    >
                        <span>Começar a Automatizar</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#vsl"
                        className="group text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105 hover:bg-gray-800/50"
                    >
                        <PlayCircle className="w-6 h-6 text-purple-400" />
                        <span>Ver Demonstração</span>
                    </a>
                </div>

                <div className={`flex flex-wrap gap-4 justify-center mt-12 transition-all duration-1000 delay-700 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group flex items-center space-x-2 glass-tag px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-sutil bg-gray-950"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <benefit.icon className={`w-4 h-4 ${benefit.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-sm text-gray-300 font-['Inter'] group-hover:text-white transition-colors">{benefit.text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};