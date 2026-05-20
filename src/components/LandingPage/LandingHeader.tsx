'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface LandingHeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    onLoginClick: () => void;
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({ isMenuOpen, setIsMenuOpen, onLoginClick }) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: 'Recursos' },
       // { href: '#results', label: 'Casos' },
        { href: '#pricing', label: 'Planos' },
        { href: '/blog', label: 'Blog', external: false, isLink: true },
    ];

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--line)]'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="container-editorial">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="group flex items-center gap-3" aria-label="Weppy · início">
                        <Image
                            src="/weppy_logo_render.svg"
                            alt="Weppy"
                            width={32}
                            height={32}
                            className="transition-transform duration-500 group-hover:rotate-[-8deg]"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="text-xl tracking-tight text-[var(--ink)] font-semibold">
                                Weppy
                            </span>
                            <span className="text-[10px] mt-0.5 text-[var(--ink-3)] uppercase tracking-[0.18em] font-medium">
                                IA para WhatsApp
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((item) =>
                            item.isLink ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[var(--ink)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ) : (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[var(--ink)] transition-all duration-300 group-hover:w-full" />
                                </a>
                            )
                        )}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
                            aria-label="Alternar tema"
                        >
                            {mounted ? (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={onLoginClick}
                            className="cursor-pointer text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
                        >
                            Entrar
                        </button>
                        <a href="#pricing" className="btn-orange text-sm py-2 px-4">
                            <span>Começar agora</span>
                        </a>
                    </div>

                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-[var(--ink-3)]"
                            aria-label="Alternar tema"
                        >
                            {mounted ? (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
                        </button>
                        <button
                            className="text-[var(--ink)] p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-[var(--paper)] border-t border-[var(--line)] animate-slide-down">
                    <div className="container-editorial py-8 space-y-6">
                        {navLinks.map((item, i) =>
                            item.isLink ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-baseline justify-between group border-b border-[var(--line)] pb-3"
                                >
                                    <span className="editorial-number">0{i + 1}</span>
                                    <span className="text-2xl text-[var(--ink)] font-semibold group-hover:text-[var(--orange)] transition-colors tracking-tight">
                                        {item.label}
                                    </span>
                                </Link>
                            ) : (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-baseline justify-between group border-b border-[var(--line)] pb-3"
                                >
                                    <span className="editorial-number">0{i + 1}</span>
                                    <span className="text-2xl text-[var(--ink)] font-semibold group-hover:text-[var(--orange)] transition-colors tracking-tight">
                                        {item.label}
                                    </span>
                                </a>
                            )
                        )}
                        <div className="pt-4 space-y-3">
                            <button
                                onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
                                className="block w-full text-left text-sm text-[var(--ink-2)] hover:text-[var(--ink)]"
                            >
                                Entrar →
                            </button>
                            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="btn-orange w-full justify-center">
                                Começar agora
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
