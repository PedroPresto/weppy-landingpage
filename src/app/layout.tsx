import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script'; // 1. Importe o componente otimizado do Next.js

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
            {/* O Next.js irá gerir o <title> e outras metatags aqui */}
        </head>
        <body className={`${inter.variable} ${poppins.variable}`}>
        {children}

        {/* --- SCRIPTS DE RASTREAMENTO ADICIONADOS DE FORMA OTIMIZADA --- */}

        {/* Script UTML Externo */}
        <Script
            id="utmify-base"
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            strategy="afterInteractive" // <-- A CHAVE PARA A PERFORMANCE
            data-utmify-prevent-xcod-sck
            data-utmify-prevent-subids
        />

        {/* Script UTML Inline (Pixel ID) */}
        <Script
            id="utmify-pixel"
            strategy="afterInteractive" // <-- A CHAVE PARA A PERFORMANCE
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