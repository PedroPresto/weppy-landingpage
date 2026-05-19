# Landing Page Redesign — "Cockpit de Conversão" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repaginar visualmente a landing page da Weppy trocando o sistema "Editorial / Quiet Luxury Tech" (cream + serif + moss) por "Cockpit de Conversão" (off-white + orange/purple da marca + sans + mockups de WhatsApp).

**Architecture:** Sistema de design tokens em CSS variables substitui o atual em `globals.css`. Componente `ChatMockup` reusável é criado para demonstrar funcionalidades via mini-conversas embedded. Estrutura da página passa de 11 para 9 seções (Urgency+FAQ+CTA fundidas em `CloseSection`, `HowItWorks` movida pra antes de `Features`).

**Tech Stack:** Next.js 15.4, React 19, Tailwind v4, TypeScript, `next-themes`, `lucide-react`. Sem libs novas.

**Conventions deste plano:**
- Não há suite de testes na landing — não escrevemos testes unitários. Validação é visual + build do Next.
- O usuário pediu para pular checagens automáticas (typecheck/build/lint) após cada edit. Não rode `next build` entre tasks; commits são o checkpoint.
- Todos os caminhos são relativos a `weppy-landingpage/` (raiz do repositório dessa landing).
- Português nas mensagens de commit e UI.

---

## File Structure

```
docs/superpowers/specs/2026-05-19-landing-redesign-cockpit-design.md   (referência)

src/
  app/
    (site)/
      layout.tsx                          # MODIFY: tokens em Toaster
      page.tsx                            # MODIFY: nova ordem + imports
    globals.css                           # REWRITE major: tokens + utilities + animations
  components/
    LandingPage/
      ChatMockup/                         # NEW DIR
        index.tsx                         # NEW
        ChatHeader.tsx                    # NEW
        Bubble.tsx                        # NEW
        TypingIndicator.tsx               # NEW
        PaymentPreview.tsx                # NEW
        types.ts                          # NEW
        useChatLoop.ts                    # NEW (hook)
      HeroSection.tsx                     # REWRITE
      HowItWorksSection.tsx               # REWRITE
      FeaturesSection.tsx                 # REWRITE
      ComparisonSection.tsx               # REWRITE
      TestimonialSection.tsx              # REWRITE
      CloseSection.tsx                    # NEW (Urgency+FAQ+CTA fundidas)
      LandingHeader.tsx                   # REPAINT
      LandingFooter.tsx                   # REPAINT
      CompaniesSection.tsx                # REPAINT
      VslSection.tsx                      # REPAINT
      PricingSection.tsx                  # REPAINT
      FloatingWhatsAppButton.jsx          # REPAINT
      PurchaseToastController.tsx         # REPAINT
      LandingPageData.ts                  # MODIFY: features[].mockup, hero mockup, before/after mockups
      UrgencySection.tsx                  # DELETE
      FaqSection.tsx                      # DELETE
      CtaSection.tsx                      # DELETE
```

---

## Task 1: Reescrever tokens de cor em `globals.css`

**Files:**
- Modify: `src/app/globals.css` (linhas 1-61: header + `:root` + `.dark`)

- [ ] **Step 1: Substituir o bloco inicial (header de comentário + `:root` + `.dark`)**

Abra `src/app/globals.css`. Substitua o conteúdo das linhas 1 a 61 (`@import "tailwindcss";` até o fim do bloco `.dark { ... }`) pelo seguinte:

```css
@import "tailwindcss";

/* =====================================================================
   WEPPY — COCKPIT DE CONVERSÃO DESIGN SYSTEM
   Off-white quente + orange (ação) + purple (IA) + verde WhatsApp (mockups)
   Tipografia: Geist (corpo e display) + ui-monospace (técnico)
   ===================================================================== */

:root {
  /* Surfaces */
  --bg: #FAFAF7;
  --surface: #FFFFFF;
  --surface-2: #F4F2EC;
  --surface-chat: #E5DDD5;

  /* Ink */
  --ink: #1A1614;
  --ink-2: #4A4540;
  --ink-3: #8A847B;
  --line: rgba(26, 22, 20, 0.10);
  --line-strong: rgba(26, 22, 20, 0.18);

  /* Brand */
  --orange: #FF5902;
  --orange-hover: #E64F00;
  --orange-soft: rgba(255, 89, 2, 0.08);
  --purple: #C27AFF;
  --purple-deep: #8B3FE0;
  --purple-soft: rgba(194, 122, 255, 0.10);

  /* Status / mockup */
  --wa-green: #25D366;
  --wa-green-deep: #075E54;
  --success: #16A34A;
  --warning: #F59E0B;

  /* Legacy bridge (componentes antigos continuam funcionando até serem migrados) */
  --paper: var(--bg);
  --paper-2: var(--surface-2);
  --paper-3: var(--surface);
  --bg-page: var(--bg);
  --bg-section-alt: var(--surface-2);
  --bg-card: var(--surface);
  --bg-header: rgba(250, 250, 247, 0.85);
  --border-default: var(--line);
  --text-primary: var(--ink);
  --text-secondary: var(--ink-2);
  --text-muted: var(--ink-3);
  --accent: var(--orange);
  --accent-ink: #FFFFFF;
  --accent-soft: var(--orange-soft);
  --accent-line: rgba(255, 89, 2, 0.30);
}

.dark {
  --bg: #0F0E0C;
  --surface: #1A1815;
  --surface-2: #14120F;
  --surface-chat: #0B141A;

  --ink: #F2EDDF;
  --ink-2: #B5AE9F;
  --ink-3: #6E685C;
  --line: rgba(242, 237, 223, 0.10);
  --line-strong: rgba(242, 237, 223, 0.22);

  --orange: #FF6B1F;
  --orange-hover: #FF7E3D;
  --orange-soft: rgba(255, 107, 31, 0.12);
  --purple: #D4A0FF;
  --purple-deep: #C27AFF;
  --purple-soft: rgba(212, 160, 255, 0.14);

  --wa-green: #25D366;
  --wa-green-deep: #075E54;
  --success: #22C55E;
  --warning: #FBBF24;

  --paper: var(--bg);
  --paper-2: var(--surface-2);
  --paper-3: var(--surface);
  --bg-page: var(--bg);
  --bg-section-alt: var(--surface-2);
  --bg-card: var(--surface);
  --bg-header: rgba(15, 14, 12, 0.85);
  --border-default: var(--line);
  --text-primary: var(--ink);
  --text-secondary: var(--ink-2);
  --text-muted: var(--ink-3);
  --accent: var(--orange);
  --accent-ink: #FFFFFF;
  --accent-soft: var(--orange-soft);
  --accent-line: rgba(255, 107, 31, 0.30);
}
```

**Note:** Os "legacy bridge" tokens mantêm `--paper`, `--accent`, etc. funcionando enquanto componentes não migrados ainda usam essas variáveis. Vamos remover gradualmente.

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): substituir tokens editoriais por sistema Cockpit"
```

---

## Task 2: Reescrever bloco BASE de `globals.css` (body, typography)

**Files:**
- Modify: `src/app/globals.css` (bloco `/* BASE */`, linhas ~63-149 do arquivo original — agora deslocadas após Task 1)

- [ ] **Step 1: Localizar e substituir o bloco BASE**

Localize o bloco que começa com `/* ===== BASE ===== */` (logo após `.dark { ... }`) e termina antes do bloco `/* ===== COMPONENT UTILITIES ===== */`. Substitua tudo entre esses dois comentários por:

```css
/* =====================================================================
   BASE
   ===================================================================== */

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-geist), 'Geist', ui-sans-serif, system-ui, sans-serif;
  background-color: var(--bg);
  color: var(--ink);
  min-height: 100vh;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.005em;
}

/* Typography — Geist como família única, hierarquia por peso */
h1, h2, h3, h4, h5, h6, .display {
  font-family: var(--font-geist), 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--ink);
}

h1, .display {
  letter-spacing: -0.04em;
  line-height: 1.0;
}

