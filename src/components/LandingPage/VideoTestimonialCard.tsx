'use client';

import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Injeta uma transformação Cloudinary logo após "/upload/".
 * Ex.: /upload/v123/file.mp4 -> /upload/q_auto,w_640/v123/file.mp4
 */
function withTransform(url: string, transform: string): string {
    return url.replace('/upload/', `/upload/${transform}/`);
}

/** Gera um poster (frame do vídeo) a partir da própria URL do Cloudinary. */
function posterFrom(url: string): string {
    return withTransform(url, 'so_0,q_auto,w_640').replace(/\.mp4($|\?)/, '.jpg$1');
}

/** Versão comprimida e redimensionada para entrega web. */
function streamFrom(url: string): string {
    return withTransform(url, 'q_auto,w_640');
}

export interface VideoTestimonialData {
    name: string;
    role: string;
    /** URL original (não transformada) do Cloudinary. */
    videoUrl: string;
}

interface VideoTestimonialCardProps extends VideoTestimonialData {
    className?: string;
}

export const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
    name,
    role,
    videoUrl,
    className = '',
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
        requestAnimationFrame(() => {
            videoRef.current?.play().catch(() => setPlaying(false));
        });
    };

    return (
        <div
            className={`group relative aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] bg-black ring-1 ring-[var(--line)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ${className}`}
        >
            <video
                ref={videoRef}
                src={streamFrom(videoUrl)}
                poster={posterFrom(videoUrl)}
                preload="none"
                playsInline
                controls={playing}
                onEnded={() => setPlaying(false)}
                className="h-full w-full object-cover"
            />

            {!playing && (
                <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Assistir depoimento de ${name}`}
                    className="absolute inset-0 flex flex-col items-center justify-end text-left"
                >
                    {/* Escurecimento pra legibilidade */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 transition-opacity duration-300 group-hover:from-black/60"
                    />

                    {/* Botão de play central */}
                    <span
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    >
                        <Play className="ml-1 h-6 w-6 fill-[var(--orange)] text-[var(--orange)]" />
                    </span>

                    {/* Identificação */}
                    <span className="relative z-10 w-full p-5">
                        <span className="block text-base font-semibold text-white leading-tight">{name}</span>
                        <span className="block text-xs text-white/80 mt-0.5">{role}</span>
                    </span>
                </button>
            )}
        </div>
    );
};
