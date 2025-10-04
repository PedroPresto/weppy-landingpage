// src/components/LandingPage/LandingFooter.tsx

import React from 'react';
import Image from 'next/image';
import { footerLinks } from './LandingPageData';

export const LandingFooter: React.FC = () => {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-gradient-to-b from-[#0A0A0A] to-[#050505] relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Coluna da Marca */}
                    <div className="animate-fade-in-up">
                        <div className="flex items-center space-x-3 mb-4 group cursor-pointer">
                            <Image
                                src="/weppy_logo_render.svg" // O caminho é direto a partir da pasta 'public'
                                alt="Weppy Logo"
                                width={40} // Especifique a largura
                                height={40} // Especifique a altura
                                className="transition-transform duration-300"
                            />                            <span className="text-xl font-bold text-white font-['Poppins'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                                Weppy
                            </span>
                        </div>
                        <p className="text-gray-400 font-['Inter'] mb-4">
                            A plataforma de automação de WhatsApp mais completa do Brasil.
                        </p>
                    </div>

                    {/* Coluna de Produto */}
                    <div className="animate-fade-in-up animation-delay-200">
                        <h4 className="text-white font-semibold font-['Poppins'] mb-4">Produto</h4>
                        <ul className="space-y-2 text-gray-400 font-['Inter']">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna de Suporte */}
                    <div className="animate-fade-in-up animation-delay-400">
                        <h4 className="text-white font-semibold font-['Poppins'] mb-4">Suporte</h4>
                        <ul className="space-y-2 text-gray-400 font-['Inter']">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna Legal */}
                    <div className="animate-fade-in-up animation-delay-600">
                        <h4 className="text-white font-semibold font-['Poppins'] mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400 font-['Inter']">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Direitos Autorais */}
                <div className="pt-8 border-t border-gray-800/50 text-center text-gray-400 font-['Inter'] animate-fade-in-up animation-delay-800">
                    <p>&copy; {new Date().getFullYear()} Weppy. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};