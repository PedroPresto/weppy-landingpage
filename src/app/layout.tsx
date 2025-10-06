import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // 1. Importa as fontes do Google
import "./globals.css";

// 2. Configura as fontes, definindo pesos e subsets
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter", // Cria uma variável CSS para a fonte
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"], // Define os pesos que você usa
    variable: "--font-poppins", // Cria outra variável CSS
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
        <html lang="pt-br">
        <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        </body>
        </html>
    );
}