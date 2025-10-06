// src/components/LandingPage/ComparisonSection.tsx

import React from 'react';
import { beforeAfter } from './LandingPageData';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4 animate-fade-in-up">
                        Antes vs Depois da Weppy
                    </h2>
                    <p className="text-xl text-gray-400 font-['Inter'] animate-fade-in-up animation-delay-300">
                        Veja a transformação completa do seu atendimento
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Coluna "Sem o Weppy" */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-red-400 font-['Poppins'] text-center mb-8 animate-fade-in-left">
                            ❌ Sem a Weppy
                        </h3>
                        {beforeAfter.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-red-500/30 border border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-500 hover:scale-105 animate-fade-in-left"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                                    <p className="text-gray-300 font-['Inter']">{item.before}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Coluna "Com o Weppy" */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-green-400 font-['Poppins'] text-center mb-8 animate-fade-in-right">
                            ✅ Com a Weppy
                        </h3>
                        {beforeAfter.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-green-500/30 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-500 hover:scale-105 animate-fade-in-right"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                                    <p className="text-gray-300 font-['Inter']">{item.after}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};