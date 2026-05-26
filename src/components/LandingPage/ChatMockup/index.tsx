// src/components/LandingPage/ChatMockup/index.tsx
'use client';

import React from 'react';
import type { ChatStep, ChatSize } from './types';
import { ChatHeader } from './ChatHeader';
import { Bubble } from './Bubble';
import { TypingIndicator } from './TypingIndicator';
import { useChatLoop, isTypingStep } from './useChatLoop';

interface ChatMockupProps {
    contactName: string;
    contactSubtitle?: string;
    steps: ChatStep[];
    size?: ChatSize;
    loop?: boolean;
    /** Adiciona "frame" estilo celular ao redor */
    framed?: boolean;
}

const SIZE_CLASS: Record<ChatSize, string> = {
    sm: 'max-w-[260px]',
    md: 'max-w-[320px]',
    lg: 'max-w-[400px]',
};

export const ChatMockup: React.FC<ChatMockupProps> = ({
    contactName,
    contactSubtitle = 'online',
    steps,
    size = 'lg',
    loop = true,
    framed = true,
}) => {
    const { visibleCount } = useChatLoop({ steps, loop });

    // Typing indicator só aparece enquanto é o último step visível.
    // Quando a mensagem subsequente entra, o typing some (substituído pela resposta).
    const rawVisible = steps.slice(0, visibleCount);
    const visibleSteps = rawVisible.filter((step, i) => !(isTypingStep(step) && i < rawVisible.length - 1));

    return (
        <div
            className={`relative ${SIZE_CLASS[size]} w-full mx-auto ${framed ? 'rounded-[2rem] bg-[#1F1B19] p-1.5 shadow-[0_24px_60px_-12px_rgba(255,89,2,0.18),0_8px_24px_-8px_rgba(139,63,224,0.16)]' : ''}`}
            aria-label={`Conversa simulada com ${contactName}`}
        >
            <div className={`${framed ? 'rounded-[1.5rem] overflow-hidden' : ''} bg-[var(--surface-chat)]`}>
                <ChatHeader contactName={contactName} contactSubtitle={contactSubtitle} />

                <div
                    className="px-3 py-4 flex flex-col justify-end gap-2.5 h-[420px] overflow-hidden"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(255,89,2,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(194,122,255,0.04) 0%, transparent 50%)',
                    }}
                >
                    {visibleSteps.map((step) =>
                        isTypingStep(step) ? (
                            <TypingIndicator key={step.id} agent={step.agent} />
                        ) : (
                            <Bubble key={step.id} message={step} />
                        )
                    )}
                </div>

                <div className="px-3 py-2 bg-[var(--surface-2)] border-t border-black/5 dark:border-white/5 flex items-center gap-2">
                    <div className="flex-1 px-3 py-1.5 rounded-full bg-[var(--surface)] text-[0.75rem] text-[var(--ink-3)]">
                        Digite uma mensagem
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[var(--wa-green-deep)] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Glow atrás */}
            {framed && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(circle at 30% 30%, var(--orange) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--purple) 0%, transparent 60%)',
                    }}
                />
            )}
        </div>
    );
};

export type { ChatStep, BubbleMessage, TypingStep, PaymentPreviewData, ChatSize } from './types';
