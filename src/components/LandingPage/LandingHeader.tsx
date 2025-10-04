import React from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface LandingHeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    onLoginClick: () => void;
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({ isMenuOpen, setIsMenuOpen, onLoginClick }) => {
    return (
        <header className="fixed w-full top-0 z-50 bg-[#0A0A0A]/70 backdrop-blur-2xl border-b border-gray-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative">
                            <Image
                                src="/weppy_logo_render.svg" // O caminho é direto a partir da pasta 'public'
                                alt="Weppy Logo"
                                width={40} // Especifique a largura
                                height={40} // Especifique a altura
                                className="transition-transform duration-300"
                            />                            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-500/20 rounded-full opacity-0" />
                        </div>
                        <span className="text-2xl font-bold text-white font-['Poppins']">
                            Weppy
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Recursos</a>
                        <a href="#results" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Resultados</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Preços</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={onLoginClick} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                            Entrar
                        </button>

                        <a href="#pricing" className="relative bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">Ver Planos</span>
                        </a>
                    </div>

                    <button className="md:hidden text-white transition-transform duration-300 hover:scale-110" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-gray-800/50 animate-slide-down">
                    <div className="px-4 py-4 space-y-4">
                        <a href="#features" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Recursos</a>
                        <a href="#results" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Resultados</a>
                        <a href="#pricing" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Preços</a>
                        <div className="pt-4 border-t border-gray-800/50 space-y-3">
                            <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white transition-all duration-300">
                                Entrar
                            </button>
                            <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="block w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105">
                                Começar Grátis
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};