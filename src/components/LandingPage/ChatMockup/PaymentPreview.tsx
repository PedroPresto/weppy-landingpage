// src/components/LandingPage/ChatMockup/PaymentPreview.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { PaymentPreviewData } from './types';

interface PaymentPreviewProps {
    data: PaymentPreviewData;
}

export const PaymentPreview: React.FC<PaymentPreviewProps> = ({ data }) => {
    return (
        <div className="mt-2 -mx-1 rounded-xl overflow-hidden border border-black/5 bg-[var(--surface-2)]">
            <div className="px-3 py-2.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--orange)] to-[var(--purple-deep)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[0.6875rem] font-bold tracking-wider">Pix</span>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[0.8125rem] font-semibold text-[var(--ink)] leading-tight truncate">
                        {data.title}
                    </p>
                    <p className="text-[0.6875rem] text-[var(--ink-3)] leading-tight mt-0.5 truncate">
                        {data.subtitle}
                    </p>
                </div>
            </div>
            {data.cta && (
                <div className="px-3 py-2 border-t border-black/5 bg-white flex items-center justify-between">
                    <span className="text-[0.75rem] font-medium text-[var(--orange)]">{data.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--orange)]" strokeWidth={2.5} />
                </div>
            )}
        </div>
    );
};
