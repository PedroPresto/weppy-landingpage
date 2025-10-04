// src/components/LandingPage/AnimatedText.tsx (CORRIGIDO)

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation'; // <-- CORREÇÃO AQUI

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
                                                            text,
                                                            className = '',
                                                            delay = 0
                                                          }) => {
  const [displayText, setDisplayText] = useState('');
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, text, delay]);

  return (
      <span ref={ref} className={className}>
      {displayText}
        {isVisible && displayText.length < text.length && (
            <span className="animate-pulse">|</span>
        )}
    </span>
  );
};