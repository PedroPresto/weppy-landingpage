// src/components/LandingPage/PurchaseToastController.tsx
'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { purchaseToasts } from './LandingPageData';

export const PurchaseToastController: React.FC = () => {

    useEffect(() => {
        let toastInterval: NodeJS.Timeout;

        const showRandomToast = () => {
            // 1. Escolhe um toast aleatório do array de mensagens
            const randomToast = purchaseToasts[Math.floor(Math.random() * purchaseToasts.length)];

            // 2. Monta a mensagem completa
            const message = `${randomToast.icon} ${randomToast.message} (${randomToast.time})`;

            // 3. Mostra o toast na tela com estilo personalizado
            toast(message, {
                duration: 5000, // Duração de 5 segundos na tela
                position: "bottom-left", // Posição no canto inferior esquerdo
                style: {
                    background: '#18181b', // Cor de fundo escura (zinc-900)
                    color: '#e4e4e7',     // Cor do texto clara (zinc-200)
                    border: '1px solid #3f3f46', // Borda (zinc-700)
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
                },
            });

            // 4. Agenda o próximo toast com um intervalo aleatório para parecer real
            const randomInterval = Math.random() * (45000 - 20000) + 20000; // Intervalo entre 20 e 45 segundos
            toastInterval = setTimeout(showRandomToast, randomInterval);
        };

        // Inicia o ciclo após um delay inicial de 12 segundos para não ser intrusivo
        const initialTimeout = setTimeout(showRandomToast, 12000);

        // Limpa os timers quando o componente é desmontado para evitar leaks de memória
        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(toastInterval);
        };
    }, []); // O array vazio [] garante que este efeito rode apenas uma vez

    return null; // Este componente não renderiza nada na tela, apenas controla a lógica dos toasts
};