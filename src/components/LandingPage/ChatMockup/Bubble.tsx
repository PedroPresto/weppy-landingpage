// src/components/LandingPage/ChatMockup/Bubble.tsx
'use client';

import React from 'react';
import { Sparkles, Check, CheckCheck } from 'lucide-react';
import type { BubbleMessage } from './types';
import { PaymentPreview } from './PaymentPreview';

interface BubbleProps {
    message: BubbleMessage;
}

export const Bubble: React.FC<BubbleProps> = ({ message }) => {
    const isCustomer = message.from === 'customer';
    const isAI = !isCustomer && message.agent === 'ai';
    const isHuman = !isCustomer && message.agent === 'human';

    const alignment = isCustomer ? 'justify-start' : 'justify-end';
    // Authentic WhatsApp palette — works in both light and dark themes.
    // Customer (incoming): white in light, dark gray in dark.
    // AI bot (outgoing, white-ish): white in light, deep gray in dark, with purple ring.
    // Human bot (outgoing, green): always green (--wa-green).
    const bubbleColor = isCustomer
        ? 'bg-white dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF]'
        : isHuman
            ? 'bg-[var(--wa-green)] text-white'
            : 'bg-white dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF] ring-1 ring-[var(--purple-soft)]';
    const tail = isCustomer
        ? 'rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md'
        : 'rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-2xl';

    const metaColor = isHuman
        ? 'text-white/80'
        : 'text-[#667781] dark:text-[#8696A0]';

    return (
        <div className={`flex ${alignment} animate-bubble-pop`}>
            <div className={`relative max-w-[80%] px-3.5 py-2.5 ${bubbleColor} ${tail} shadow-[0_1px_2px_rgba(0,0,0,0.08)]`}>
                {isAI && (
                    <span className="inline-flex items-center gap-1 text-[0.625rem] font-semibold uppercase tracking-wider text-[var(--purple-deep)] mb-1">
                        <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
                        IA
                    </span>
                )}
                <p className="text-[0.875rem] leading-snug whitespace-pre-line">
                    {message.text}
                </p>
                {message.preview && <PaymentPreview data={message.preview} />}
                <div className="flex items-center justify-end gap-1 mt-1 -mb-0.5">
                    <span className={`text-[0.625rem] ${metaColor}`}>
                        {timeLabel()}
                    </span>
                    {!isCustomer && (
                        isHuman
                            ? <CheckCheck className="w-3 h-3 text-white/80" strokeWidth={2.5} />
                            : <Check className={`w-3 h-3 ${metaColor}`} strokeWidth={2.5} />
                    )}
                </div>
            </div>
        </div>
    );
};

function timeLabel(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