.eyebrow {
  font-family: var(--font-geist), 'Geist', ui-sans-serif, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--purple-deep);
}

.mono {
  font-family: ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, monospace;
  font-size: 0.8125rem;
  letter-spacing: 0;
}

/* Scrollbar */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: var(--surface-2); }
::-webkit-scrollbar-thumb {
  background: var(--line-strong);
  border-radius: 8px;
  border: 3px solid var(--surface-2);
}
::-webkit-scrollbar-thumb:hover { background: var(--ink-3); }

::selection {
  background: var(--orange);
  color: #FFFFFF;
}
```

**Note:** O `body::before` (paper grain noise) foi removido — era específico do estilo editorial.

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): substituir tipografia editorial por Geist sans"
```

---

## Task 3: Reescrever utilities de `globals.css` (buttons, cards, badges)

**Files:**
- Modify: `src/app/globals.css` (bloco `/* COMPONENT UTILITIES */`)

- [ ] **Step 1: Substituir bloco de utilities**

Localize o bloco que começa com `/* ===== COMPONENT UTILITIES ===== */` e termina antes de `/* ===== ANIMATIONS — restrained, editorial ===== */`. Substitua por:

```css
/* =====================================================================
   COMPONENT UTILITIES
   ===================================================================== */

.hairline { border-color: var(--line); }
.hairline-strong { border-color: var(--line-strong); }

/* Buttons — pílulas modernas */
.btn-orange {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--orange);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.005em;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(255, 89, 2, 0.2), 0 4px 12px rgba(255, 89, 2, 0.12);
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
  position: relative;
  overflow: hidden;
}
.btn-orange:hover {
  background: var(--orange-hover);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(255, 89, 2, 0.25), 0 8px 20px rgba(255, 89, 2, 0.18);
}

.btn-orange-soft {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--orange-soft);
  color: var(--orange);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 9999px;
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-orange-soft:hover {
  background: var(--orange);
  color: #FFFFFF;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: var(--ink);
  font-weight: 500;
  font-size: 0.95rem;
  border: 1px solid var(--line-strong);
  border-radius: 9999px;
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-ghost:hover {
  border-color: var(--ink);
  background: var(--surface-2);
}

.btn-purple {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--purple-deep);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 9999px;
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-purple:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* Legacy alias — componentes antigos que ainda usam .btn-primary funcionam como .btn-orange */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--orange);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(255, 89, 2, 0.2), 0 4px 12px rgba(255, 89, 2, 0.12);
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-primary:hover {
  background: var(--orange-hover);
  transform: translateY(-1px);
}

.btn-accent {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--purple-deep);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 9999px;
  transition: all 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-accent:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* Cards */
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 320ms cubic-bezier(0.32, 0.72, 0, 1);
}
.card:hover {
  border-color: var(--line-strong);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.card-glow {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 2rem;
  overflow: hidden;
  transition: all 320ms cubic-bezier(0.32, 0.72, 0, 1);
}
.card-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--orange) 0%, var(--purple) 100%);
  opacity: 0.6;
}
.card-glow:hover {
  border-color: var(--line-strong);
  box-shadow: 0 6px 20px rgba(255, 89, 2, 0.08);
  transform: translateY(-2px);
}

/* Legacy alias */
.card-editorial {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 320ms cubic-bezier(0.32, 0.72, 0, 1);
}
.card-editorial:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
}

/* Badges */
.badge-ai {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  background: var(--purple-soft);
  color: var(--purple-deep);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.005em;
}

.badge-online {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: var(--ink-2);
  font-weight: 500;
}
.badge-online::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: var(--wa-green);
  animation: pulse-online 2s ease-in-out infinite;
}

.badge-new {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  background: var(--orange);
  color: #FFFFFF;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Chip legacy alias */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--purple-soft);
  color: var(--purple-deep);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Misc */
.rule-thin {
  height: 1px;
  background: linear-gradient(to right, var(--line) 0%, var(--line) 50%, transparent 100%);
}

.divider-h {
  width: 100%;
  height: 1px;
  background: var(--line);
}

.glass-tag {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink-2);
}
.glass-tag:hover {
  border-color: var(--line-strong);
  color: var(--ink);
}

/* Kill old aurora */
.aurora-bg, .aurora-gradient, .aurora-1, .aurora-2, .aurora-3 { display: none !important; }
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): substituir utilities por buttons pílula e cards modernos"
```

---

## Task 4: Adicionar animações de chat em `globals.css`

**Files:**
- Modify: `src/app/globals.css` (bloco `/* ANIMATIONS */`)

- [ ] **Step 1: Substituir bloco de animações**

Localize o bloco `/* ===== ANIMATIONS — restrained, editorial ===== */`. Substitua até antes de `/* ===== BLOG CONTENT ===== */` por:

```css
/* =====================================================================
   ANIMATIONS
   ===================================================================== */

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-16px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(16px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes ticker-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Chat-specific */
@keyframes bubble-pop {
  from { opacity: 0; transform: scale(0.95) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes typing-dot {
  0%, 60%, 100% { opacity: 0.3; transform: scale(0.85); }
  30% { opacity: 1; transform: scale(1); }
}
@keyframes pulse-online {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  50% { box-shadow: 0 0 0 6px rgba(37, 211, 102, 0); }
}

.animate-fade-in { animation: fade-in 600ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }
.animate-fade-in-up { animation: fade-in-up 700ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }
.animate-fade-in-left { animation: fade-in-left 700ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }
.animate-fade-in-right { animation: fade-in-right 700ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }
.animate-slide-down { animation: slide-down 280ms cubic-bezier(0.32, 0.72, 0, 1); }
.animate-scale-in { animation: scale-in 600ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }
.animate-scroll { animation: marquee 40s linear infinite; }
.animate-pulse-soft { animation: ticker-pulse 2.4s ease-in-out infinite; }

.animate-bubble-pop { animation: bubble-pop 320ms cubic-bezier(0.32, 0.72, 0, 1) forwards; opacity: 0; }

/* Kill legacy noisy animations */
.animate-blob, .animate-gradient-x, .animate-twinkle, .animate-spin-slow,
.animate-float, .animate-float-delayed, .animate-border-spin,
.animate-line-move, .animate-line-move-reverse, .animate-sutil { animation: none !important; }

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-700 { animation-delay: 700ms; }
.animation-delay-800 { animation-delay: 800ms; }
.animation-delay-1000 { animation-delay: 1000ms; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): adicionar animações bubble-pop, typing-dot, pulse-online"
```

---

## Task 5: Remover Fraunces da landing, manter no blog em `globals.css`

**Files:**
- Modify: `src/app/globals.css` (bloco `.blog-content` permanece; remove `.serif-italic`, `.editorial-number`)

- [ ] **Step 1: Remover `.serif-italic` e `.editorial-number`**

Procure pelas classes `.serif-italic` e `.editorial-number` no `globals.css`. Elas devem estar logo após o bloco de tipografia. Substitua pelas versões neutralizadas (mantém className funcionando mas sem efeito serif):

```css
/* Removido — Fraunces fica só no blog. Mantemos classes inertes para evitar quebras temporárias. */
.serif-italic {
  font-family: var(--font-geist), 'Geist', ui-sans-serif, sans-serif;
  font-style: normal;
  color: var(--orange);
}

.editorial-number {
  font-family: ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, monospace;
  font-size: 0.8125rem;
  letter-spacing: 0;
  color: var(--ink-3);
}
```

- [ ] **Step 2: Confirmar que `.blog-content` continua usando Fraunces**

Role para o final do arquivo `globals.css` e confirme que o bloco `/* BLOG CONTENT */` ainda existe com `font-family: var(--font-fraunces)` dentro. **Não mexer nele.**

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): neutralizar classes serif na landing, manter Fraunces no blog"
```

---

## Task 6: Atualizar toast styling em `layout.tsx`

**Files:**
- Modify: `src/app/(site)/layout.tsx` (Toaster styles)

- [ ] **Step 1: Atualizar `Toaster toastOptions`**

Em `src/app/(site)/layout.tsx`, localize o `<Toaster toastOptions={...}>` (linhas 91-102). Substitua o objeto `style`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/app/(site)/layout.tsx
git commit -m "feat(design): atualizar Toaster com novos tokens"
```

