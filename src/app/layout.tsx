import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
        {/* Certifique-se de que não há espaços, comentários ou quebras de linha aqui */}
        <head>
            {/* O Next.js gere o <title>, etc., através do objeto 'metadata' */}
            {/* O local para os scripts é no final do body para melhor performance */}
        </head>
        {/* E certifique-se de que não há nada aqui também */}
        <body className={`${inter.variable} ${poppins.variable}`}>
        {children}

        {/* Scripts de Rastreamento (UTML e Pixels) */}
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