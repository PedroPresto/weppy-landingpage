// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Weppy - Automação Inteligente para WhatsApp",
    description: "Não perca mais vendas por demorar a responder. Tenha um assistente virtual que vende por você, dia e noite.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
        <head>
            {/* ... */}
        </head>
        <body className={`${inter.variable} ${poppins.variable}`}>
        <Toaster />
        {children}

        {/* CORREÇÃO 1: Comentário estilo JSX e uso do componente Script para o Google Ads */}
        <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-17701970698"
        />

        {/* CORREÇÃO 2: Script inline do Google Ads formatado corretamente para Next.js */}
        <Script
            id="google-ads-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17701970698');
                `,
            }}
        />

        {/* --- SCRIPTS DE RASTREAMENTO --- */}
        <Script
            id="utmify-base"
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            strategy="afterInteractive"
            data-utmify-prevent-xcod-sck="true"
            data-utmify-prevent-subids="true"
        />
        {/* Nota: Adicionei ="true" nos atributos data- acima, pois o JSX exige valores para props,
            embora alguns parsers aceitem boolean shorthand, é mais seguro assim em TSX estrito */}

        <Script
            id="utmify-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                            window.pixelId = "68d6e463b3cc7954fc1faceb";
                            var a = document.createElement("script");
                            a.setAttribute("async", "");
                            a.setAttribute("defer", "");
                            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
                            document.head.appendChild(a);
                        `,
            }}
        />
        </body>
        </html>
    );
}