---

## Task 7: Criar tipos do `ChatMockup`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/types.ts`

- [ ] **Step 1: Criar `types.ts`**

```ts
// src/components/LandingPage/ChatMockup/types.ts

export type BubbleFrom = 'customer' | 'bot';
export type BubbleAgent = 'ai' | 'human';

export interface PaymentPreviewData {
    title: string;        // ex: "Sinal — Volume Russo"
    subtitle: string;     // ex: "R$ 50,00 · Pix"
    cta?: string;         // ex: "Toque para pagar"
}

export interface BubbleMessage {
    id: string;
    from: BubbleFrom;
    agent?: BubbleAgent;
    text: string;
    /** Renderiza um card de prévia (link de pagamento, etc) abaixo do texto */
    preview?: PaymentPreviewData;
    /** Em ms — quanto tempo este balão fica visível antes do próximo */
    holdMs?: number;
}

export interface TypingStep {
    id: string;
    type: 'typing';
    agent: BubbleAgent;
    /** Duração do indicador de typing em ms */
    durationMs: number;
}

export type ChatStep = BubbleMessage | TypingStep;

export type ChatSize = 'sm' | 'md' | 'lg';
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/types.ts
git commit -m "feat(chat-mockup): tipos base para mensagens e steps"
```

---

## Task 8: Criar `Bubble.tsx`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/Bubble.tsx`

- [ ] **Step 1: Criar componente**

```tsx
// src/components/LandingPage/ChatMockup/Bubble.tsx
'use client';

import React from 'react';
import { Sparkles, Check, CheckCheck } from 'lucide-react';
import type { BubbleMessage } from './types';
import { PaymentPreview } from './PaymentPreview';

interface BubbleProps {
    message: BubbleMessage;
}

export const Bubble: React.FC<BubbleProps> = ({ message }) => {
    const isCustomer = message.from === 'customer';
    const isAI = !isCustomer && message.agent === 'ai';
    const isHuman = !isCustomer && message.agent === 'human';

    const alignment = isCustomer ? 'justify-start' : 'justify-end';
    const bubbleColor = isCustomer
        ? 'bg-white text-[var(--ink)]'
        : isHuman
            ? 'bg-[var(--wa-green)] text-white'
            : 'bg-white text-[var(--ink)] ring-1 ring-[var(--purple-soft)]';
    const tail = isCustomer
        ? 'rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md'
        : 'rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-2xl';

    return (
        <div className={`flex ${alignment} animate-bubble-pop`}>
            <div className={`relative max-w-[80%] px-3.5 py-2.5 ${bubbleColor} ${tail} shadow-[0_1px_2px_rgba(0,0,0,0.08)]`}>
                {isAI && (
                    <span className="badge-ai absolute -top-2 -left-2 text-[0.625rem] px-1.5 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
                        IA
                    </span>
                )}
                <p className="text-[0.875rem] leading-snug whitespace-pre-line">
                    {message.text}
                </p>
                {message.preview && <PaymentPreview data={message.preview} />}
                <div className="flex items-center justify-end gap-1 mt-1 -mb-0.5">
                    <span className={`text-[0.625rem] ${isHuman ? 'text-white/80' : 'text-[var(--ink-3)]'}`}>
                        {timeLabel()}
                    </span>
                    {!isCustomer && (
                        isHuman
                            ? <CheckCheck className="w-3 h-3 text-white/80" strokeWidth={2.5} />
                            : <Check className="w-3 h-3 text-[var(--ink-3)]" strokeWidth={2.5} />
                    )}
                </div>
            </div>
        </div>
    );
};

function timeLabel(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/Bubble.tsx
git commit -m "feat(chat-mockup): balão com variantes customer/ai/human"
```

---

## Task 9: Criar `PaymentPreview.tsx`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/PaymentPreview.tsx`

- [ ] **Step 1: Criar componente**

```tsx
// src/components/LandingPage/ChatMockup/PaymentPreview.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { PaymentPreviewData } from './types';

interface PaymentPreviewProps {
    data: PaymentPreviewData;
}

export const PaymentPreview: React.FC<PaymentPreviewProps> = ({ data }) => {
    return (
        <div className="mt-2 -mx-1 rounded-xl overflow-hidden border border-black/5 bg-[var(--surface-2)]">
            <div className="px-3 py-2.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--orange)] to-[var(--purple-deep)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[0.6875rem] font-bold tracking-wider">Pix</span>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[0.8125rem] font-semibold text-[var(--ink)] leading-tight truncate">
                        {data.title}
                    </p>
                    <p className="text-[0.6875rem] text-[var(--ink-3)] leading-tight mt-0.5 truncate">
                        {data.subtitle}
                    </p>
                </div>
            </div>
            {data.cta && (
                <div className="px-3 py-2 border-t border-black/5 bg-white flex items-center justify-between">
                    <span className="text-[0.75rem] font-medium text-[var(--orange)]">{data.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--orange)]" strokeWidth={2.5} />
                </div>
            )}
        </div>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/PaymentPreview.tsx
git commit -m "feat(chat-mockup): card de prévia de link de pagamento"
```

---

## Task 10: Criar `TypingIndicator.tsx`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/TypingIndicator.tsx`

- [ ] **Step 1: Criar componente**

```tsx
// src/components/LandingPage/ChatMockup/TypingIndicator.tsx
'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import type { BubbleAgent } from './types';

interface TypingIndicatorProps {
    agent: BubbleAgent;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ agent }) => {
    const isAI = agent === 'ai';

    return (
        <div className="flex justify-end animate-bubble-pop">
            <div className={`relative px-4 py-3 rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-2xl ${isAI ? 'bg-white ring-1 ring-[var(--purple-soft)]' : 'bg-[var(--wa-green)]'} shadow-[0_1px_2px_rgba(0,0,0,0.08)]`}>
                {isAI && (
                    <span className="badge-ai absolute -top-2 -left-2 text-[0.625rem] px-1.5 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
                        IA
                    </span>
                )}
                <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '0ms' }} />
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '200ms' }} />
                    <span className={`w-1.5 h-1.5 rounded-full ${isAI ? 'bg-[var(--purple-deep)]' : 'bg-white'}`} style={{ animation: 'typing-dot 1.4s ease-in-out infinite', animationDelay: '400ms' }} />
                </div>
            </div>
        </div>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/TypingIndicator.tsx
git commit -m "feat(chat-mockup): indicador de typing com 3 pontos animados"
```

---

## Task 11: Criar `ChatHeader.tsx`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/ChatHeader.tsx`

- [ ] **Step 1: Criar componente**

```tsx
// src/components/LandingPage/ChatMockup/ChatHeader.tsx
'use client';

import React from 'react';
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
    contactName: string;
    contactSubtitle?: string;
    avatarLetter?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    contactName,
    contactSubtitle = 'online',
    avatarLetter,
}) => {
    const initial = avatarLetter || contactName.trim().charAt(0).toUpperCase();

    return (
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[var(--wa-green-deep)] text-white">
            <ArrowLeft className="w-5 h-5 opacity-90" strokeWidth={2} />
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--purple-deep)] flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                {initial}
            </div>
            <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[0.9375rem] font-semibold truncate">{contactName}</p>
                <p className="text-[0.6875rem] opacity-85 truncate">{contactSubtitle}</p>
            </div>
            <Video className="w-5 h-5 opacity-90" strokeWidth={2} />
            <Phone className="w-5 h-5 opacity-90" strokeWidth={2} />
            <MoreVertical className="w-5 h-5 opacity-90" strokeWidth={2} />
        </div>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/ChatHeader.tsx
git commit -m "feat(chat-mockup): header WhatsApp com avatar e ações"
```

---

## Task 12: Criar hook `useChatLoop.ts`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/useChatLoop.ts`

- [ ] **Step 1: Criar hook**

