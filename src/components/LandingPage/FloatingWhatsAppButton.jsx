// src/components/FloatingWhatsAppButton.jsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp

export const FloatingWhatsAppButton = () => {
    // Substitua pelo seu número de telemóvel em formato internacional, sem o '+' e sem espaços.
    const phoneNumber = '5561983123853';
    const message = 'Olá! Gostaria de mais informações sobre a Weppy.';

    // Codifica a mensagem para ser usada no URL
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out hover:scale-110"
            aria-label="Contactar via WhatsApp"
        >
            <FaWhatsapp size={28} /> {/* Usa o ícone importado com um tamanho de 28px */}
        </a>
    );
};