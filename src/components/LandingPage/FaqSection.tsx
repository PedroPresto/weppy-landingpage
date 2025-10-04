import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from './LandingPageData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const FaqSection: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const sectionRef = useScrollAnimation(0.2);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef.ref}>
            <div className="max-w-4xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-700 ${sectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Poppins'] mb-4">
                        Ainda tem dúvidas? A gente responde.
                    </h2>
                    <p className="text-xl text-gray-400 font-['Inter']">
                        Esclarecemos as principais questões sobre a Weppy de forma direta e sem rodeios.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 ${sectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors group"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg font-semibold text-white font-['Poppins'] group-hover:text-orange-400 transition-colors">
                                    {faq.question}
                                </h3>
                                <div className="transition-transform duration-300">
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-orange-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                                    )}
                                </div>
                            </button>
                            {/* A resposta só é renderizada se o seu índice corresponder ao que está no estado 'openFaqIndex' */}
                            {openFaqIndex === index && (
                                <div className="px-6 pb-4 animate-slide-down">
                                    <p className="text-gray-300 font-['Inter'] leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};