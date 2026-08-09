/**
 * Conversões do Google Ads.
 *
 * A tag base já é carregada no layout de (site). Aqui ficam apenas os rótulos
 * de cada ação de conversão e o disparo em si.
 *
 * Regra da casa: rastreamento nunca pode derrubar o fluxo do usuário. Se o
 * gtag ainda não carregou, se o visitante bloqueia scripts ou se o Google
 * muda algo, `trackConversion` sai em silêncio em vez de lançar.
 */

export const GOOGLE_ADS_ID = 'AW-17701970698';

/**
 * Rótulos criados em Google Ads → Metas → Conversões.
 * Para adicionar um novo: crie a ação lá, copie o `send_to` do snippet de
 * evento e registre aqui, nunca espalhado pelos componentes.
 */
export const CONVERSIONS = {
    /** Formulário "a IA te chama". Ação "Lead Formulario", primária, R$30. */
    leadFormulario: `${GOOGLE_ADS_ID}/gze_CKbs694cEIrG-vhB`,
    /** Clique em qualquer botão de WhatsApp. Ação "Lead WhatsApp", primária, R$20. */
    leadWhatsapp: `${GOOGLE_ADS_ID}/f2fFCKns694cEIrG-vhB`,
} as const;

/** Valor padrão por conversão, espelhando o que está configurado no painel. */
const DEFAULT_VALUES: Record<string, number> = {
    [CONVERSIONS.leadFormulario]: 30,
    [CONVERSIONS.leadWhatsapp]: 20,
};

type GtagFn = (...args: unknown[]) => void;

interface ConversionParams {
    /** Valor monetário do evento. Cai no valor configurado no painel. */
    value?: number;
    currency?: string;
    /** Id único do evento, evita contagem dupla em reenvios. */
    transactionId?: string;
    /** Chamado depois que o beacon sai, ou no timeout. Para links que saem do site. */
    onSent?: () => void;
}

function getGtag(): GtagFn | null {
    if (typeof window === 'undefined') return null;
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    return typeof gtag === 'function' ? gtag : null;
}

export const trackConversion = (sendTo: string, params: ConversionParams = {}): void => {
    try {
        const gtag = getGtag();

        if (!gtag) {
            params.onSent?.();
            return;
        }

        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            params.onSent?.();
        };

        gtag('event', 'conversion', {
            send_to: sendTo,
            value: params.value ?? DEFAULT_VALUES[sendTo] ?? 1,
            currency: params.currency ?? 'BRL',
            ...(params.transactionId ? { transaction_id: params.transactionId } : {}),
            ...(params.onSent ? { event_callback: finish } : {}),
        });

        // O event_callback do gtag não é garantido: destrava a navegação de qualquer jeito.
        if (params.onSent) window.setTimeout(finish, 700);
    } catch {
        // Silencioso de propósito: ver comentário no topo do arquivo.
        params.onSent?.();
    }
};

/* ===================== gclid: ponte entre o clique e a venda ===================== */

const GCLID_KEY = 'weppy_gclid';
const GCLID_TTL_MS = 90 * 24 * 60 * 60 * 1000; // igual à janela de conversão de clique

/** Guarda o gclid da URL para poder mandar junto no checkout depois. */
export function captureGclid(): void {
    if (typeof window === 'undefined') return;

    const gclid = new URLSearchParams(window.location.search).get('gclid');
    if (!gclid) return;

    try {
        window.localStorage.setItem(GCLID_KEY, JSON.stringify({ gclid, ts: Date.now() }));
    } catch {
        // localStorage bloqueado (modo privado, cookies off). Não é fatal.
    }
}

/** Devolve o gclid guardado, se ainda estiver dentro da janela de atribuição. */
export function getStoredGclid(): string | null {
    if (typeof window === 'undefined') return null;

    try {
        const raw = window.localStorage.getItem(GCLID_KEY);
        if (!raw) return null;

        const { gclid, ts } = JSON.parse(raw) as { gclid?: string; ts?: number };
        if (!gclid || !ts || Date.now() - ts > GCLID_TTL_MS) return null;

        return gclid;
    } catch {
        return null;
    }
}

/**
 * Anexa o gclid à URL do checkout. A Kiwify repassa parâmetros desconhecidos
 * para o webhook, então dá para reconciliar a venda com o clique depois.
 */
export function withGclid(checkoutUrl: string): string {
    const gclid = getStoredGclid();
    if (!gclid) return checkoutUrl;

    try {
        const url = new URL(checkoutUrl);
        url.searchParams.set('gclid', gclid);
        return url.toString();
    } catch {
        return checkoutUrl;
    }
}
