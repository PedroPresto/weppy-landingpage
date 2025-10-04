// src/components/LandingPage/InteractiveCard.tsx (Animação de Spotlight)

import React, { useState, MouseEvent } from 'react';
import { LucideIcon } from 'lucide-react';

interface InteractiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
                                                                  icon: Icon,
                                                                  title,
                                                                  description,
                                                                  gradient,
                                                                  index
                                                                }) => {
  // Estado para guardar a posição do rato dentro do card
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Função para atualizar a posição do rato
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
      <div
          className={`group relative bg-[#0A0A0A] border border-gray-800 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.1}s` }}
          onMouseMove={handleMouseMove} // Atualiza a posição do rato
      >
        {/* ===== O NOVO EFEITO DE HOVER ESTÁ AQUI ===== */}
        <div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
            }}
        />

        <div className="relative z-10">
          {/* Ícone (agora sem a animação de rotação) */}
          <div className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Título */}
          <h3 className={`text-xl font-semibold text-white font-['Poppins'] mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradient}`}>
            {title}
          </h3>

          {/* Descrição */}
          <p className="text-gray-400 font-['Inter'] leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </div>
  );
};