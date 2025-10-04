import React from 'react';
import { Brain, MessageSquare, Zap, Star, TrendingUp } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Brain, delay: 0, size: 'w-8 h-8', position: 'top-20 left-10' },
    { Icon: MessageSquare, delay: 1, size: 'w-6 h-6', position: 'top-40 right-20' },
    { Icon: Zap, delay: 2, size: 'w-10 h-10', position: 'top-60 left-20' },
    { Icon: Star, delay: 3, size: 'w-7 h-7', position: 'bottom-60 right-10' },
    { Icon: TrendingUp, delay: 4, size: 'w-9 h-9', position: 'bottom-40 left-16' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} animate-float opacity-20`}
          style={{
            animationDelay: `${element.delay}s`,
            animationDuration: '6s',
          }}
        >
          <element.Icon 
            className={`${element.size} text-orange-400 drop-shadow-lg`}
          />
        </div>
      ))}
    </div>
  );
};