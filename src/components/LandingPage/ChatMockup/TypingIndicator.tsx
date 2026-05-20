// src/components/LandingPage/ChatMockup/TypingIndicator.tsx
'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import type { BubbleAgent } from './types';

interface TypingIndicatorProps {
    agent: BubbleAgent;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ agent }) => {
    const isAI = agent === 'ai';

    return (
        <div className="flex justify-end animate-bubble-pop">
            <div className={`relative px-4 py-3 rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-2xl ${isAI ? 'bg-white ring-1 ring-[var(--purple-soft)]' : 'bg-[var(--wa-green)]'} shadow-[0_1px_2px_rgba(0,0,0,0.08)]`}>
                {isAI && (
                    <span className="badge-ai absolute -top-2 -left-2 text-[0.625rem] px-1.5 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
                        IA
                    </span>
                )}
                <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '0ms' }} />
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '200ms' }} />
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '400ms' }} />
                </div>
            </div>
        </div>
    );
};
