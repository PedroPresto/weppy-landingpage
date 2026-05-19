# Landing Page Redesign — "Cockpit de Conversão"

**Data:** 2026-05-19
**Status:** Design (aguardando review)
**Escopo:** Repaginação visual completa da landing page da Weppy (`weppy-landingpage`)

---

## 1. Contexto e problema

A landing atual usa um sistema chamado "Editorial / Quiet Luxury Tech": fundo cream (#F5F1E8), tipografia serif Fraunces, accent verde musgo (#2D4D3B). O resultado lembra marcas artesanais (barbearias, cafeterias, couro) — não combina com SaaS de chatbot WhatsApp para PMEs.

Além disso, **a paleta da marca Weppy (orange #FF5902 + purple #C27AFF) não aparece em lugar nenhum do código atual**. O redesign anterior, feito com `/frontend-design`, ignorou a identidade visual.

## 2. Objetivos

- Trocar o vocabulário visual de "editorial-artesanal" para "SaaS-WhatsApp"
- Trazer orange + purple da marca como protagonistas
- Usar verde WhatsApp apenas dentro de mockups de chat (contextualizado, não decorativo)
- Mostrar o produto via mockups realistas de conversa em vez de descrever via texto
- Manter estrutura de seções existente, com cortes/reorders pontuais para fluxo de conversão melhor
- Light dominante, com suporte a dark mode mantido

## 3. Abordagem escolhida

**"Cockpit de Conversão"** — base off-white quente, orange como cor de ação (CTAs, urgência, números-chave), purple como cor de inteligência (badges de IA, ícones de automação, hovers). Cada feature ganha um mini-diorama: uma conversa de WhatsApp demonstrando aquele recurso específico.

Trade-offs considerados e descartados:
- *Newsroom of Sales* — manteria estrutura editorial, baixo risco de implementação, mas perpetuaria sensação "intelectual demais" para PMEs.
- *Demo Reel* — animações como protagonistas, alto wow factor, mas frágil em mobile/acessibilidade/SEO.

## 4. Sistema de cor (design tokens)

Substitui completamente os tokens atuais em `src/app/globals.css`.

```css
:root {
  /* Surfaces */
  --bg: #FAFAF7;            /* base da página, off-white quente */
  --surface: #FFFFFF;       /* cards e elevações */
  --surface-2: #F4F2EC;     /* seções alternadas */
  --surface-chat: #E5DDD5;  /* fundo de mockup WhatsApp */

  /* Ink */
  --ink: #1A1614;
  --ink-2: #4A4540;
  --ink-3: #8A847B;
  --line: rgba(26,22,20,0.10);
  --line-strong: rgba(26,22,20,0.18);

  /* Brand */
  --orange: #FF5902;
  --orange-hover: #E64F00;
  --orange-soft: rgba(255,89,2,0.08);
  --purple: #C27AFF;
  --purple-deep: #8B3FE0;   /* purple acessível para texto */
  --purple-soft: rgba(194,122,255,0.10);

  /* Status / mockup */
  --wa-green: #25D366;      /* APENAS dentro de mockups */
  --wa-green-deep: #075E54;
  --success: #16A34A;
  --warning: #F59E0B;
}

.dark {
  --bg: #0F0E0C;
  --surface: #1A1815;
  --surface-2: #14120F;
  --surface-chat: #0B141A;  /* WhatsApp dark real */
  --ink: #F2EDDF;
  --ink-2: #B5AE9F;
  --ink-3: #6E685C;
  --orange: #FF6B1F;        /* leve ajuste para contraste AA */
  --orange-hover: #FF7E3D;
  --orange-soft: rgba(255,107,31,0.12);
  --purple: #D4A0FF;
  --purple-deep: #C27AFF;   /* em dark, o purple "claro" funciona como deep */
  --purple-soft: rgba(212,160,255,0.14);
}
```

**Princípio semântico:**
- Orange = ação humana, urgência, conversão (CTAs, badges "novo", números importantes)
- Purple = inteligência, automação, IA (badges "IA respondeu", ícones de cérebro/sparkles, gradientes em features de IA)
- Verde WhatsApp = exclusivamente dentro de mockups de chat (balão enviado, badge online)

## 5. Tipografia

Remove Fraunces. Usa **Geist** (já carregada no projeto) como família única, hierarquia por peso.

| Uso | Família | Peso | Tamanho | Tracking |
|---|---|---|---|---|
| Display (h1 hero) | Geist | 600 | `clamp(2.5rem, 6vw, 5rem)` | `-0.04em` |
| H2 seção | Geist | 600 | `clamp(2rem, 4vw, 3.25rem)` | `-0.03em` |
| H3 card | Geist | 600 | 1.25rem | `-0.02em` |
| Body | Geist | 400 | 1.0625rem | `-0.005em` |
| Eyebrow | Geist | 500 | 0.75rem uppercase | `0.18em`, cor `--purple-deep` |
| Mono (técnico) | `ui-monospace` stack (system) | 400/500 | 0.8125rem | normal |

Mono é pontual: labels como "IA · GPT-4o", "Latência: <800ms", "Status: online". Reforça vocabulário tech sem ser pesado. Usa stack do sistema (`ui-monospace, 'JetBrains Mono', SFMono-Regular, monospace`) para não adicionar dependência de fonte nova — `globals.css` já referencia essa stack na seção `.blog-content code`.

## 6. Componente-chave: ChatMockup

Componente React reusável que aparece em hero, features, how-it-works, comparison e testimonials.

**API:**
```tsx
<ChatMockup
  contactName="Pizzaria do João"
  status="online"
  size="lg" | "md" | "sm"  // lg = 360-420px largura (hero), md = 320px (features), sm = 260px (testimonials)
  loop={true}              // se true, mensagens entram em sequência infinita; se false, entrada única ao scroll
>
  <Bubble from="customer">Olá, vocês entregam no Pinheiros?</Bubble>
  <Bubble from="bot" agent="ai">Sim! Entregamos sim 🛵 ...</Bubble>
  <TypingIndicator agent="ai" />
  <Bubble from="bot" agent="ai">Calabresa grande R$ 49,90...</Bubble>
</ChatMockup>
```

**Variantes de balão:**
- `from="customer"` → balão à esquerda, fundo branco/surface-2
- `from="bot" agent="ai"` → balão à direita, fundo branco com badge purple "IA" no canto
- `from="bot" agent="human"` → balão à direita, fundo `--wa-green` com check duplo (handoff humano)

**Estrutura visual:**
- Frame externo simulando celular (cantos arredondados, shadow sutil)
- Header com avatar circular, nome do contato, ponto verde pulsando "online"
- Body com fundo `--surface-chat` (textura cream WhatsApp)
- Bubbles com `max-w-[80%]`, padding 0.75rem 1rem, rounded corners diferenciando origem
- Footer opcional com input "Digite uma mensagem..." (decorativo)

**Animações (CSS puro):**
- `bubble-pop` — entrada de balão com fade + scale 0.95→1.0 (300ms)
- `typing-dots` — 3 pontos pulsando sequencialmente (1.4s loop)
- `pulse-online` — bolinha verde com pulse (2s loop)

**Atrás do mockup (hero):**
Blob orange→purple gradiente em 10% opacity, blur generoso, sem animação. Dá profundidade sem ruído.

## 7. Componentes-base (utilities CSS)

Substituem os atuais `.btn-primary`, `.card-editorial`, `.chip`, etc.

**Botões (todos pílula, `rounded-full`):**
- `.btn-orange` — bg `--orange`, texto branco, sombra leve, hover `--orange-hover`
- `.btn-orange-soft` — bg `--orange-soft`, texto `--orange`, hover preenche
- `.btn-ghost` — transparente, borda `--line-strong`, hover bg `--surface-2`
- `.btn-purple` — bg `--purple-deep`, branco, usado em CTAs ligados a IA

**Cards:**
- `.card` — bg `--surface`, border `--line`, `rounded-2xl`, `shadow-sm`, padding 2rem
- `.card-feature` — `.card` + slot pra ícone topo + título + descrição + mockup embedded
- `.card-glow` — `.card` + `::after` com gradient orange→purple sutil (8% opacity) no topo do card

**Badges:**
- `.badge-ai` — bg `--purple-soft`, texto `--purple-deep`, ícone Sparkles, pill, 0.75rem
- `.badge-online` — ponto `--wa-green` pulsando + texto "online", inline
- `.badge-new` — bg `--orange`, texto branco, pill micro, 0.7rem

**Container:**
- `.container` — `max-w-7xl mx-auto px-6 md:px-12 xl:px-16`
- Section padding: `py-24 md:py-32`

## 8. Estrutura da página

Reduz de 11 para 9 seções. Reorder principal: `HowItWorks` sobe (mostra simplicidade antes de features).

| # | Seção | Ação | Justificativa |
|---|---|---|---|
| 1 | Hero | Redesenhar com mockup à direita | Protagonismo do produto |
| 2 | CompaniesSection | Manter, repintar | Prova social rápida pós-hero |
| 3 | VslSection | Manter, repintar | Vídeo demo |
| 4 | HowItWorksSection | **Mover pra cima**, redesenhar | PMEs precisam ver simplicidade antes |
| 5 | FeaturesSection | Redesenhar, cada feature com mockup | Show, don't tell |
| 6 | ComparisonSection | Redesenhar com 2 mockups antes/depois | Concretiza problema → solução |
| 7 | TestimonialsSection | Redesenhar como prints de WhatsApp | Coerente com tema |
| 8 | PricingSection | Repintar, destaque anual | Mantém narrativa |
| 9 | "Close" (Urgency + FAQ + CTA) | **Fundir** as três | Reduz 3 CTAs gigantes redundantes |

**Mantidas globais:**
- `LandingHeader`, `LandingFooter`
- `FloatingWhatsAppButton`
- `PurchaseToastController`

## 9. Hero detalhado

Layout grid de 12 colunas. Desktop: 7+5. Mobile: stack vertical (mockup abaixo do headline).

**Coluna esquerda (col-span-7):**

```
[badge-ai] Assistente de IA para WhatsApp

H1: Vendas no piloto automático.
    Direto do seu WhatsApp.
    (palavras "Vendas" e "WhatsApp" em --orange)

P:  A Weppy conecta uma IA — treinada com o seu negócio — direto
    ao WhatsApp Business. Ela qualifica, responde e vende 24h por
    dia. Sem chip novo. Sem complicação.

[btn-orange "Começar agora →"]  [btn-ghost "Ver demonstração"]

—— hairline ——

[badge-online] +2.300 negócios automatizados   ★ 4.9/5 satisfação
```

**Coluna direita (col-span-5):**

`<ChatMockup>` em tamanho `lg`, em loop, demonstrando:
1. Cliente: "Olá, vocês entregam aqui no Pinheiros?"
2. TypingIndicator (IA)
3. Bot/AI: "Olá! Entregamos sim 🛵 — fica no mesmo bairro?"
4. Cliente: "Sim! Quero uma calabresa grande"
5. TypingIndicator (IA)
6. Bot/AI: "Anotado! Confirmo R$ 49,90 + R$ 8 de entrega. Pix?"

Atrás do mockup: blob gradient orange→purple, opacity 0.1, blur lg, sem animação.

**Removidos do hero atual:**
- Eyebrow "Volume 01 · Edição 2026"
- Pull-quote lateral "Por que existimos"
- Ledger de métricas em serif (47%, 24/7, <1s, 7 dias)
- Halo radial cream

**Adicionados:**
- Badge AI no topo
- Mockup interativo como herói visual
- Prova social inline em forma de hairline

## 10. Animações e microinteractions

Tudo CSS puro. Sem libs. Tempos 280ms–700ms. Cubic-bezier `(0.32, 0.72, 0, 1)`.

**Mantidas:**
- `fade-in-up`, `fade-in`, `fade-in-left`, `fade-in-right`, `slide-down`, `scale-in`
- `marquee` (companies barra)
- Delays `100ms`–`1000ms`

**Novas:**
- `bubble-pop` — entrada de balão com fade + scale (300ms)
- `typing-dots` — 3 pontos pulsando em sequência (1.4s loop)
- `pulse-online` — ponto verde pulsando (2s loop)
- `gradient-shift` — gradiente em hover de CTAs (600ms)

**Removidas/inertes:**
- `.serif-italic` (Fraunces)
- Halo radial `--accent-soft`
- Todas as referências a `--accent` (moss green)

**Acessibilidade:** todas as animações reduzem a fade simples quando `prefers-reduced-motion: reduce`.

## 11. Responsividade

**Breakpoints (Tailwind padrão):**
- `< 640px` — mobile (1 col)
- `640px–1024px` — tablet (2 cols)
- `≥ 1024px` — desktop (2-3 cols)

**Hero mobile:** headline + sub + CTAs primeiro, mockup logo abaixo (não escondido). Mockup com `max-w-sm mx-auto`.

**Features mobile:** 1 col, mockup embedded no card ocupa largura total mas com `max-h` para não dominar.

**Pricing mobile:** plano anual destacado no topo (popular), outros abaixo.

## 12. Arquivos afetados

**Reescritos completamente:**
- `src/app/globals.css` — sistema de tokens novo
- `src/components/LandingPage/HeroSection.tsx`
- `src/components/LandingPage/FeaturesSection.tsx`
- `src/components/LandingPage/HowItWorksSection.tsx`
- `src/components/LandingPage/ComparisonSection.tsx`
- `src/components/LandingPage/TestimonialSection.tsx`

**Criados:**
- `src/components/LandingPage/ChatMockup/index.tsx`
- `src/components/LandingPage/ChatMockup/Bubble.tsx`
- `src/components/LandingPage/ChatMockup/TypingIndicator.tsx`
- `src/components/LandingPage/ChatMockup/ChatHeader.tsx`
- `src/components/LandingPage/CloseSection.tsx` — fusão Urgency+FAQ+CTA

**Repintados (mudanças menores):**
- `src/components/LandingPage/LandingHeader.tsx`
- `src/components/LandingPage/LandingFooter.tsx`
- `src/components/LandingPage/CompaniesSection.tsx`
- `src/components/LandingPage/VslSection.tsx`
- `src/components/LandingPage/PricingSection.tsx`
- `src/components/LandingPage/FloatingWhatsAppButton.jsx`
- `src/components/LandingPage/PurchaseToastController.tsx`

**Deletados:**
- `src/components/LandingPage/UrgencySection.tsx`
- `src/components/LandingPage/FaqSection.tsx`
- `src/components/LandingPage/CtaSection.tsx`
- Importações removidas em `src/app/(site)/page.tsx`

**Modificados:**
- `src/app/(site)/page.tsx` — nova ordem de seções, novos imports
- `src/components/LandingPage/LandingPageData.ts` — manter, mas `features[]` ganha um campo opcional `mockup: { messages: Bubble[] }` para alimentar os dioramas

## 13. Acessibilidade

- Contraste mínimo AA em todos os pares de cor (orange #FF5902 sobre branco passa; usar `--purple-deep` para texto, não `--purple`)
- Mockups são decorativos quando há texto descritivo na seção; quando informativos, ter `aria-label` com a mensagem-chave
- `prefers-reduced-motion` respeitado em todas as animações
- Foco visível em CTAs (outline orange ou purple)
- Estrutura semântica preservada: 1 `<h1>` no hero, `<h2>` em cada section

## 14. Fora de escopo

- Não tocar em `src/app/(payload)` (admin Payload)
- Não tocar no blog (`src/app/(site)/blog`)
- Não criar novos assets de imagem (logo permanece em `/public/Weppy_logo_render.svg`)
- Não otimizar SEO/metadata além do existente
- Não criar dark mode novo do zero — apenas atualizar os tokens dark

## 15. Critérios de aceite

- [ ] Tokens cream/moss removidos de `globals.css`, substituídos por sistema orange/purple
- [ ] Fraunces removida de todas as classes da landing (`.serif-italic`, `.editorial-number`, `.eyebrow`, headings) — **mantida no `next/font` em `layout.tsx` e dentro do bloco `.blog-content`**, porque o blog está fora de escopo e usa Fraunces para seu corpo de artigo
- [ ] Componente ChatMockup reusável funcionando com 3 variantes de balão e typing indicator
- [ ] Hero com mockup à direita no desktop e abaixo no mobile
- [ ] Pelo menos 4 das 8 features ganham mockup embedded
- [ ] Comparison section com 2 mockups (antes/depois)
- [ ] CloseSection unifica Urgency + FAQ + CTA
- [ ] Dark mode continua funcional (testar toggle)
- [ ] `prefers-reduced-motion` honrado
- [ ] Build (`next build`) passa sem novos warnings
