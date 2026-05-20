import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from './LandingPageData';

export const LandingFooter: React.FC = () => {
    return (
        <footer className="bg-[var(--paper-2)] border-t border-[var(--line)]">
            <div className="container-editorial py-20">
                <div className="grid grid-cols-12 gap-8 mb-16">
                    <div className="col-span-12 md:col-span-5 lg:col-span-6">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <Image
                                src="/weppy_logo_render.svg"
                                alt="Weppy"
                                width={36}
                                height={36}
                                className="transition-transform duration-500 group-hover:rotate-[-8deg]"
                            />
                            <span className="text-2xl text-[var(--ink)] font-semibold tracking-[-0.02em]">
                                Weppy
                            </span>
                        </Link>
                        <p className="mt-6 max-w-md text-[var(--ink-2)] text-base leading-relaxed">
                            Automação inteligente para WhatsApp. Pensada para empresas que vivem em conversas e querem parar de perder vendas por demora.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-[var(--line)] text-xs text-[var(--ink-3)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--wa-green)] animate-pulse-soft" />
                            <span className="uppercase tracking-[0.15em]">Operando · Brasília, DF</span>
                        </div>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <p className="eyebrow mb-5">Produto</p>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link href="/blog" className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
                                    Diário
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <p className="eyebrow mb-5">Suporte</p>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-3 lg:col-span-2">
                        <p className="eyebrow mb-5">Legal</p>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p className="text-xs text-[var(--ink-3)]">
                        © {new Date().getFullYear()} Weppy. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-[var(--ink-3)]">
                        Feito com cuidado em Brasília.
                    </p>
                </div>
            </div>
        </footer>
    );
};
