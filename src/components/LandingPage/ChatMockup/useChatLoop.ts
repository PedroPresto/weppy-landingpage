// src/components/LandingPage/ChatMockup/useChatLoop.ts
'use client';

import { useEffect, useRef, useState } from 'react';
import type { ChatStep } from './types';

interface UseChatLoopOptions {
    steps: ChatStep[];
    loop: boolean;
    /** Atraso inicial antes do primeiro step aparecer (ms) */
    startDelayMs?: number;
    /** Atraso entre o fim de um loop e o reinício (ms) */
    loopGapMs?: number;
}

/**
 * Reproduz a sequência de mensagens/typing-indicators progressivamente.
 * Cada step aparece após o anterior, respeitando holdMs (mensagens) ou durationMs (typing).
 * Quando loop=true, reinicia do zero após loopGapMs.
 */
export function useChatLoop({ steps, loop, startDelayMs = 400, loopGapMs = 2500 }: UseChatLoopOptions) {
    const [visibleCount, setVisibleCount] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (steps.length === 0) return;

        let cancelled = false;

        const scheduleNext = (index: number, delay: number) => {
            if (cancelled) return;
            timeoutRef.current = setTimeout(() => {
                if (cancelled) return;
                const nextCount = index + 1;
                setVisibleCount(nextCount);

                if (nextCount < steps.length) {
                    const current = steps[index];
                    const nextDelay = isTypingStep(current)
                        ? current.durationMs
                        : (current.holdMs ?? 1100);
                    scheduleNext(nextCount, nextDelay);
                } else if (loop) {
                    timeoutRef.current = setTimeout(() => {
                        if (cancelled) return;
                        setVisibleCount(0);
                        scheduleNext(0, startDelayMs);
                    }, loopGapMs);
                }
            }, delay);
        };

        scheduleNext(0, startDelayMs);

        return () => {
            cancelled = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [steps, loop, startDelayMs, loopGapMs]);

    return { visibleCount };
}

export function isTypingStep(step: ChatStep): step is Extract<ChatStep, { type: 'typing' }> {
    return (step as { type?: string }).type === 'typing';
}
