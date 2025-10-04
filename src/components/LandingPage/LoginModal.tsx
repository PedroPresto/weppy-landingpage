// src/components/LandingPage/LoginModal.tsx (Versão Melhorada)

import React from 'react';
import { X, LogIn, Loader, Shield, Lock } from 'lucide-react';
import weppyLogo from '../../assets/weppy_logo_render.svg';

interface LoginModalProps {
    loading: boolean;
    onClose: () => void;
    onGoogleLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ loading, onClose, onGoogleLogin }) => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-[#0A0A0A]/90 border border-gray-800 rounded-2xl p-8 w-full max-w-md relative animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="text-center mb-8">
                    {/* Alteração: Fundo do logo agora usa o gradiente da marcaaa */}
                    <div className="flex items-center justify-center mx-auto mb-4">
                        <img src={weppyLogo} alt="Weppy Logo" className="w-16 h-16" />
                    </div>

                    <h2 className="text-2xl font-bold text-white font-['Poppins'] mb-2">
                        Comece Agora. Venda Mais.
                    </h2>
                    <p className="text-gray-400 font-['Inter']">
                        Sua jornada para automação inteligente começa aqui.
                    </p>
                </div>

                <button
                    onClick={onGoogleLogin}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                        <LogIn className="w-5 h-5" />
                    )}
                    <span>
                        {loading ? 'Criando sua conta...' : 'Entrar com Google'}
                    </span>
                </button>

                {/* Alteração: Bloco de confiança movido para logo abaixo do botão */}
                <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 mb-2">
                        <div className="flex items-center space-x-2 group">
                            <Shield className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:text-white transition-colors">100% Seguro</span>
                        </div>
                        <div className="flex items-center space-x-2 group">
                            <Lock className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:text-white transition-colors">LGPD</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400 font-['Inter']">
                        Ao continuar, você concorda com nossos{' '}
                        <a href="#" className="text-orange-400 hover:underline hover:text-orange-300 transition-colors">
                            Termos de Serviço
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};