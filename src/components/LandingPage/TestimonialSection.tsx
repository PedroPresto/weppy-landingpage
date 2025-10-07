// src/components/LandingPage/TestimonialsSection.tsx (Tema Roxo)
'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from './LandingPageData';

export const TestimonialsSection: React.FC = () => {
    const testimonialsRef = useScrollAnimation(0.2);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        // --- ALTERAÇÃO NO FUNDO DA SECÇÃO ---
        <section
            id="results"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A0A0A] via-purple-900/10 to-[#0A0A0A] relative"
            ref={testimonialsRef.ref}
        >
            {/* O Aurora Background já tem tons de roxo, o que é perfeito */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="aurora-bg">
                    <div className="aurora-gradient aurora-1"></div>
                    <div className="aurora-gradient aurora-2"></div>
                    <div className="aurora-gradient aurora-3"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4 transition-all duration-700 ${testimonialsRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                        Resultados Reais de Clientes Reais
                    </h2>
                    <p className={`text-xl text-gray-400 font-['Inter'] transition-all duration-700 delay-300 ${testimonialsRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                        Veja como o Weppy transformou negócios como o seu
                    </p>
                </div>

                {/* Depoimento em Destaque (Carrossel) */}
                <div className="mb-12">
                    {/* --- ALTERAÇÕES NO CARD EM DESTAQUE --- */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                        <div className="relative z-10 text-center">
                            <div className="flex items-center justify-center space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-twinkle" style={{ animationDelay: `${i * 0.1}s` }}/>
                                ))}
                            </div>
                            <blockquote className="text-2xl text-gray-300 font-['Inter'] mb-8 leading-relaxed italic min-h-[190px] flex items-center justify-center">
                                <span className="max-w-3xl">{testimonials[currentTestimonial].content}</span>
                            </blockquote>
                            <div className="flex items-center justify-center space-x-6">
                                <img
                                    src={testimonials[currentTestimonial].avatar}
                                    alt={testimonials[currentTestimonial].name}
                                    // --- ALTERAÇÃO NA BORDA DO AVATAR ---
                                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-500/50 shadow-lg"
                                />
                                <div className="text-left">
                                    <div className="text-white font-bold text-xl font-['Poppins']">{testimonials[currentTestimonial].name}</div>
                                    <div className="text-gray-400 font-['Inter']">{testimonials[currentTestimonial].role}</div>
                                    <div className="text-green-400 font-semibold text-sm mt-1">{testimonials[currentTestimonial].stats}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Indicadores do Carrossel */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                // --- ALTERAÇÃO NA COR DO INDICADOR ATIVO ---
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentTestimonial === index
                                        ? 'bg-gradient-to-r from-purple-500 to-purple-700'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grelha com todos os depoimentos */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        // --- ALTERAÇÕES NOS CARDS DA GRELHA ---
                        <div
                            key={index}
                            className={`bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:bg-gray-800/50 animate-fade-in-up ${currentTestimonial === index ? 'ring-2 ring-purple-500/50' : ''}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>
                                ))}
                            </div>
                            <p className="text-gray-300 font-['Inter'] mb-4 leading-relaxed text-sm">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center space-x-3">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <div className="text-white font-semibold text-sm font-['Poppins']">{testimonial.name}</div>
                                    <div className="text-gray-400 text-xs font-['Inter']">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};