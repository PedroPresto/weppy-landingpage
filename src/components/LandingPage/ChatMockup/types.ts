// src/components/LandingPage/ChatMockup/types.ts

export type BubbleFrom = 'customer' | 'bot';
export type BubbleAgent = 'ai' | 'human';

export interface PaymentPreviewData {
    title: string;        // ex: "Sinal — Volume Russo"
    subtitle: string;     // ex: "R$ 50,00 · Pix"
    cta?: string;         // ex: "Toque para pagar"
}

export interface BubbleMessage {
    id: string;
    from: BubbleFrom;
    agent?: BubbleAgent;
    text: string;
    /** Renderiza um card de prévia (link de pagamento, etc) abaixo do texto */
    preview?: PaymentPreviewData;
    /** Em ms — quanto tempo este balão fica visível antes do próximo */
    holdMs?: number;
}

export interface TypingStep {
    id: string;
    type: 'typing';
    agent: BubbleAgent;
    /** Duração do indicador de typing em ms */
    durationMs: number;
}

export type ChatStep = BubbleMessage | TypingStep;

export type ChatSize = 'sm' | 'md' | 'lg';
