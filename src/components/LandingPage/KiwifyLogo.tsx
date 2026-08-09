import React from 'react';

/** Verde oficial da marca Kiwify, extraído do vetor original. */
export const KIWIFY_GREEN = '#02B168';
export const KIWIFY_GREEN_DEEP = '#018A51';

interface KiwifyLogoProps {
    className?: string;
    /** `mark` desenha o quadrado verde completo; `glyph` só o kiwi, herdando a cor. */
    variant?: 'mark' | 'glyph';
}

/**
 * Símbolo da Kiwify. Fica inline porque o arquivo tem ~1.3KB: evita uma
 * requisição e permite recolorir o glifo conforme o fundo.
 *
 * Marca de terceiro, usada aqui para identificar a plataforma de checkout
 * dos planos. Não deve ser apresentada como selo emitido pela Kiwify.
 */
export const KiwifyLogo: React.FC<KiwifyLogoProps> = ({ className = '', variant = 'mark' }) => (
    <svg
        viewBox="0 0 291.6 291.6"
        className={className}
        role="img"
        aria-label="Kiwify"
        xmlns="http://www.w3.org/2000/svg"
    >
        {variant === 'mark' && (
            <path
                fill={KIWIFY_GREEN}
                d="M50,291.6h191.6c27.6,0,50-22.4,50-50V50c0-27.6-22.4-50-50-50H50C22.4,0,0,22.4,0,50v191.6C0,269.2,22.4,291.6,50,291.6z"
            />
        )}
        <g fill={variant === 'mark' ? '#FFFFFF' : 'currentColor'} fillRule="evenodd" clipRule="evenodd">
            <path d="M171.3,161.9c0,18.8,19.4,31.8,19.4,15.3C190.7,159.4,171.3,149.8,171.3,161.9z" />
            <path d="M108.8,108.3c10.5,15.5,33.9,15.4,24.7,1.8C123.5,95.3,102,98.2,108.8,108.3z" />
            <path d="M106.8,144.3c18.1,4.9,35.8-10.5,19.8-14.8C109.5,124.9,95.1,141.1,106.8,144.3z" />
            <path d="M152,161.3c-11.3,15-3.5,37.1,6.4,23.9C169,170.9,159.2,151.6,152,161.3z" />
            <path d="M133.2,149.7c-17.1,7.7-21,30.8-5.9,24C143.4,166.4,144.2,144.7,133.2,149.7z" />
            <path d="M218.3,185.4c-14.4,15-34.6,24.3-57,24.3c-43.6,0-79-35.4-79-79c0-22.1,9.1-42.1,23.8-56.5l-19.5-21c-20.3,19.6-32.9,47-32.9,77.4c0,59.4,48.2,107.6,107.6,107.6c29.9,0,57-12.2,76.5-32L218.3,185.4z" />
        </g>
    </svg>
);
