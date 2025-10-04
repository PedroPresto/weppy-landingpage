import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from './AnimatedCounter';
import { stats } from './LandingPageData';

export const StatsSection: React.FC = () => {
    const statsRef = useScrollAnimation(0.3);

    return (
        <section
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500/10 via-red-500/5 to-red-500/10 relative"
            ref={statsRef.ref}>
            <div className="max-w-7xl mx-auto">
                {/* Corrigido: Usando o padrão de transição */}
                <div className={`text-center mb-12 transition-all duration-700 ${statsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-4">
                        Resultados que Você Entende, Sem Complicação.
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        // Corrigido: Usando o padrão de transição
                        <div
                            key={index}
                            className={`text-center group transition-all duration-700 ${statsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div
                                className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
                                <stat.icon className="w-8 h-8 text-white"/>
                                <div
                                    className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur animate-pulse"/>
                            </div>
                            <div className="text-4xl font-bold text-white font-['Poppins'] mb-2">
                                <AnimatedCounter end={stat.number} suffix={stat.suffix}/>
                            </div>
                            <div className="text-gray-400 font-['Inter']">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};