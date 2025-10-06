// src/components/LandingPage/VslSection.tsx

import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const VslSection: React.FC = () => {
    const sectionRef = useScrollAnimation(0.3);

    return (
        <section
            id="vsl"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#0A0A0A] relative"
            ref={sectionRef.ref}
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="aurora-bg">
                    <div className="aurora-gradient aurora-1"></div>
                    <div className="aurora-gradient aurora-2"></div>
                    <div className="aurora-gradient aurora-3"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Título da Secção */}
                <div className={`transition-all duration-700 ${sectionRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4">
                        Veja como o Weppy pode transformar seu negócio em 2 minutos
                    </h2>
                    <p className="text-xl text-gray-400 font-['Inter'] mb-12">
                        Assista à nossa demonstração rápida e descubra o poder da automação.
                    </p>
                </div>

                {/* Vídeo Player */}
                <div
                    className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 border-2 border-orange-500/30 transition-all duration-1000 delay-300 ${sectionRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // <-- SUBSTITUA PELO LINK DO SEU VÍDEO
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>

                {/* Call to Action (Botão) */}
                <div className={`mt-12 transition-all duration-700 delay-500 ${sectionRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="#pricing"
                        className="group bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 inline-flex items-center space-x-2 hover:scale-110"
                    >
                        <span>Quero Automatizar Meu Negócio</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};