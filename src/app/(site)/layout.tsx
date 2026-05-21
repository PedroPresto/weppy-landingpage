import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, ORGANIZATION_JSON_LD, WEBSITE_JSON_LD, SOFTWARE_APP_JSON_LD } from "@/lib/seo";

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
    axes: ["opsz", "SOFT"],
});

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: "%s · Weppy",
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "automação WhatsApp",
        "WhatsApp Business",
        "chatbot WhatsApp",
        "IA WhatsApp",
        "automatizar atendimento",
        "vendas pelo WhatsApp",
        "agente virtual WhatsApp",
        "Weppy",
    ],
    authors: [{ name: "Weppy", url: SITE_URL }],
    creator: "Weppy",
    publisher: "Weppy",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: SITE_URL,
        siteName: "Weppy",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [{
            url: `${SITE_URL}/og-image.png`,
            width: 1200,
            height: 630,
            alt: "Weppy — Automação Inteligente para WhatsApp com IA",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: { icon: "/icon.svg" },
    category: "technology",
};

export default function SiteLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className={`${fraunces.variable} ${geist.variable}`}>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_JSON_LD) }}
            />
        </head>
        <body>
        <ThemeProvider>
            <Toaster
                toastOptions={{
                    style: {
                        background: "var(--surface)",
                        color: "var(--ink)",
                        border: "1px solid var(--line)",
                        borderRadius: "12px",
                        fontFamily: "var(--font-geist), sans-serif",
                        fontSize: "0.9rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    },
                }}
            />
            {children}

            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17701970698"
            />
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
            <Script
                id="utmify-base"
                src="https://cdn.utmify.com.br/scripts/utms/latest.js"
                strategy="afterInteractive"
                data-utmify-prevent-xcod-sck="true"
                data-utmify-prevent-subids="true"
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
        </ThemeProvider>
        </body>
        </html>
    );
}
