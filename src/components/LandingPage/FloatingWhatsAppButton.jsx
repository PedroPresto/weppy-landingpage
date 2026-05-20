'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsAppButton = () => {
    const phoneNumber = '5561983123853';
    const message = 'Olá! Gostaria de mais informações sobre a Weppy.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Weppy no WhatsApp"
            className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 pl-4 pr-5 py-3 transition-all duration-500"
            style={{
                background: hovered ? 'var(--wa-green-deep)' : 'var(--wa-green)',
                color: '#ffffff',
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.28)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FaWhatsapp size={20} className="transition-transform duration-500 group-hover:scale-110" />
            <span className="hidden sm:inline text-sm font-medium tracking-tight">
                Falar com a equipe
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-pulse-soft" />
        </a>
    );
};