```ts
// src/components/LandingPage/ChatMockup/useChatLoop.ts
'use client';

import { useEffect, useRef, useState } from 'react';
import type { ChatStep } from './types';

interface UseChatLoopOptions {
    steps: ChatStep[];
    loop: boolean;
    /** Atraso inicial antes do primeiro step aparecer (ms) */
    startDelayMs?: number;
    /** Atraso entre o fim de um loop e o reinício (ms) */
    loopGapMs?: number;
}

/**
 * Reproduz a sequência de mensagens/typing-indicators progressivamente.
 * Cada step aparece após o anterior, respeitando holdMs (mensagens) ou durationMs (typing).
 * Quando loop=true, reinicia do zero após loopGapMs.
 */
export function useChatLoop({ steps, loop, startDelayMs = 400, loopGapMs = 2500 }: UseChatLoopOptions) {
    const [visibleCount, setVisibleCount] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (steps.length === 0) return;

        let cancelled = false;

        const scheduleNext = (index: number, delay: number) => {
            if (cancelled) return;
            timeoutRef.current = setTimeout(() => {
                if (cancelled) return;
                const nextCount = index + 1;
                setVisibleCount(nextCount);

                if (nextCount < steps.length) {
                    const current = steps[index];
                    const nextDelay = current.type === 'typing'
                        ? current.durationMs
                        : (current.holdMs ?? 1100);
                    scheduleNext(nextCount, nextDelay);
                } else if (loop) {
                    timeoutRef.current = setTimeout(() => {
                        if (cancelled) return;
                        setVisibleCount(0);
                        scheduleNext(0, startDelayMs);
                    }, loopGapMs);
                }
            }, delay);
        };

        scheduleNext(0, startDelayMs);

        return () => {
            cancelled = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [steps, loop, startDelayMs, loopGapMs]);

    return { visibleCount };
}

export function isTypingStep(step: ChatStep): step is Extract<ChatStep, { type: 'typing' }> {
    return (step as { type?: string }).type === 'typing';
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/useChatLoop.ts
git commit -m "feat(chat-mockup): hook useChatLoop para sequenciar mensagens"
```

---

## Task 13: Criar `ChatMockup/index.tsx`

**Files:**
- Create: `src/components/LandingPage/ChatMockup/index.tsx`

- [ ] **Step 1: Criar componente principal**

```tsx
// src/components/LandingPage/ChatMockup/index.tsx
'use client';

import React from 'react';
import type { ChatStep, ChatSize } from './types';
import { ChatHeader } from './ChatHeader';
import { Bubble } from './Bubble';
import { TypingIndicator } from './TypingIndicator';
import { useChatLoop, isTypingStep } from './useChatLoop';

interface ChatMockupProps {
    contactName: string;
    contactSubtitle?: string;
    steps: ChatStep[];
    size?: ChatSize;
    loop?: boolean;
    /** Adiciona "frame" estilo celular ao redor */
    framed?: boolean;
}

const SIZE_CLASS: Record<ChatSize, string> = {
    sm: 'max-w-[260px]',
    md: 'max-w-[320px]',
    lg: 'max-w-[400px]',
};

export const ChatMockup: React.FC<ChatMockupProps> = ({
    contactName,
    contactSubtitle = 'online',
    steps,
    size = 'lg',
    loop = true,
    framed = true,
}) => {
    const { visibleCount } = useChatLoop({ steps, loop });

    const visibleSteps = steps.slice(0, visibleCount);

    return (
        <div
            className={`relative ${SIZE_CLASS[size]} w-full mx-auto ${framed ? 'rounded-[2rem] bg-[#1F1B19] p-1.5 shadow-[0_24px_60px_-12px_rgba(255,89,2,0.18),0_8px_24px_-8px_rgba(139,63,224,0.16)]' : ''}`}
            aria-label={`Conversa simulada com ${contactName}`}
        >
            <div className={`${framed ? 'rounded-[1.5rem] overflow-hidden' : ''} bg-[var(--surface-chat)]`}>
                <ChatHeader contactName={contactName} contactSubtitle={contactSubtitle} />

                <div
                    className="px-3 py-4 space-y-2.5 min-h-[360px] max-h-[460px] overflow-hidden"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(255,89,2,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(194,122,255,0.04) 0%, transparent 50%)',
                    }}
                >
                    {visibleSteps.map((step) =>
                        isTypingStep(step) ? (
                            <TypingIndicator key={step.id} agent={step.agent} />
                        ) : (
                            <Bubble key={step.id} message={step} />
                        )
                    )}
                </div>

                <div className="px-3 py-2 bg-[var(--surface-2)] border-t border-black/5 flex items-center gap-2">
                    <div className="flex-1 px-3 py-1.5 rounded-full bg-white text-[0.75rem] text-[var(--ink-3)]">
                        Digite uma mensagem
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[var(--wa-green-deep)] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Glow atrás */}
            {framed && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(circle at 30% 30%, var(--orange) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--purple) 0%, transparent 60%)',
                    }}
                />
            )}
        </div>
    );
};

export type { ChatStep, BubbleMessage, TypingStep, PaymentPreviewData, ChatSize } from './types';
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/ChatMockup/index.tsx
git commit -m "feat(chat-mockup): componente principal com loop e frame"
```

---

## Task 14: Adicionar dados de mockup em `LandingPageData.ts`

**Files:**
- Modify: `src/components/LandingPage/LandingPageData.ts`

- [ ] **Step 1: Adicionar import e novos exports no topo do arquivo**

Em `src/components/LandingPage/LandingPageData.ts`, adicione no topo (após o import existente do lucide-react):

```ts
import type { ChatStep } from './ChatMockup/types';
```

Adicione **após** o array `export const features` existente (linha ~57):

```ts
// ===== MOCKUPS DE CHAT =====

export const heroChatSteps: ChatStep[] = [
    { id: 'c1', from: 'customer', text: 'Oi! Vocês atendem alongamento de cílios no sábado?', holdMs: 1400 },
    { id: 't1', type: 'typing', agent: 'ai', durationMs: 1100 },
    { id: 'b1', from: 'bot', agent: 'ai', text: 'Oi, Marina! 💛 Atendemos sim. Tenho horário sábado às 10h, 14h ou 16h — qual prefere?', holdMs: 1600 },
    { id: 'c2', from: 'customer', text: '14h tá ótimo. Quanto fica o volume russo?', holdMs: 1400 },
    { id: 't2', type: 'typing', agent: 'ai', durationMs: 1000 },
    { id: 'b2', from: 'bot', agent: 'ai', text: 'Volume russo R$ 180 (dura 4–5 semanas). Posso já reservar seu horário?', holdMs: 1600 },
    { id: 'c3', from: 'customer', text: 'Sim, pode confirmar!', holdMs: 1300 },
    { id: 't3', type: 'typing', agent: 'ai', durationMs: 900 },
    {
        id: 'b3',
        from: 'bot',
        agent: 'ai',
        text: 'Reservado ✅ Sábado, 14h.\nPara garantir o horário, segue o Pix de sinal R$ 50:',
        preview: { title: 'Sinal — Volume Russo', subtitle: 'R$ 50,00 · Pix', cta: 'Toque para pagar' },
        holdMs: 2800,
    },
];

export const featureChatSteps: Record<string, ChatStep[]> = {
    'ia-converte': [
        { id: 'c', from: 'customer', text: 'Vocês entregam aqui no Pinheiros?', holdMs: 1200 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 900 },
        { id: 'b', from: 'bot', agent: 'ai', text: 'Entregamos sim! 🛵 Em ~35min. Posso te mandar o cardápio?', holdMs: 1800 },
    ],
    'agendamento': [
        { id: 'c', from: 'customer', text: 'Quero remarcar pra terça', holdMs: 1100 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 800 },
        { id: 'b', from: 'bot', agent: 'ai', text: 'Tenho terça 9h, 11h ou 15h livre. Qual prefere?', holdMs: 1600 },
    ],
    'follow-up': [
        { id: 't', type: 'typing', agent: 'ai', durationMs: 800 },
        { id: 'b', from: 'bot', agent: 'ai', text: 'Oi João! Vi que você se interessou pelo combo. Posso te enviar o link de pagamento com 10% de desconto se fechar hoje?', holdMs: 2200 },
        { id: 'c', from: 'customer', text: 'Pode mandar!', holdMs: 1100 },
    ],
    'rag': [
        { id: 'c', from: 'customer', text: 'Vocês fazem nota fiscal?', holdMs: 1200 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 900 },
        { id: 'b', from: 'bot', agent: 'ai', text: 'Sim! Emitimos NF-e automaticamente após a confirmação do pagamento, no e-mail cadastrado.', holdMs: 1800 },
    ],
};

export const beforeAfterChats: { before: ChatStep[]; after: ChatStep[] } = {
    before: [
        { id: 'c1', from: 'customer', text: 'Boa noite, vocês entregam ainda?', holdMs: 2200 },
        { id: 'c2', from: 'customer', text: 'Alô?', holdMs: 2200 },
        { id: 'c3', from: 'customer', text: 'Desisti, vou pedir no concorrente.', holdMs: 2800 },
    ],
    after: [
        { id: 'c1', from: 'customer', text: 'Boa noite, vocês entregam ainda?', holdMs: 900 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 700 },
        { id: 'b1', from: 'bot', agent: 'ai', text: 'Entregamos sim! 🛵 Funcionamos até 23h. Qual o seu pedido?', holdMs: 1500 },
        { id: 'c2', from: 'customer', text: 'Que rápido! Quero uma pizza grande de calabresa.', holdMs: 1500 },
    ],
};
```

