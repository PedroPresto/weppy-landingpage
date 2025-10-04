import React from 'react';
import {Clock, ArrowDown, Sparkles, ArrowRight, PlayCircle} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { benefits } from './LandingPageData';

interface HeroSectionProps {
    onLoginClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
    const heroRef = useScrollAnimation(0.1);

    return (
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative" ref={heroRef.ref}>
            <div className="max-w-7xl mx-auto text-center relative">
                {/* Corrigido: Usando o padrão de transição */}
                <div className={`inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8 transition-all duration-700 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="animate-pulse"><Clock className="w-4 h-4 text-orange-400 mr-2" /></div>
                    <span className="text-orange-300 text-sm font-medium">🔥 Promoção de lançamento: 50% OFF apenas nos próximos 7 dias</span>
                    <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </div>

                {/* Corrigido: Usando o padrão de transição */}
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] mb-6 leading-tight transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <span> Não perca mais vendas por demorar a responder. </span>
                    <span className="block mt-4 bg-gradient-to-r from-orange-500 via-red-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                        Seu WhatsApp vende por você.
                    </span>
                </h1>

                {/* Corrigido: Usando o padrão de transição */}
                <p className={`text-xl text-gray-400 font-['Inter'] max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-500 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    Tenha um assistente virtual que responde seus clientes na hora, tira dúvidas e envia links de pagamento, dia e noite. Simples de configurar, sem precisar de tecnologia.
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
                    <button onClick={onLoginClick} className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 flex items-center justify-center space-x-2 hover:scale-110 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center space-x-2">
                            <Sparkles className="w-5 h-5" />
                            <span>Começar Grátis Agora</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <div className="group flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300">
                        <PlayCircle className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                        <span>Ver demonstração (2 min)</span>
                    </div>
                </div>

                {/* Corrigido: Usando o padrão de transição */}
                <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/80" style={{ animationDelay: `${1000 + index * 100}ms` }}>
                            <benefit.icon className={`w-4 h-4 ${benefit.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-sm text-gray-300 font-['Inter'] group-hover:text-white transition-colors">{benefit.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <div className="relative">
                        <ArrowDown className="w-8 h-8 text-orange-400 animate-bounce" />
                        <div className="absolute inset-0 w-8 h-8 text-orange-400 animate-ping opacity-20"><ArrowDown className="w-8 h-8" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};