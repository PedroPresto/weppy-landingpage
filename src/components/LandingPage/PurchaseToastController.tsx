'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { purchaseToasts } from './LandingPageData';

export const PurchaseToastController: React.FC = () => {
    useEffect(() => {
        let toastTimeout: NodeJS.Timeout;

        const showRandomToast = () => {
            const randomToast = purchaseToasts[Math.floor(Math.random() * purchaseToasts.length)];
            const message = `${randomToast.message} (${randomToast.time})`;

            toast(message, {
                duration: 5500,
                position: 'bottom-left',
                style: {
                    background: 'var(--paper-3)',
                    color: 'var(--ink)',
                    border: '1px solid var(--line-strong)',
                    borderRadius: '0',
                    fontFamily: 'var(--font-geist), sans-serif',
                    fontSize: '0.85rem',
                    padding: '0.85rem 1rem',
                    maxWidth: '320px',
                    boxShadow: '0 4px 24px rgba(26, 24, 19, 0.08)',
                },
            });

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
