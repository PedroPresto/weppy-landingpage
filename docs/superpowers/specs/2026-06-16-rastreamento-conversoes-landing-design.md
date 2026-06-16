# Design — Seção de Rastreamento de Conversões na Landing Page

**Data:** 2026-06-16
**Projeto:** weppy-landingpage
**Objetivo:** Apresentar/ilustrar a nova funcionalidade de rastreamento de conversões do WhatsApp integrada ao Pixel da Meta como um recurso de destaque na home.

## Contexto

O weppy ganhou uma funcionalidade que rastreia conversões fechadas no WhatsApp e as conecta de volta às campanhas de anúncio da Meta (modelo inspirado na Tintim). A landing page precisa comunicar esse diferencial — ele resolve o problema clássico de atribuição quebrada: anúncios geram conversas no WhatsApp, mas o gestor de tráfego não sabe quais conversas viraram venda, então o Pixel/CAPI da Meta otimiza às cegas.

**Decisão de marketing (do dono):** a copy afirma a integração com o **Pixel da Meta** como recurso **ativo**, deixando a LP pronta para quando a Fase 2 (disparo real ao CAPI) for concluída. Tecnicamente, hoje o backend está na Fase 1 (rastreamento por texto-isca; `MetaConversionsService` é no-op), mas isso não muda a copy.

## Escopo

- **Inclui:** uma nova seção dedicada na home + um card âncora no grid de Recursos + dados de apoio em `LandingPageData.ts`.
- **Não inclui:** nenhuma mudança de backend, nenhuma página nova, nenhum teste (conforme padrão do projeto), nenhum refactor das seções existentes.

## Arquitetura / Componentes

Segue exatamente o padrão das seções existentes (`FeaturesSection`, `HowItWorksSection`):

1. **`src/components/LandingPage/ConversionTrackingSection.tsx`** (novo)
   - `'use client'`, usa `useScrollAnimation` para animações de entrada.
   - Cores e tipografia só via CSS vars (`--bg`, `--ink`, `--ink-2`, `--ink-3`, `--orange`, `--purple-soft`, `--purple-deep`) e classes utilitárias do projeto (`container-editorial`, `card`, `eyebrow`, `mono`, `text-balance`, `animate-fade-in-up`, `animation-delay-*`).
   - `id="tracking"` para o card âncora linkar via `#tracking`.

2. **`src/components/LandingPage/LandingPageData.ts`** (editar)
   - Novo array `conversionFlow` (4 passos: ícone, título, descrição curta).
   - Novo array `conversionBenefits` (3 itens: ícone, texto).
   - Nova entrada no array `features` (id `tracking`, ícone `Target` ou `TrendingUp`, título "Rastreamento de Conversões", descrição curta) — o card no grid existente.
   - Ícones lucide reaproveitados/adicionados: `Megaphone`, `MessageSquare`, `Sparkles`, `Target`, `TrendingUp`, `BarChart3` (a maioria já importada).

3. **`src/app/(site)/page.tsx`** (editar)
   - Importar e renderizar `<ConversionTrackingSection />` entre `<FeaturesSection />` e `<HowItWorksSection />`.

## Conteúdo da seção

- **Eyebrow:** "Rastreamento de Conversões"
- **Headline:** algo como — "Saiba exatamente qual anúncio gerou cada venda no WhatsApp." (palavra-chave em `--orange`)
- **Subtítulo:** explica o fechamento do ciclo de atribuição: cada venda fechada pela IA volta como conversão para o **Pixel da Meta**, alimentando a otimização das campanhas com dados reais.
- **Fluxo visual (4 passos, horizontais no desktop / empilhados no mobile, com setas/conectores):**
  1. `Megaphone` — **Anúncio na Meta** — cliente clica e cai no seu WhatsApp.
  2. `MessageSquare` — **Conversa no WhatsApp** — o lead é identificado pela campanha de origem.
  3. `Sparkles` — **IA fecha a venda** — agenda ou converte automaticamente.
  4. `Target` — **Conversão no Pixel** — o evento volta para a Meta otimizar seus anúncios.
- **Bloco de 3 benefícios** (`conversionBenefits`):
  - `BarChart3` — "ROI real por campanha, sem planilha."
  - `Sparkles` — "A própria IA marca a conversão."
  - `TrendingUp` — "Meta otimiza com dados de venda reais."
- **CTA opcional:** reaproveita o CTA/estilo das outras seções (link para checkout ou `#pricing`); pode ser omitido para não competir com a `CloseSection`.

## Fluxo de dados

Puramente estático/apresentacional. Os arrays em `LandingPageData.ts` alimentam o render; nenhuma chamada de API, nenhum estado além do `useScrollAnimation`.

## Responsividade

- Grid do fluxo: `grid-cols-1` no mobile, `md:grid-cols-4` (ou flex com conectores) no desktop.
- Conectores/setas escondidos no mobile (`hidden md:flex`).
- Benefícios: `grid-cols-1 md:grid-cols-3`.

## Tratamento de erros / edge cases

N/A — conteúdo estático. Único cuidado: garantir que todos os ícones lucide usados estejam importados em `LandingPageData.ts` e/ou no componente, para não quebrar o build do Next.

## Critérios de sucesso

- A seção aparece na home, na posição correta, visualmente coerente com o resto (light/dark via CSS vars).
- Card de "Rastreamento de Conversões" no grid de Recursos linka para `#tracking`.
- Build do Next passa (sem ícone faltando).
- Funciona em light e dark mode.
