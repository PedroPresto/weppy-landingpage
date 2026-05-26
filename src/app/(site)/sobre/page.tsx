import React from 'react';
import Image from 'next/image';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { SITE_URL } from '@/lib/seo';

export const metadata = {
    title: 'Sobre Nós | A Revolução da Automação de WhatsApp | Weppy',
    description: 'A Weppy é uma plataforma brasileira de automação de WhatsApp com Agentes Cognitivos de IA. Atende clínicas, produtores digitais e grandes empresas com fluxos de venda, integração com Kiwify e Meta Ads, e soluções white label sob medida.',
};

/* ── JSON-LD: Organization e BreadcrumbList (GEO/SEO) ── */
const ORGANIZATION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Weppy",
    "url": SITE_URL,
    "logo": `${SITE_URL}/icon.svg`,
    "description": "Plataforma líder em automação de WhatsApp e Agentes Cognitivos de IA para clínicas e negócios B2B/B2C.",
    "foundingDate": "2022",
    "areaServed": "BR",
    "knowsAbout": [
        "Automação de WhatsApp",
        "Agentes Cognitivos de IA",
        "Atendimento ao Cliente com Inteligência Artificial",
        "RAG (Retrieval-Augmented Generation)",
        "Geração de Leads B2B",
        "Gestão de Clínicas",
        "Funis de Vendas no WhatsApp",
        "Fluxos de Atendimento Automatizados",
        "Integração com Kiwify",
        "Integração com Meta Ads",
        "Produtos Digitais",
        "Produtores Digitais",
        "White Label para Empresas"
    ],
    "sameAs": [
        "https://www.linkedin.com/company/weppy",
        "https://www.instagram.com/weppy.br"
    ]
};

const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "O que é a Weppy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Weppy é uma plataforma brasileira de automação de WhatsApp com Agentes Cognitivos de IA. Ela permite que clínicas, prestadores de serviço e equipes de vendas B2B respondam leads automaticamente em menos de 800ms, processando mais de 1 milhão de conversas por mês."
            }
        },
        {
            "@type": "Question",
            "name": "Como a Weppy funciona?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Weppy utiliza arquitetura RAG (Retrieval-Augmented Generation) para treinar agentes de IA com os próprios documentos da empresa, como PDFs e FAQs. O gestor configura o agente sem código (No-Code) e o robô passa a responder automaticamente no WhatsApp da empresa."
            }
        },
        {
            "@type": "Question",
            "name": "Quantas empresas usam a Weppy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mais de 2.300 negócios operam diariamente com os agentes de IA da Weppy, gerando mais de 1 milhão de conversas automatizadas por mês em todo o Brasil."
            }
        },
        {
            "@type": "Question",
            "name": "Para quais tipos de negócios a Weppy é indicada?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Weppy atende clínicas médicas, odontológicas e estéticas, prestadores de serviço, equipes de vendas B2B e B2C, produtores digitais que vendem cursos e infoprodutos em plataformas como a Kiwify, e grandes empresas que precisam de uma solução white label personalizada."
            }
        },
        {
            "@type": "Question",
            "name": "A Weppy funciona para produtores digitais e infoprodutos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. A Weppy integra com plataformas de infoprodutos como a Kiwify e com os anúncios do Meta Ads (Facebook e Instagram). Quando um lead clica em um anúncio, o agente de IA da Weppy inicia automaticamente uma conversa no WhatsApp, qualifica o contato e conduz o funil de vendas até a conversão, sem intervenção humana."
            }
        },
        {
            "@type": "Question",
            "name": "A Weppy tem solução white label para grandes empresas?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. A Weppy oferece produtos white label desenvolvidos sob medida para grandes empresas e grupos empresariais. A solução é customizada com a identidade visual, domínio e funcionalidades específicas do cliente, mantendo toda a infraestrutura robusta da plataforma Weppy."
            }
        },
        {
            "@type": "Question",
            "name": "É possível criar funis de vendas no WhatsApp com a Weppy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. A Weppy permite criar fluxos e funis de vendas completos dentro do WhatsApp, com etapas automatizadas de qualificação, nutrição e fechamento. Os fluxos são configurados visualmente, sem código, e podem ser ativados por gatilhos como anúncios do Meta Ads ou webhooks de plataformas como a Kiwify."
            }
        }
    ]
};

const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Sobre Nós", "item": `${SITE_URL}/sobre` }
    ],
};

