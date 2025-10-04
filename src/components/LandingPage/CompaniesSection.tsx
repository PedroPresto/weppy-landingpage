// src/components/LandingPage/CompaniesSection.tsx

import React from 'react';
import { companies } from './LandingPageData';

export const CompaniesSection: React.FC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-400 font-['Inter'] mb-8 animate-fade-in">
                    Empresas que já confiam no Weppy:
                </p>
                {/* O contêiner 'relative overflow-hidden' esconde as barras de scroll
                  e garante que a animação não "vaze" para fora da área designada.
                */}
                <div className="relative overflow-hidden">
                    {/* A classe 'animate-scroll' vem do seu ficheiro index.css e move o
                      elemento da direita para a esquerda. Duplicamos a lista de empresas
                      para que, quando a primeira metade sair da tela, a segunda metade
                      (que é idêntica) já esteja a entrar, criando um loop perfeito.
                    */}
                    <div className="flex animate-scroll">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-8 text-xl font-bold text-gray-500 hover:text-gray-300 transition-colors duration-300"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};