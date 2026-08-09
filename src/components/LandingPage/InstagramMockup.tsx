'use client';

import React from 'react';
import { Heart, MessageCircle, Send, MoreHorizontal, ExternalLink, Bookmark } from 'lucide-react';

/** Gradiente espectral do Instagram, usado como acento pontual. */
const SPECTRAL = 'linear-gradient(115deg, #FEDA75 0%, #FA7E1E 20%, #D62976 52%, #962FBF 76%, #4F5BD5 100%)';

export interface InstagramMockupProps {
    /** @ da conta que publica */
    handle: string;
    /** Legenda do post */
    caption: string;
    /** @ de quem comenta */
    commenter: string;
    /** Palavra-chave destacada dentro do comentário */
    keyword: string;
    /** Resposta pública no comentário */
    reply: string;
    /** Texto do direct */
    dm: string;
    /** Rótulo do botão com link dentro do direct */
    button: string;
}

/**
 * Reprodução da jornada real da automação: o post, o comentário do seguidor,
 * a resposta pública e o direct que chega em seguida. É a mesma sequência que
 * o cliente vê dentro do produto, na prévia ao vivo da automação.
 */
export const InstagramMockup: React.FC<InstagramMockupProps> = ({
    handle,
    caption,
    commenter,
    keyword,
    reply,
    dm,
    button,
}) => (
    <div className="w-full max-w-[400px] mx-auto">
        {/* ── O post ── */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden shadow-[0_20px_50px_-30px_rgba(26,22,20,0.35)]">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--line)]">
                <span className="relative grid place-items-center w-9 h-9 rounded-full shrink-0" style={{ backgroundImage: SPECTRAL }}>
                    <span className="absolute inset-[2px] rounded-full bg-[var(--surface)]" />
                    <span className="relative text-[11px] font-bold uppercase text-[var(--ink)]">{handle.charAt(0)}</span>
                </span>
                <span className="text-sm font-semibold text-[var(--ink)] flex-1 truncate">@{handle}</span>
                <MoreHorizontal className="w-4 h-4 text-[var(--ink-3)] shrink-0" />
            </div>

            {/* Área da imagem do post */}
            <div
                className="relative h-40 flex items-end"
                style={{ backgroundImage: SPECTRAL, opacity: 0.92 }}
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(120% 100% at 20% 0%, rgba(255,255,255,0.22), transparent 60%)' }}
                />
                <div className="relative px-4 pb-4">
                    <span className="inline-flex items-center rounded-full bg-black/25 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                        seu post de hoje
                    </span>
                </div>
            </div>

            <div className="px-4 py-3">
                <div className="flex items-center gap-4 mb-3">
                    <Heart className="w-[18px] h-[18px] text-[var(--ink-2)]" strokeWidth={2} />
                    <MessageCircle className="w-[18px] h-[18px] text-[var(--ink-2)]" strokeWidth={2} />
                    <Send className="w-[18px] h-[18px] text-[var(--ink-2)]" strokeWidth={2} />
                    <Bookmark className="w-[18px] h-[18px] text-[var(--ink-3)] ml-auto" strokeWidth={2} />
                </div>
                <p className="text-[13px] leading-snug text-[var(--ink-2)]">
                    <span className="font-semibold text-[var(--ink)]">@{handle}</span> {caption}
                </p>

                {/* O comentário que dispara tudo */}
                <div className="mt-3 pt-3 border-t border-[var(--line)] flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--surface-2)] border border-[var(--line)] shrink-0" />
                    <p className="text-[13px] leading-snug text-[var(--ink-2)]">
                        <span className="font-semibold text-[var(--ink)]">@{commenter}</span>{' '}
                        <mark className="rounded bg-[var(--orange-soft)] px-1 font-bold text-[var(--orange)]">{keyword}</mark>
                    </p>
                </div>
            </div>
        </div>

        {/* ── Conector ── */}
        <div className="flex flex-col items-center py-3" aria-hidden="true">
            <span className="w-px h-5 bg-[var(--line-strong)]" />
            <span className="mono text-[var(--ink-3)] py-1.5">em 2 segundos</span>
            <span className="w-px h-5 bg-[var(--line-strong)]" />
        </div>

        {/* ── A resposta pública ── */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
            <p className="mono text-[var(--ink-3)] mb-1.5">resposta no comentário</p>
            <p className="text-[13px] leading-snug text-[var(--ink)]">{reply}</p>
        </div>

        {/* ── O direct ── */}
        <div className="mt-3 flex justify-end">
            <div className="max-w-[92%]">
                <div
                    className="rounded-[20px] rounded-br-md px-4 py-3 text-white shadow-[0_16px_34px_-20px_rgba(214,41,118,0.85)]"
                    style={{ backgroundImage: SPECTRAL }}
                >
                    <p className="mono mb-1.5 text-white/70">direct</p>
                    <p className="text-[13px] leading-relaxed">{dm}</p>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-[12px] font-semibold text-[var(--ink)]">
                    {button}
                    <ExternalLink className="w-3 h-3 text-[var(--ink-3)]" />
                </div>
                <p className="mt-1.5 text-right text-[11px] text-[var(--ink-3)]">enviado agora</p>
            </div>
        </div>
    </div>
);