- [ ] **Step 2: Modificar o array `features` para vincular mockup por id**

Substitua o array `export const features` completo por:

```ts
export const features = [
    {
        id: 'ia-converte',
        icon: Brain,
        title: "IA que Conversa e Converte",
        description: "Nossa IA cria diálogos que não só respondem, mas convencem. Cada conversa vira oportunidade de venda real.",
    },
    {
        id: 'funis',
        icon: Workflow,
        title: "Funis de Venda no Piloto Automático",
        description: "Desenhe jornadas de compra completas com construtor visual. Qualifica, apresenta a oferta e fecha a venda — tudo automático.",
    },
    {
        id: 'dados',
        icon: BarChart3,
        title: "Decisões Inteligentes com Dados",
        description: "Veja em gráficos simples quais abordagens estão a gerar mais lucro e otimize suas estratégias em tempo real.",
    },
    {
        id: 'handoff',
        icon: Inbox,
        title: "O Melhor dos Dois Mundos",
        description: "Deixe a IA fazer 99% do trabalho. Em conversas-chave, assuma com um clique e dê seu toque de mestre pra fechar.",
    },
    {
        id: '24-7',
        icon: Zap,
        title: "Sua Empresa Sempre Aberta",
        description: "Seu assistente é o funcionário que nunca dorme. Venda e atenda 24/7, mesmo com o celular desligado.",
    },
    {
        id: 'follow-up',
        icon: Clock,
        title: "Follow-up que Recupera Vendas",
        description: "Sequências automáticas reativam leads que esfriaram. Recupere vendas que você considerava perdidas.",
    },
    {
        id: 'rag',
        icon: Database,
        title: "IA Treinada com o Seu Negócio",
        description: "Alimente a IA com FAQs, políticas e produtos. Ela aprende o seu tom — uma IA que responde como você.",
    },
    {
        id: 'agendamento',
        icon: CalendarCheck,
        title: "Agendamento Automático via IA",
        description: "A IA agenda compromissos no WhatsApp consultando horários em tempo real. Gerencie a agenda pela plataforma.",
    },
];
```

- [ ] **Step 3: Commit**

```bash
git add src/components/LandingPage/LandingPageData.ts
git commit -m "feat(data): adicionar mockups de chat para hero, features e before/after"
```

---

## Task 15: Reescrever `HeroSection.tsx`