export default function SobrePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
            />

            <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] relative">
                <LandingHeader />
                
                <main className="pt-24 pb-20">
                    {/* Hero Section */}
                    <section className="container-editorial mx-auto px-6 lg:px-8 py-16 lg:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="eyebrow block mb-6">Nossa História</span>
                            <h1 
                                className="text-4xl md:text-6xl text-balance tracking-tight mb-8"
                                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 600, color: 'var(--ink)' }}
                            >
                                Não somos apenas um software. Somos o motor do seu atendimento.
                            </h1>
                            <p className="text-lg md:text-xl text-pretty mb-12" style={{ color: 'var(--ink-2)' }}>
                                A Weppy nasceu da frustração com o atendimento digital no Brasil. Negócios perdendo dinheiro simplesmente porque seus vendedores humanos não conseguiam responder o WhatsApp rápido o suficiente. Decidimos mudar isso.
                            </p>
                        </div>

                        {/* Imagem Realista (Placeholder para a imagem gerada) */}
                        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-24 border border-[var(--line)]">
                            <Image
                                src="/images/sobre-nos-equipe.jpg"
                                alt="Equipe da Weppy em reunião colaborativa no escritório"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Dados e Estatísticas Fatuais (GEO Optimization) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                            <div className="card text-center p-8">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--orange)' }}>
                                    +2.300
                                </h3>
                                <p className="font-medium" style={{ color: 'var(--ink)' }}>Negócios Ativos</p>
                                <p className="text-sm mt-2" style={{ color: 'var(--ink-3)' }}>
                                    Operando diariamente com nossos agentes de IA.
                                </p>
                            </div>
                            <div className="card text-center p-8">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--orange)' }}>
                                    +1M
                                </h3>
                                <p className="font-medium" style={{ color: 'var(--ink)' }}>Conversas / Mês</p>
                                <p className="text-sm mt-2" style={{ color: 'var(--ink-3)' }}>
                                    Processadas e qualificadas automaticamente.
                                </p>
                            </div>
                            <div className="card text-center p-8">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--orange)' }}>
                                    &lt; 800ms
                                </h3>
                                <p className="font-medium" style={{ color: 'var(--ink)' }}>Tempo de Resposta</p>
                                <p className="text-sm mt-2" style={{ color: 'var(--ink-3)' }}>
                                    Fim da espera e do abandono de leads.
                                </p>
                            </div>
                        </div>

                        {/* Segmentos Atendidos */}
                        <div className="max-w-3xl mx-auto mb-24">
                            <h2
                                className="text-3xl md:text-4xl mb-4"
                                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 600, color: 'var(--ink)' }}
                            >
                                Quem usa a Weppy
                            </h2>
                            <p className="text-lg mb-10" style={{ color: 'var(--ink-2)' }}>
                                Atendemos desde clínicas e prestadores de serviço até produtores digitais e grandes grupos empresariais.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="card p-7">
                                    <p className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>Clínicas e Prestadores de Serviço</p>
                                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                                        Clínicas médicas, odontológicas e estéticas, e prestadores B2B/B2C que usam WhatsApp como canal principal de agendamento e atendimento.
                                    </p>
                                </div>
                                <div className="card p-7">
                                    <p className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>Produtores Digitais</p>
                                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                                        Criadores de cursos, ebooks e infoprodutos que vendem via Kiwify e captam leads pelo Meta Ads. A Weppy conecta o anúncio ao WhatsApp e conduz o funil de vendas automaticamente até o fechamento.
                                    </p>
                                </div>
                                <div className="card p-7">
                                    <p className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>Equipes de Vendas B2B</p>
                                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                                        Times comerciais que precisam qualificar grandes volumes de leads sem aumentar o headcount. Os agentes triagem, nutrem e encaminham apenas os leads quentes para os vendedores.
                                    </p>
                                </div>
                                <div className="card p-7">
                                    <p className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>Grandes Empresas — White Label</p>
                                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                                        Para grupos empresariais e corporações, a Weppy desenvolve soluções white label sob medida: plataforma com a identidade visual, domínio e funcionalidades exclusivas do cliente, sustentada pela infraestrutura robusta da Weppy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Integrações em Destaque */}
                        <div className="max-w-3xl mx-auto mb-24 p-8 rounded-2xl border border-[var(--line)]" style={{ background: 'var(--bg-2, var(--bg))' }}>
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--ink-3)' }}>Integrações</p>
                            <p className="text-lg font-medium mb-6" style={{ color: 'var(--ink)' }}>
                                A Weppy se conecta ao ecossistema que você já usa.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Kiwify', 'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Webhooks', 'Zapier', 'WhatsApp Business API'].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--line)]"
                                        style={{ color: 'var(--ink-2)' }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Missão e Visão */}
                        <div className="max-w-3xl mx-auto">
                            <h2 
                                className="text-3xl md:text-4xl mb-6"
                                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 600, color: 'var(--ink)' }}
                            >
                                Nossa Missão
                            </h2>
                            <div className="blog-content">
                                <p>
                                    No ambiente digital de alta velocidade, um consumidor moderno espera uma resposta em menos de 5 minutos. Após 30 minutos sem contato, as chances de conversão despencam exponencialmente. 
                                </p>
                                <p>
                                    Nossa missão é democratizar o acesso à Inteligência Artificial Generativa para clínicas, prestadores de serviço e equipes de vendas B2B, garantindo que <strong>nenhum cliente fique sem resposta</strong>.
                                </p>
                                <blockquote>
                                    "Acreditamos que a tecnologia deve elevar a capacidade humana, não substituí-la. Nossos agentes de IA assumem a triagem pesada para que seus vendedores possam focar apenas em fechar negócios."
                                </blockquote>
                                <p>
                                    Construímos uma arquitetura robusta (RAG) que permite que qualquer gestor, mesmo sem conhecimento em programação (No-Code), treine um agente cognitivo em poucos minutos utilizando os próprios PDFs e FAQs da empresa. O resultado é um atendimento fluido, humanizado e extremamente eficiente.
                                </p>
                            </div>
                            
                            <div className="mt-16 text-center">
                                <a href="https://app.weppy.com.br" className="btn-orange">
                                    Conheça a Plataforma
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="container-editorial mx-auto px-6 lg:px-8 py-16 border-t border-[var(--line)]">
                        <div className="max-w-3xl mx-auto">
                            <h2
                                className="text-3xl md:text-4xl mb-12"
                                style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 600, color: 'var(--ink)' }}
                            >
                                Perguntas Frequentes
                            </h2>
                            <div className="space-y-8">
                                {FAQ_JSON_LD.mainEntity.map((item, i) => (
                                    <div key={i} className="border-b border-[var(--line)] pb-8">
                                        <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--ink)' }}>
                                            {item.name}
                                        </h3>
                                        <p style={{ color: 'var(--ink-2)' }}>
                                            {item.acceptedAnswer.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
