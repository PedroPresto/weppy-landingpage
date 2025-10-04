import React from 'react';
import {CheckCircle} from 'lucide-react';
import {plans} from './LandingPageData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';


export const PricingSection: React.FC = () => {
    const sectionRef = useScrollAnimation(0.2);


    return (
        <section id="pricing"
                 className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#0A0A0A] relative"
                 ref={sectionRef.ref}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-700 ${sectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4">
                        Um único plano completo. Escolha apenas como quer poupar.
                    </h2>
                    <p className="text-xl text-gray-400 font-['Inter']">
                        Todas as funcionalidades estão incluídas em qualquer plano. Sem surpresas, sem letras pequenas.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 border rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/50 hover:scale-105 group ${plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20 transform md:scale-105' : 'border-gray-700'} ${sectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 right-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold animate-bounce">
                                    Mais Popular
                                </div>
                            )}

                            {/* Savings Badge */}
                            <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-red-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform">
                                {plan.savings}
                            </div>

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white font-['Poppins'] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 font-['Inter'] mb-4 h-12 flex items-center justify-center">
                                    {plan.description}
                                </p>

                                {/* Price Section */}
                                <div className="mb-2">
                                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                                        <span className="text-4xl font-bold text-white font-['Poppins']">{plan.price}</span>
                                        <span className="text-gray-400 font-['Inter'] text-lg">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {plan.id === 'mensal'
                                            ? `(Total de R$ 97/mês)`
                                            : plan.id === 'trimestral'
                                                ? `(Total de R$ 247 a cada 3 meses)`
                                                : `(Total de R$ 300 por ano)`}
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start space-x-3 group/item">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"/>
                                        <span className="text-gray-300 font-['Inter'] group-hover/item:text-white transition-colors leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer">
                                <button
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/25'
                                            : 'bg-gray-700 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500'
                                    }`}
                                >
                                    Contratar Assistente
                                </button>
                            </a>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"/>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
                    <p className="text-gray-400 font-['Inter'] text-base leading-relaxed">
                        💳 Pagamento seguro via Pix ou Cartão • 🔒 Garantia de 7 Dias ou o seu dinheiro de volta • 🚀 Comece em 5 minutos
                    </p>
                </div>
            </div>
        </section>
    );
};