**Files:**
- Rewrite: `src/components/LandingPage/HeroSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChatMockup } from './ChatMockup';
import { heroChatSteps } from './LandingPageData';

interface HeroSectionProps {
    onLoginClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
    const heroRef = useScrollAnimation(0.05);
    void onLoginClick;

    return (
        <section
            ref={heroRef.ref}
            className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
        >
            {/* Glow de fundo */}
            <div
                aria-hidden="true"
                className="absolute -top-32 right-0 w-[44rem] h-[44rem] rounded-full opacity-50 pointer-events-none blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255,89,2,0.12) 0%, transparent 70%)',
                }}
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-32 w-[36rem] h-[36rem] rounded-full opacity-40 pointer-events-none blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(194,122,255,0.12) 0%, transparent 70%)',
                }}
            />

            <div className="container-editorial relative z-10">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-center">
                    {/* Coluna esquerda */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className={`inline-flex items-center gap-2 ${heroRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            <span className="badge-ai">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-deep)]" />
                                Assistente de IA para WhatsApp
                            </span>
                        </div>

                        <h1
                            className={`mt-6 text-balance text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.0] tracking-[-0.04em] text-[var(--ink)] font-semibold ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
                        >
                            <span className="text-[var(--orange)]">Vendas</span> no piloto automático.
                            <br className="hidden md:block" />
                            Direto do seu <span className="text-[var(--orange)]">WhatsApp</span>.
                        </h1>

                        <p className={`mt-6 text-base md:text-lg text-[var(--ink-2)] leading-relaxed max-w-xl ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                            A Weppy conecta uma IA — treinada com o seu negócio — direto ao WhatsApp Business.
                            Ela qualifica, responde e vende 24h por dia. Sem chip novo. Sem complicação.
                        </p>

                        <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${heroRef.isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                            <a href="#pricing" className="btn-orange group">
                                <span>Começar agora</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                            <a href="#vsl" className="btn-ghost">
                                <span>Ver demonstração</span>
                            </a>
                        </div>

                        <div className={`mt-10 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--ink-2)] ${heroRef.isVisible ? 'animate-fade-in animation-delay-700' : 'opacity-0'}`}>
                            <span className="badge-online">
                                +2.300 negócios automatizados
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                <span className="font-semibold text-[var(--ink)]">4.9</span>
                                <span className="text-[var(--ink-3)]">/ 5 satisfação</span>
                            </span>
                            <span className="mono text-[var(--ink-3)]">latência &lt; 800ms</span>
                        </div>
                    </div>

                    {/* Coluna direita — mockup */}
                    <div className={`col-span-12 lg:col-span-5 flex justify-center lg:justify-end ${heroRef.isVisible ? 'animate-fade-in-right animation-delay-300' : 'opacity-0'}`}>
                        <ChatMockup
                            contactName="Studio Luma Beleza"
                            contactSubtitle="online · IA respondendo"
                            steps={heroChatSteps}
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/HeroSection.tsx
git commit -m "feat(hero): redesign com mockup de salão de beleza e novos tokens"
```

---

## Task 16: Reescrever `HowItWorksSection.tsx`

**Files:**
- Rewrite: `src/components/LandingPage/HowItWorksSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { howItWorks } from './LandingPageData';

export const HowItWorksSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="how-it-works" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Como funciona</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        4 passos. <span className="text-[var(--orange)]">Menos de 5 minutos.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Você não precisa saber programar. Se sabe usar o WhatsApp, já sabe usar a Weppy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {howItWorks.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.step}
                                className={`card-glow ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--orange-soft)] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[var(--orange)]" strokeWidth={2} />
                                    </div>
                                    <span className="mono text-[var(--ink-3)]">
                                        passo {String(step.step).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/HowItWorksSection.tsx
git commit -m "feat(how-it-works): redesign com cards glow e ícones em tile orange"
```

---

## Task 17: Reescrever `FeaturesSection.tsx`

**Files:**
- Rewrite: `src/components/LandingPage/FeaturesSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { features, featureChatSteps } from './LandingPageData';
import { ChatMockup } from './ChatMockup';

export const FeaturesSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="features" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Recursos</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Tudo que um time de vendas faz —{' '}
                        <span className="text-[var(--orange)]">só que sem dormir</span>.
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Oito ferramentas pensadas para empresas que vivem no WhatsApp e querem parar de perder venda por demora, despreparo ou falta de gente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const mockupSteps = featureChatSteps[feature.id];
                        return (
                            <div
                                key={feature.id}
                                className={`card ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--purple-soft)] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[var(--purple-deep)]" strokeWidth={2} />
                                    </div>
                                    <span className="mono text-[var(--ink-3)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-5">
                                    {feature.description}
                                </p>
                                {mockupSteps && (
                                    <div className="-mx-2 -mb-2 mt-4 pt-4 border-t border-[var(--line)]">
                                        <ChatMockup
                                            contactName="Conversa de exemplo"
                                            contactSubtitle="IA · em ação"
                                            steps={mockupSteps}
                                            size="sm"
                                            framed={false}
                                            loop
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/FeaturesSection.tsx
git commit -m "feat(features): redesign com mockups embedded em features selecionadas"
```

---

## Task 18: Reescrever `ComparisonSection.tsx`

**Files:**
- Rewrite: `src/components/LandingPage/ComparisonSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

O `id="results"` é referenciado pelo header (`navLinks` no `LandingHeader.tsx` aponta para `#results`). Mantenha esse id.

```tsx
'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChatMockup } from './ChatMockup';
import { beforeAfterChats } from './LandingPageData';

export const ComparisonSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="results" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Antes e depois</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        O mesmo cliente. <span className="text-[var(--orange)]">Resultados opostos.</span>
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        A diferença entre perder a venda e fechar a venda mora no tempo da primeira resposta.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className={`${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-5 ring-1 ring-red-100">
                            ANTES — sem IA
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            Cliente espera. E vai pro concorrente.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Três mensagens sem resposta. Em 6 minutos, o lead morre.
                        </p>
                        <ChatMockup
                            contactName="João Mendes"
                            contactSubtitle="visto por último às 23:14"
                            steps={beforeAfterChats.before}
                            size="md"
                        />
                    </div>

                    <div className={`${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold mb-5 ring-1 ring-[var(--orange)]/20">
                            DEPOIS — com Weppy
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
                            IA responde em segundos. Pedido fechado.
                        </h3>
                        <p className="text-sm text-[var(--ink-2)] mb-6 leading-relaxed">
                            Primeira resposta em &lt;1s. Cliente engaja, pedido sai.
                        </p>
                        <ChatMockup
                            contactName="João Mendes"
                            contactSubtitle="online · IA respondendo"
                            steps={beforeAfterChats.after}
                            size="md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 3: Commit**

```bash
git add src/components/LandingPage/ComparisonSection.tsx
git commit -m "feat(comparison): redesign antes/depois com 2 mockups lado a lado"
```

---

## Task 19: Reescrever `TestimonialSection.tsx`

**Files:**
- Rewrite: `src/components/LandingPage/TestimonialSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from './LandingPageData';

export const TestimonialsSection: React.FC = () => {
    const ref = useScrollAnimation(0.05);

    return (
        <section id="testimonials" ref={ref.ref} className="py-24 md:py-32 bg-[var(--bg)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Quem usa</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Negócios reais. <span className="text-[var(--orange)]">Resultados reais.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={t.name}
                            className={`card flex flex-col ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                                ))}
                            </div>
                            <p className="text-sm md:text-[0.9375rem] text-[var(--ink)] leading-relaxed mb-6 flex-1">
                                &ldquo;{t.content}&rdquo;
                            </p>
                            <div className="pt-5 border-t border-[var(--line)] flex items-center gap-3">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--orange-soft)]">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        sizes="44px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-[var(--ink)] leading-tight">{t.name}</p>
                                    <p className="text-xs text-[var(--ink-3)] leading-tight mt-0.5 truncate">{t.role}</p>
                                </div>
                            </div>
                            <div className="mt-3 inline-flex items-center self-start px-2.5 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] text-xs font-semibold">
                                {t.stats}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/TestimonialSection.tsx
git commit -m "feat(testimonials): redesign com cards modernos e stars em orange"
```

---

## Task 20: Repintar `PricingSection.tsx`

**Files:**
- Modify: `src/components/LandingPage/PricingSection.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { plans } from './LandingPageData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const PricingSection: React.FC = () => {
    const ref = useScrollAnimation(0.1);

    return (
        <section id="pricing" ref={ref.ref} className="py-24 md:py-32 bg-[var(--surface-2)] border-y border-[var(--line)]">
            <div className="container-editorial">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <p className={`eyebrow mb-4 ${ref.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Planos</p>
                    <h2 className={`text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold ${ref.isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
                        Um plano completo.{' '}
                        <span className="text-[var(--orange)]">Três jeitos</span> de poupar.
                    </h2>
                    <p className={`mt-5 text-lg text-[var(--ink-2)] ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        Todas as funcionalidades em qualquer plano. A diferença é o quanto você economiza ao se comprometer com prazos maiores.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, index) => {
                        const isPopular = plan.popular;
                        return (
                            <div
                                key={plan.id}
                                className={`relative p-8 md:p-10 rounded-2xl transition-all duration-500
                                    ${isPopular
                                        ? 'bg-white ring-2 ring-[var(--orange)] shadow-[0_24px_60px_-20px_rgba(255,89,2,0.25)]'
                                        : 'bg-white border border-[var(--line)] hover:border-[var(--line-strong)]'}
                                    ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                                `}
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="badge-new px-3 py-1 text-[0.6875rem]">
                                            Mais escolhido
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[var(--ink)] mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[var(--ink-2)] leading-relaxed min-h-[3rem]">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="pb-6 border-b border-[var(--line)] mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.04em]">
                                            {plan.price}
                                        </span>
                                        <span className="text-[var(--ink-3)] text-base">{plan.period}</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-3 text-xs">
                                        <span className="line-through text-[var(--ink-3)]">{plan.originalPrice}</span>
                                        <span className="badge-new px-2 py-0.5">{plan.savings}</span>
                                    </div>
                                    <p className="mono text-[var(--ink-3)] mt-3">
                                        {plan.id === 'mensal'
                                            ? 'Total R$ 97 / mês'
                                            : plan.id === 'trimestral'
                                                ? 'R$ 247 a cada 3 meses'
                                                : 'R$ 300 / ano · menos de R$ 1/dia'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--ink-2)]">
                                            <Check className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.checkoutUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isPopular ? 'btn-orange' : 'btn-ghost'} w-full group`}
                                >
                                    <span>{isPopular ? 'Garantir economia máxima' : 'Contratar'}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-12 text-center text-sm text-[var(--ink-3)]">
                    Pagamento via Pix ou cartão · Garantia integral de 7 dias · Setup em 5 minutos
                </p>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/PricingSection.tsx
git commit -m "feat(pricing): redesign com cards rounded e plano popular destacado em orange"
```

---

## Task 21: Criar `CloseSection.tsx` (Urgency + FAQ + CTA fundidas)

**Files:**
- Create: `src/components/LandingPage/CloseSection.tsx`

- [ ] **Step 1: Criar componente**

```tsx
'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { faqs, urgencyFeatures } from './LandingPageData';

interface CloseSectionProps {
    onLoginClick: () => void;
}

export const CloseSection: React.FC<CloseSectionProps> = ({ onLoginClick }) => {
    const ref = useScrollAnimation(0.05);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    void onLoginClick;

    return (
        <section id="close" ref={ref.ref} className="relative py-24 md:py-32 bg-[var(--bg)] overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] rounded-full opacity-30 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,89,2,0.18) 0%, transparent 70%)' }}
            />

            <div className="container-editorial relative z-10">
                {/* Bloco de urgência */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
                    <div className={`lg:col-span-7 ${ref.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="eyebrow mb-4">Última chamada</p>
                        <h2 className="text-balance text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)] font-semibold">
                            Cada minuto sem IA é{' '}
                            <span className="text-[var(--orange)]">uma venda indo embora.</span>
                        </h2>
                        <p className="mt-5 text-lg text-[var(--ink-2)] max-w-xl">
                            Setup em 5 minutos. Garantia integral de 7 dias. Se não der resultado, devolvemos cada centavo.
                        </p>
                        <a href="#pricing" className="btn-orange mt-8 group">
                            <span>Ver planos e começar</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    <div className={`lg:col-span-5 ${ref.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
                        <ul className="space-y-3">
                            {urgencyFeatures.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[var(--line)] text-sm text-[var(--ink)]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    <div className="lg:col-span-4">
                        <p className="eyebrow mb-4">Dúvidas frequentes</p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] leading-tight tracking-[-0.02em]">
                            Tudo que você precisa saber antes de começar.
                        </h3>
                        <p className="mt-4 text-[var(--ink-2)] leading-relaxed">
                            Não achou sua dúvida? Fala com a gente direto no WhatsApp.
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-2">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[var(--line)]">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:bg-[var(--surface-2)] -mx-3 px-3 rounded-lg transition-colors"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-[var(--ink)] font-semibold text-base md:text-[1.0625rem] leading-tight">
                                            {faq.question}
                                        </span>
                                        {isOpen
                                            ? <Minus className="w-5 h-5 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                                            : <Plus className="w-5 h-5 text-[var(--ink-3)] flex-shrink-0 mt-0.5" />}
                                    </button>
                                    {isOpen && (
                                        <div className="pb-5 -mt-1 text-[var(--ink-2)] leading-relaxed text-[0.9375rem] animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA final */}
                <div className={`relative rounded-3xl bg-gradient-to-br from-[var(--orange)] to-[#FF7E3D] p-10 md:p-16 text-center overflow-hidden ${ref.isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 80% 20%, rgba(194,122,255,0.6) 0%, transparent 50%)',
                        }}
                    />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-5">
                            Comece hoje. Veja resultado esta semana.
                        </h2>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                            7 dias de garantia. Se a IA não vender pra você, devolvemos cada centavo. Sem perguntas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--orange)] font-semibold hover:bg-white/90 transition-all duration-300 group"
                            >
                                <span>Garantir minha vaga</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-white/90 text-sm">
                            <div className="flex flex-col items-center gap-1.5">
                                <Zap className="w-5 h-5" />
                                <span>Setup 5 min</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Shield className="w-5 h-5" />
                                <span>7 dias garantia</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Clock className="w-5 h-5" />
                                <span>Cancele quando quiser</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LandingPage/CloseSection.tsx
git commit -m "feat(close): seção final fundindo Urgency + FAQ + CTA"
```

---

## Task 22: Repintar `LandingHeader.tsx`

**Files:**
- Modify: `src/components/LandingPage/LandingHeader.tsx`

- [ ] **Step 1: Trocar logotipo wordmark (linhas 54-58)**

Localize o `<div className="flex flex-col leading-none">` e substitua todo o bloco do nome "Weppy + est. 2024" por:

```tsx
<div className="flex flex-col leading-none">
    <span className="text-xl tracking-tight text-[var(--ink)] font-semibold">
        Weppy
    </span>
    <span className="text-[10px] mt-0.5 text-[var(--ink-3)] uppercase tracking-[0.18em] font-medium">
        IA para WhatsApp
    </span>
</div>
```

- [ ] **Step 2: Trocar CTA do header (linha 100-102)**

Localize o `<a href="#pricing" className="btn-primary text-sm">` (linha ~100). Substitua todo o `<a>` por:

```tsx
<a href="#pricing" className="btn-orange text-sm py-2 px-4">
    <span>Começar agora</span>
</a>
```

- [ ] **Step 3: Trocar wordmark do menu mobile (linhas 136-138 e 148-150)**

Localize ambas as ocorrências de `<span className="font-fraunces text-2xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" style={{ fontFamily: 'var(--font-fraunces), serif' }}>`. Substitua **as duas** por:

```tsx
<span className="text-2xl text-[var(--ink)] font-semibold group-hover:text-[var(--orange)] transition-colors tracking-tight">
```

- [ ] **Step 4: Trocar CTA do menu mobile (linha 161)**

Localize:
```tsx
<a href="#pricing" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full justify-center">
    Ver planos
</a>
```

Substitua por:
```tsx
<a href="#pricing" onClick={() => setIsMenuOpen(false)} className="btn-orange w-full justify-center">
    Começar agora
</a>
```

- [ ] **Step 5: Commit**

```bash
git add src/components/LandingPage/LandingHeader.tsx
git commit -m "feat(header): repintar wordmark e CTA com novos tokens"
```

---

## Task 23: Repintar `LandingFooter.tsx`

**Files:**
- Modify: `src/components/LandingPage/LandingFooter.tsx`

- [ ] **Step 1: Trocar wordmark Weppy (linhas 20-25)**

Localize:
```tsx
<span
    className="text-2xl text-[var(--ink)]"
    style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 600, letterSpacing: '-0.02em' }}
>
    Weppy
</span>
```

Substitua por:
```tsx
<span className="text-2xl text-[var(--ink)] font-semibold tracking-[-0.02em]">
    Weppy
</span>
```

- [ ] **Step 2: Trocar badge "Operando · Brasília" (linhas 30-33)**

Localize o `<div className="mt-8 inline-flex...">` e substitua o `<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-soft" />` por:

```tsx
<span className="w-1.5 h-1.5 rounded-full bg-[var(--wa-green)] animate-pulse-soft" />
```

- [ ] **Step 3: Trocar "Feito com cuidado em Brasília" (linhas 85-87)**

Localize:
```tsx
<p className="text-xs text-[var(--ink-3)] italic" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
    Feito com cuidado em Brasília.
</p>
```

Substitua por:
```tsx
<p className="text-xs text-[var(--ink-3)]">
    Feito com cuidado em Brasília.
</p>
```

- [ ] **Step 4: Commit**

```bash
git add src/components/LandingPage/LandingFooter.tsx
git commit -m "feat(footer): repintar wordmark e remover Fraunces"
```

---

## Task 24: Repintar `CompaniesSection.tsx`

**Files:**
- Read: `src/components/LandingPage/CompaniesSection.tsx`
- Modify: `src/components/LandingPage/CompaniesSection.tsx`

- [ ] **Step 1: Ler arquivo atual**

```bash
cat src/components/LandingPage/CompaniesSection.tsx
```

- [ ] **Step 2: Trocar todas as referências serif/editorial**

No arquivo `CompaniesSection.tsx`:
- Procure por `style={{ fontFamily: 'var(--font-fraunces), serif' }}` e remova esse atributo `style` inteiro (todas as ocorrências).
- Procure por `className=` contendo `serif-italic` e remova essa classe.
- Procure por `className=` contendo `editorial-number` — pode manter (já está neutralizada em Task 5).
- `var(--accent)` já está aliased para `--orange` no Task 1, então não precisa trocar — continua funcionando.

Caso a estrutura visual fique muito "lista de barbearias", troque o marquee de companies para um grid simples com chips arredondados:

Se existir um `<div className="animate-scroll flex...">` com nomes de empresas, substitua a renderização interna desses nomes de:

```tsx
<span className="..." style={{ fontFamily: 'var(--font-fraunces), serif' }}>{company}</span>
```

Para:

```tsx
<span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--line)] text-sm font-medium text-[var(--ink-2)]">{company}</span>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/LandingPage/CompaniesSection.tsx
git commit -m "feat(companies): repintar com chips arredondados, remover Fraunces"
```

---

## Task 25: Repintar `VslSection.tsx`

**Files:**
- Read: `src/components/LandingPage/VslSection.tsx`
- Modify: `src/components/LandingPage/VslSection.tsx`

- [ ] **Step 1: Ler arquivo atual**

```bash
cat src/components/LandingPage/VslSection.tsx
```

- [ ] **Step 2: Aplicar as mesmas trocas de typography**

- Remover todo `style={{ fontFamily: 'var(--font-fraunces), serif', ... }}` de `<h2>` e `<h3>` (deixe o tailwind/CSS aplicar Geist via `body` rule).
- Trocar `className="serif-italic text-[var(--accent)]"` por `className="text-[var(--orange)]"`.
- `var(--paper)` já está aliased para `--bg` no Task 1, então não precisa trocar — continua funcionando. Mesma coisa para `var(--accent)`.

- [ ] **Step 3: Commit**

```bash
git add src/components/LandingPage/VslSection.tsx
git commit -m "feat(vsl): repintar typography, remover Fraunces"
```

---

## Task 26: Repintar `FloatingWhatsAppButton.jsx`

**Files:**
- Read: `src/components/LandingPage/FloatingWhatsAppButton.jsx`
- Modify: `src/components/LandingPage/FloatingWhatsAppButton.jsx`

- [ ] **Step 1: Ler arquivo**

```bash
cat src/components/LandingPage/FloatingWhatsAppButton.jsx
```

- [ ] **Step 2: Garantir que o botão use verde WhatsApp**

Confirme que o botão usa `bg-[var(--wa-green)]` ou `bg-green-500`. Se estiver usando `var(--accent)` (moss green antigo), troque por `var(--wa-green)` (#25D366). O hover pode usar `var(--wa-green-deep)`.

Se o arquivo já usa um verde direto (literal `#25D366` ou tailwind `bg-green-500`), apenas confirme e siga.

- [ ] **Step 3: Commit (apenas se houve mudança)**

```bash
git add src/components/LandingPage/FloatingWhatsAppButton.jsx
git commit -m "feat(floating-button): garantir verde WhatsApp autêntico"
```

Se não houve mudança, pular o commit.

---

## Task 27: Repintar `PurchaseToastController.tsx`

**Files:**
- Read: `src/components/LandingPage/PurchaseToastController.tsx`
- Modify: `src/components/LandingPage/PurchaseToastController.tsx`

- [ ] **Step 1: Ler arquivo**

```bash
cat src/components/LandingPage/PurchaseToastController.tsx
```

- [ ] **Step 2: Trocar typography serif se existir**

- Remover qualquer `style={{ fontFamily: 'var(--font-fraunces), serif' }}`.
- `var(--accent)` já está aliased para `--orange` (Task 1), não precisa trocar.
- Toast em si já está estilado no `layout.tsx` (Task 6), só verificar markup interno.

- [ ] **Step 3: Commit (se houve mudança)**

```bash
git add src/components/LandingPage/PurchaseToastController.tsx
git commit -m "feat(toast): repintar typography no controller"
```

---

## Task 28: Atualizar `page.tsx` com nova ordem de seções

**Files:**
- Modify: `src/app/(site)/page.tsx`

- [ ] **Step 1: Substituir conteúdo completo**

```tsx
'use client';

import React, { useState } from 'react';
import { LandingHeader } from '@/components/LandingPage/LandingHeader';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { CompaniesSection } from '@/components/LandingPage/CompaniesSection';
import { VslSection } from '@/components/LandingPage/VslSection';
import { HowItWorksSection } from '@/components/LandingPage/HowItWorksSection';
import { FeaturesSection } from '@/components/LandingPage/FeaturesSection';
import { ComparisonSection } from '@/components/LandingPage/ComparisonSection';
import { TestimonialsSection } from '@/components/LandingPage/TestimonialSection';
import { PricingSection } from '@/components/LandingPage/PricingSection';
import { CloseSection } from '@/components/LandingPage/CloseSection';
import { LandingFooter } from '@/components/LandingPage/LandingFooter';
import { FloatingWhatsAppButton } from '@/components/LandingPage/FloatingWhatsAppButton';
import { PurchaseToastController } from '@/components/LandingPage/PurchaseToastController';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLoginClick = () => {
        window.location.href = 'https://app.weppy.com.br';
    };

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] relative">
            <PurchaseToastController />
            <FloatingWhatsAppButton />

            <LandingHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onLoginClick={handleLoginClick}
            />
            <main>
                <HeroSection onLoginClick={handleLoginClick} />
                <CompaniesSection />
                <VslSection />
                <HowItWorksSection />
                <FeaturesSection />
                <ComparisonSection />
                <TestimonialsSection />
                <PricingSection />
                <CloseSection onLoginClick={handleLoginClick} />
            </main>
            <LandingFooter />
        </div>
    );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/(site)/page.tsx
git commit -m "feat(page): nova ordem de seções e import de CloseSection"
```

---

## Task 29: Deletar seções obsoletas

**Files:**
- Delete: `src/components/LandingPage/UrgencySection.tsx`
- Delete: `src/components/LandingPage/FaqSection.tsx`
- Delete: `src/components/LandingPage/CtaSection.tsx`

- [ ] **Step 1: Verificar que `page.tsx` não importa mais essas seções**

```bash
grep -E "UrgencySection|FaqSection|CtaSection" src/app/(site)/page.tsx
```

Esperado: nenhum match.

- [ ] **Step 2: Verificar que nenhum outro arquivo as importa**

```bash
grep -rE "from.*UrgencySection|from.*FaqSection|from.*CtaSection" src/
```

Esperado: nenhum match.

- [ ] **Step 3: Deletar os 3 arquivos**

```bash
rm src/components/LandingPage/UrgencySection.tsx
rm src/components/LandingPage/FaqSection.tsx
rm src/components/LandingPage/CtaSection.tsx
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remover UrgencySection/FaqSection/CtaSection (fundidas em CloseSection)"
```

---

## Task 30: Limpar imports e CSS legados não usados

**Files:**
- Modify: `src/app/globals.css` (remoção final de blocos sem uso)

- [ ] **Step 1: Verificar arquivo final**

Abra `src/app/globals.css` e confirme:
- O bloco `/* BLOG CONTENT */` no final ainda existe e usa Fraunces (não tocar)
- O bloco `/* UTILITIES */` (com `.container-editorial`, `.text-balance`, `.text-pretty`) no final ainda existe (não tocar — `.container-editorial` é usado em todas as sections)
- Não há mais menções a `--moss`, `paper grain`, ou `serif`

- [ ] **Step 2: Confirmar build conceitual (revisão visual do CSS)**

Faça uma leitura visual do arquivo final. Se notar utilities órfãs (`.btn-accent` antigo com cores moss, por exemplo), elas já foram cobertas — sem ação extra.

- [ ] **Step 3: Commit (se houve algum ajuste)**

Se houve algum ajuste:

```bash
git add src/app/globals.css
git commit -m "chore(css): limpeza final pós-redesign"
```

Caso contrário, pular o commit.

---

## Self-Review Checklist

Após terminar todas as tasks, confirmar:

- [ ] Todos os tokens `--paper-*`, `--ink-*`, `--accent`, `--moss` antigos foram substituídos OU mantidos como alias para os novos
- [ ] Componente `ChatMockup` aparece em: Hero, todas as 4 features com mockup definido, ComparisonSection (2 lados)
- [ ] Ordem da página: Hero → Companies → VSL → HowItWorks → Features → Comparison → Testimonials → Pricing → Close → Footer
- [ ] Nenhum import quebrado em `page.tsx`
- [ ] Fraunces presente APENAS dentro de `.blog-content` no `globals.css` e carregado em `layout.tsx`
- [ ] Botões `.btn-orange`, `.btn-orange-soft`, `.btn-ghost`, `.btn-purple` existem em `globals.css`
- [ ] Animações `bubble-pop`, `typing-dot`, `pulse-online` existem em `globals.css`
- [ ] `prefers-reduced-motion` respeitado
- [ ] Verde WhatsApp aparece SOMENTE em: ChatMockup (header, balões human, typing human, payment preview gradient), badge-online, footer "Operando" dot, FloatingWhatsAppButton
- [ ] Orange #FF5902 é predominante em CTAs primários e destaques semânticos
- [ ] Purple #C27AFF / #8B3FE0 aparece em: badge-ai, eyebrows, ícones de features, gradient do payment preview

---

**Fim do plano. 30 tasks. Commits granulares (~30+ commits). Tempo estimado total: 4-6 horas de execução.**
