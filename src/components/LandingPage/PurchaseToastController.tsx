'use client';

import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { purchaseToasts } from './LandingPageData';
import { KiwifyLogo, KIWIFY_GREEN, KIWIFY_GREEN_DEEP } from './KiwifyLogo';

const TOAST_DURATION = 6000;

type Purchase = (typeof purchaseToasts)[number];

/** Tempo relativo variável: repetir sempre o mesmo minuto entrega o truque. */
const randomElapsed = (): string => {
    const minutes = Math.floor(Math.random() * 12);
    if (minutes === 0) return 'agora mesmo';
    if (minutes === 1) return 'há 1 minuto';
    return `há ${minutes} minutos`;
};

const PurchaseCard: React.FC<{ purchase: Purchase; elapsed: string; visible: boolean }> = ({
    purchase,
    elapsed,
    visible,
}) => (
    <div
        role="status"
        aria-live="polite"
        className={`w-[19.5rem] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]
                shadow-[0_12px_32px_-12px_rgba(26,22,20,0.28)] transition-all duration-300 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
        <div className="flex items-center gap-3 px-3.5 py-3">
            <span
                className="relative grid place-items-center w-10 h-10 shrink-0 rounded-full text-white"
                style={{ background: `linear-gradient(140deg, ${KIWIFY_GREEN}, ${KIWIFY_GREEN_DEEP})` }}
            >
                <KiwifyLogo variant="glyph" className="w-[21px] h-[21px]" />
            </span>

            <div className="min-w-0 flex-1">
                <p className="text-[13px] leading-snug text-[var(--ink-2)]">
                    <span className="font-semibold text-[var(--ink)]">
                        {purchase.firstName} {purchase.lastInitial}.
                    </span>{' '}
                    assinou o{' '}
                    <span className="font-semibold text-[var(--ink)]">{purchase.plan}</span>
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--ink-3)] truncate">
                    <span className="truncate">
                        {purchase.city}, {purchase.uf}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{elapsed}</span>
                </p>
            </div>
        </div>

        {/* Régua de tempo do próprio toast */}
        <div className="h-[2px] w-full bg-[var(--line)]">
            <div
                className="h-full origin-left"
                style={{
                    background: KIWIFY_GREEN,
                    animation: visible ? `weppyToastBar ${TOAST_DURATION}ms linear forwards` : 'none',
                }}
            />
        </div>
    </div>
);

export const PurchaseToastController: React.FC = () => {
    const lastIndex = useRef<number>(-1);

    useEffect(() => {
        let toastTimeout: ReturnType<typeof setTimeout>;

        const pickNext = (): Purchase => {
            let index = Math.floor(Math.random() * purchaseToasts.length);
            // Evita mostrar a mesma pessoa duas vezes seguidas.
            if (index === lastIndex.current) {
                index = (index + 1) % purchaseToasts.length;
            }
            lastIndex.current = index;
            return purchaseToasts[index];
        };

        const showRandomToast = () => {
            const purchase = pickNext();
            const elapsed = randomElapsed();

            toast.custom(
                (t) => <PurchaseCard purchase={purchase} elapsed={elapsed} visible={t.visible} />,
                { duration: TOAST_DURATION, position: 'bottom-left' },
            );

            const randomInterval = Math.random() * (50000 - 25000) + 25000;
            toastTimeout = setTimeout(showRandomToast, randomInterval);
        };

        const initial = setTimeout(showRandomToast, 14000);

        return () => {
            clearTimeout(initial);
            clearTimeout(toastTimeout);
        };
    }, []);

    return null;
};
