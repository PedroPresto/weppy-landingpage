import React from 'react';
import { companies } from './LandingPageData';

export const CompaniesSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 border-y border-[var(--line)] bg-[var(--paper-2)]">
            <div className="container-editorial">
                <div className="flex items-center gap-6 mb-10">
                    <span className="eyebrow">Confiam na Weppy</span>
                    <span className="flex-1 h-px bg-[var(--line)]" />
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll items-center" style={{ width: 'max-content' }}>
                        {[...companies, ...companies].map((company, index) => (
                            <span
                                key={index}
                                className="flex-shrink-0 mx-6 inline-flex items-center px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--line)] text-sm font-medium text-[var(--ink-2)]"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                    {/* Edge gradients for elegant fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--paper-2)] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--paper-2)] to-transparent" />
                </div>
            </div>
        </section>
    );
};
