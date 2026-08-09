'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureGclid, trackConversion, withGclid, CONVERSIONS } from '@/lib/gtag';

/** Páginas de pós-compra: quem já pagou e chama no WhatsApp não é lead novo. */
const NO_LEAD_TRACKING = ['/compra-aprovada'];

/**
 * Rastreamento de conversões do Google Ads.
 *
 * Escuta o clique no document em vez de instrumentar cada CTA: os botões de
 * WhatsApp e de checkout estão espalhados por várias seções e páginas, e a
 * delegação pega todos, inclusive os que ainda vão ser criados.
 */
export function ConversionTracking() {
    const pathname = usePathname();

    useEffect(() => {
        captureGclid();

        const trackLeads = !NO_LEAD_TRACKING.includes(pathname);

        const onClick = (event: MouseEvent) => {
            // Deixa passar clique com modificador e botão do meio: o usuário quer
            // abrir em outra aba, e aí não existe navegação para segurar.
            if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
                return;
            }

            const target = event.target as HTMLElement | null;
            const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
            if (!link) return;

            const href = link.href;

            if (trackLeads && (href.includes('wa.me') || href.includes('api.whatsapp.com'))) {
                event.preventDefault();
                trackConversion(CONVERSIONS.leadWhatsapp, {
                    onSent: () => window.open(href, link.target || '_blank', 'noopener,noreferrer'),
                });
                return;
            }

            // Checkout: não é conversão (a venda só conta quando a Kiwify confirma),
            // mas o gclid precisa viajar junto para reconciliar a venda depois.
            if (href.includes('pay.kiwify.com')) {
                const withId = withGclid(href);
                if (withId !== href) {
                    event.preventDefault();
                    window.open(withId, link.target || '_blank', 'noopener,noreferrer');
                }
            }
        };

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [pathname]);

    return null;
}
