// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { Toaster } from 'react-hot-toast'; // 1. IMPORTE O TOASTER

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
        <Toaster /> {/* 2. ADICIONE O TOASTER AQUI */}
        {children}

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17701970698">
        </script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17701970698');
        </script>

        {/* --- SCRIPTS DE RASTREAMENTO --- */}
        <Script
            id="utmify-base"
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            strategy="afterInteractive"
            data-utmify-prevent-xcod-sck
            data-utmify-prevent-subids
        />
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