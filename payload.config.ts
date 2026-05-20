import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ─── Lexical helpers ────────────────────────────────────────────────────────
type N = Record<string, unknown>;
const text = (t: string, format = 0): N => ({ type: "text", text: t, format, detail: 0, mode: "normal", style: "", version: 1 });
const bold = (t: string): N => text(t, 1);
const p = (...children: N[]): N => ({ type: "paragraph", format: "", indent: 0, version: 1, direction: "ltr", textFormat: 0, textStyle: "", children });
const h2 = (t: string): N => ({ type: "heading", tag: "h2", format: "", indent: 0, version: 1, direction: "ltr", children: [text(t)] });
const h3 = (t: string): N => ({ type: "heading", tag: "h3", format: "", indent: 0, version: 1, direction: "ltr", children: [text(t)] });
const ul = (items: (string | N[])[]): N => ({
  type: "list",
  listType: "bullet",
  tag: "ul",
  start: 1,
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  children: items.map((item, i) => ({
    type: "listitem",
    value: i + 1,
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: typeof item === "string" ? [text(item)] : item,
  })),
});
const doc = (children: N[]) => ({ root: { type: "root", format: "", indent: 0, version: 1, direction: "ltr", children } });

// ─── Seed posts (SEO/GEO optimized for Weppy) ───────────────────────────────
type SeedFaq = { question: string; answer: string };
type SeedPost = {
  cover: { unsplashUrl: string; alt: string; caption: string };
  title: string;
  slug: string;
  excerpt: string;
  keywords: string;
  category: string;
  content: ReturnType<typeof doc>;
  faq: SeedFaq[];
};

const SEED_POSTS: SeedPost[] = [
  {
    cover: {
      unsplashUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1600&q=80&auto=format&fit=crop",
      alt: "Atendimento automatizado no WhatsApp com inteligência artificial",
      caption: "Automação de WhatsApp para vendas com IA",
    },
    title: "Automação de WhatsApp para Vendas: Guia Completo 2026",
    slug: "automacao-whatsapp-vendas-guia-completo",
    excerpt: "Descubra como automatizar o WhatsApp da sua empresa com IA, aumentar conversões em até 47% e atender 24/7 sem contratar mais gente.",
    keywords: "automação whatsapp, whatsapp business, vendas pelo whatsapp, chatbot whatsapp, ia whatsapp, automatizar atendimento",
    category: "automacao-vendas",
    content: doc([
      p(text("A automação de WhatsApp para vendas deixou de ser um diferencial e se tornou requisito básico para empresas que querem competir em 2026. Segundo dados da Meta, 76% dos brasileiros preferem se comunicar com marcas via WhatsApp e responder em até 5 minutos aumenta as chances de conversão em 9x.")),
      p(text("Neste guia, você vai entender exatamente como funciona a automação inteligente de WhatsApp, quanto custa, e por que negócios que adotam essa estratégia faturam, em média, 47% mais que concorrentes que ainda dependem de atendimento 100% humano.")),

      h2("O que é automação de WhatsApp?"),
      p(text("Automação de WhatsApp é o uso de software com inteligência artificial para responder mensagens, qualificar leads, enviar lembretes, processar pedidos e fechar vendas de forma automática sem intervenção humana em cada interação. Diferente de um chatbot tradicional baseado em árvore de decisão, a automação moderna usa modelos de linguagem (LLMs) capazes de entender contexto, intenção e personalizar respostas.")),

      h3("Por que automatizar o WhatsApp em 2026?"),
      ul([
        "Atendimento 24/7 sem custo adicional de pessoal",
        "Resposta em menos de 1 segundo (vs. 5 horas da média do mercado)",
        "Aumento médio de 47% no ticket de vendas pelo canal",
        "Redução de até 70% no custo por atendimento qualificado",
        "Integração com CRM, agendas e meios de pagamento",
      ]),

      h2("Como funciona a automação inteligente da Weppy"),
      p(text("A Weppy conecta um agente de IA treinado especificamente no negócio do cliente diretamente ao número oficial do WhatsApp Business. O agente aprende sobre produtos, preços, condições comerciais e tom de voz da marca, respondendo como um vendedor humano experiente — só que sem dormir, sem folgar e sem perder paciência.")),
      p(text("O fluxo é simples: o cliente envia uma mensagem → a IA interpreta a intenção → consulta a base de conhecimento → responde de forma natural → encaminha para um humano apenas quando necessário (configurável por regra ou pelo próprio cliente).")),

      h2("Quanto custa automatizar o WhatsApp?"),
      p(text("Soluções de automação no Brasil variam entre R$ 97/mês (ferramentas básicas com chatbot por regras) e R$ 5.000/mês (plataformas enterprise). A Weppy fica na faixa intermediária com modelo por uso, tornando viável para pequenas empresas que estão começando — sem deixar de atender operações com milhares de conversas/mês.")),

      h2("Passos para começar hoje"),
      ul([
        "Cadastrar o número no WhatsApp Business API (oficial)",
        "Mapear as 10 perguntas mais frequentes que sua equipe recebe",
        "Definir o objetivo principal: qualificação, venda direta ou suporte",
        "Conectar a Weppy ao número e treinar a IA com seu material",
        "Acompanhar conversões nos primeiros 7 dias e ajustar",
      ]),

      p(text("Empresas que seguem esse processo costumam ver retorno positivo no primeiro mês de uso, com aumento de leads qualificados e queda no tempo médio de resposta.")),
    ]),
    faq: [
      { question: "Automação de WhatsApp é permitida pela Meta?", answer: "Sim, desde que feita via WhatsApp Business API oficial e respeitando políticas da Meta. A Weppy é homologada e usa apenas integrações oficiais, eliminando risco de banimento do número." },
      { question: "Quanto tempo leva para implementar?", answer: "Em média 48 horas: 1 dia para conectar o número oficial e treinar a IA com seu material, mais 1 dia de ajustes finos. Empresas com fluxo complexo podem levar até 7 dias." },
      { question: "A IA substitui meus vendedores?", answer: "Não. A IA tira 80% das conversas repetitivas e qualifica leads, liberando seus vendedores para focar em fechamentos. Negócios que adotam Weppy aumentam conversão SEM demitir pessoal." },
      { question: "Funciona para qual tipo de negócio?", answer: "Funciona para qualquer empresa que recebe pedidos, dúvidas ou agendamentos via WhatsApp: clínicas, e-commerces, imobiliárias, escolas, restaurantes, prestadores de serviço e infoprodutores." },
    ],
  },
  {
    cover: {
      unsplashUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80&auto=format&fit=crop",
      alt: "Equipe de vendas analisando crescimento com WhatsApp",
      caption: "Como aumentar vendas pelo WhatsApp",
    },
    title: "Como Aumentar Vendas pelo WhatsApp: 7 Estratégias Comprovadas",
    slug: "como-aumentar-vendas-whatsapp",
    excerpt: "Sete estratégias testadas para multiplicar vendas pelo WhatsApp em 2026, com casos reais e números de conversão de cada técnica.",
    keywords: "aumentar vendas whatsapp, vender mais whatsapp, estratégias whatsapp business, conversão whatsapp, follow up whatsapp",
    category: "whatsapp-marketing",
    content: doc([
      p(text("Vender pelo WhatsApp em 2026 não é mais sobre estar disponível — é sobre estar disponível na hora certa, com a resposta certa, no formato certo. As 7 estratégias abaixo foram extraídas de mais de 12.000 contas que usam a Weppy e mostram aumento médio de 47% no faturamento pelo canal.")),

      h2("1. Responder em menos de 1 minuto"),
      p(text("Estudo da Harvard Business Review mostra que responder um lead em até 5 minutos aumenta a chance de conversão em 9x comparado a responder em 30 minutos. No WhatsApp, esse efeito é ainda mais forte: 78% dos clientes desistem da compra se não recebem resposta em até 10 minutos.")),

      h2("2. Usar gatilhos de escassez de forma honesta"),
      p(text("Mensagens automáticas como 'restam 3 unidades' ou 'oferta termina em 2 horas' aumentam taxa de conversão em até 32%, mas apenas quando são verdadeiras. Gatilhos falsos queimam o relacionamento e geram denúncias.")),

      h2("3. Segmentar listas de transmissão"),
      p(text("Em vez de mandar a mesma mensagem para 1.000 contatos, segmente por: estágio no funil, último produto comprado, ticket médio e cidade. Listas segmentadas têm taxa de abertura 3,4x maior.")),

      h2("4. Implementar follow-up automático"),
      p(text("70% das vendas acontecem após o quinto contato. A Weppy automatiza follow-ups inteligentes: se o cliente não respondeu em 24h, envia variação 1; em 72h, variação 2; em 7 dias, oferta especial. Isso recupera, em média, 23% dos leads frios.")),

      h2("5. Oferecer pagamento dentro do chat"),
      p(text("Integrar Pix automático e link de pagamento direto na conversa reduz a fricção e aumenta conversão em 28%. Quanto menos cliques entre a decisão e a compra, melhor.")),

      h2("6. Personalizar com nome e contexto"),
      ul([
        "Saudar pelo nome (não apenas 'Olá!')",
        "Mencionar a última interação ('da última vez você perguntou sobre X')",
        "Adaptar o tom: cliente novo recebe explicações; recorrente recebe atalhos",
        "Lembrar de aniversários, datas de compra e renovações",
      ]),

      h2("7. Medir e otimizar semanalmente"),
      p(text("As métricas-chave são: tempo médio de primeira resposta (TMPR), taxa de conversão por funil, valor médio do pedido (ticket) e taxa de retorno do cliente. Empresas que revisam essas métricas semanalmente crescem 2,3x mais rápido que as que revisam mensalmente.")),

      p(text("Implementar as 7 estratégias de uma vez é difícil — mas mesmo aplicar 3 delas no próximo mês já gera resultados visíveis no faturamento.")),
    ]),
    faq: [
      { question: "Qual a melhor hora para enviar mensagem no WhatsApp?", answer: "Os horários com maior taxa de resposta no Brasil são: das 11h às 13h, das 17h às 19h e domingos à noite. Evite enviar antes das 8h e depois das 22h para não queimar o relacionamento." },
      { question: "Quantas mensagens posso enviar por dia sem ser banido?", answer: "Pela API oficial, não há limite rígido, mas a Meta monitora taxa de bloqueio. Como regra prática, evite mais de 1.000 mensagens em massa por dia em contas novas e mantenha sua taxa de bloqueio abaixo de 2%." },
      { question: "Vale a pena usar listas de transmissão ou grupos?", answer: "Listas de transmissão são melhores para vendas (mais privacidade, melhor taxa de abertura). Grupos servem para comunidade e suporte coletivo, mas têm taxa de conversão menor." },
      { question: "Posso usar emojis nas mensagens de venda?", answer: "Sim, mas com moderação. Emojis no início de mensagens aumentam abertura em 12%, mas excesso reduz percepção de profissionalismo. Use 1-2 por mensagem no máximo." },
    ],
  },
  {
    cover: {
      unsplashUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80&auto=format&fit=crop",
      alt: "Inteligência artificial conversacional para WhatsApp Business",
      caption: "IA conversacional para WhatsApp",
    },
    title: "Chatbot vs IA Conversacional: Qual Escolher para WhatsApp?",
    slug: "chatbot-vs-ia-conversacional-whatsapp",
    excerpt: "Entenda a diferença entre chatbot tradicional e IA conversacional no WhatsApp e descubra qual gera mais vendas para o seu modelo de negócio.",
    keywords: "chatbot whatsapp, ia conversacional, gpt whatsapp, agente ia, diferença chatbot e ia, llm whatsapp business",
    category: "ia",
    content: doc([
      p(text("Quem nunca conversou com um chatbot que respondeu 'Não entendi sua mensagem. Digite 1 para voltar ao menu' e fechou a janela frustrado? Esse é o motivo pelo qual chatbots tradicionais estão sendo rapidamente substituídos por IA conversacional no WhatsApp.")),
      p(text("Mas afinal, qual a diferença prática? E qual gera mais resultado para vendas? Vamos comparar.")),

      h2("Chatbot tradicional (árvore de decisão)"),
      p(text("Funciona em fluxos rígidos: o usuário escolhe uma opção, o bot responde com o que está pré-programado. Se a pergunta sai do script, o bot trava ou encaminha para humano. Foi o padrão entre 2017 e 2022.")),
      h3("Vantagens"),
      ul([
        "Custo de implementação baixo (R$ 97 a R$ 500/mês)",
        "Previsível — sempre responde igual",
        "Bom para FAQs muito específicas e repetitivas",
      ]),
      h3("Desvantagens"),
      ul([
        "Frustra clientes em perguntas fora do roteiro",
        "Taxa de abandono média de 60% em conversas",
        "Não personaliza nem aprende com interações",
        "Manutenção constante quando produtos mudam",
      ]),

      h2("IA conversacional (LLM)"),
      p(text("Funciona com modelos de linguagem (como GPT-4, Claude, Gemini) treinados no contexto do seu negócio. Entende variações da mesma pergunta, mantém histórico da conversa, infere intenção e responde com naturalidade — como um vendedor humano experiente.")),
      h3("Vantagens"),
      ul([
        "Entende 95%+ das perguntas (vs. 40% do chatbot)",
        "Personaliza tom e profundidade por cliente",
        "Aprende com cada conversa (com aprovação humana)",
        "Lida com objeções, negociação e fechamento",
        "Reduz necessidade de humanos em 80%",
      ]),
      h3("Desvantagens"),
      ul([
        "Custo um pouco maior (uso baseado em tokens)",
        "Precisa de boa base de conhecimento inicial",
        "Requer monitoramento para evitar 'alucinações'",
      ]),

      h2("Qual escolher para seu negócio?"),
      p(text("Regra prática: se sua operação tem até 200 conversas/mês com fluxo muito estável, chatbot tradicional resolve. Acima disso, ou com produtos/serviços variados, a IA conversacional paga por si só em 30 dias pela redução de carga na equipe e aumento de conversão.")),
      p(text("Plataformas modernas como a Weppy combinam o melhor dos dois mundos: fluxos rígidos para confirmações de pedido e pagamento (onde previsibilidade importa) e IA conversacional para qualificação, dúvidas e negociação (onde flexibilidade importa).")),

      h2("Como tomar a decisão certa"),
      ul([
        "Mapeie quantas conversas únicas seu time recebe por mês",
        "Calcule quanto tempo seus vendedores gastam respondendo dúvidas básicas",
        "Liste objeções comuns — chatbots não lidam, IA sim",
        "Teste por 14 dias antes de comprometer com contrato anual",
      ]),

      p(text("No final, a pergunta não é 'chatbot OU IA' — é 'quanto da minha operação eu posso tirar do humano para que ele foque no que realmente fecha venda'.")),
    ]),
    faq: [
      { question: "IA conversacional pode dar respostas erradas?", answer: "Pode, mas as plataformas atuais reduzem isso a menos de 1% das interações usando técnicas como RAG (recuperação por contexto) e validação humana de respostas críticas (preço, prazo, política)." },
      { question: "Preciso saber programar para usar IA no WhatsApp?", answer: "Não. Plataformas como a Weppy permitem treinar a IA com upload de PDFs, links de site e perguntas/respostas, sem código. O fluxo é guiado por interface visual." },
      { question: "Qual modelo de IA é melhor: GPT, Claude ou Gemini?", answer: "Para WhatsApp em português, modelos recentes da Anthropic (Claude 4.7) e OpenAI (GPT-4 família) têm performance similar. A diferença está mais no treinamento específico do que no modelo base." },
      { question: "Quanto custa por mensagem na IA conversacional?", answer: "Depende do modelo e do tamanho da resposta. Em média, R$ 0,03 a R$ 0,10 por conversa completa. Plataformas como a Weppy embutem esse custo na mensalidade, sem cobrar por uso." },
    ],
  },
];

// ─── onInit seed ────────────────────────────────────────────────────────────
async function fetchCoverBuffer(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch cover: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  return sharp(Buffer.from(arrayBuffer))
    .resize(1600, 900, { fit: "cover", position: "center" })
    .jpeg({ quality: 85, progressive: true })
    .toBuffer();
}

async function seedIfEmpty(payload: import("payload").Payload) {
  try {
    const existing = await payload.find({ collection: "posts", limit: 1 });
    if (existing.totalDocs > 0) return;

    for (const seed of SEED_POSTS) {
      const filename = `${seed.slug}-cover.jpg`;
      let buffer: Buffer;
      try {
        buffer = await fetchCoverBuffer(seed.cover.unsplashUrl);
      } catch (err) {
        payload.logger.error({ err, url: seed.cover.unsplashUrl }, "Cover fetch failed, skipping post");
        continue;
      }

      const media = await payload.create({
        collection: "media",
        data: { alt: seed.cover.alt, caption: seed.cover.caption },
        file: {
          data: buffer,
          mimetype: "image/jpeg",
          name: filename,
          size: buffer.length,
        },
      });

      await payload.create({
        collection: "posts",
        data: {
          title: seed.title,
          slug: seed.slug,
          cover: media.id,
          excerpt: seed.excerpt,
          keywords: seed.keywords,
          category: seed.category,
          content: seed.content as never,
          faq: seed.faq,
          publishedAt: new Date().toISOString(),
          status: "published",
        },
      });
    }

    payload.logger.info(`Seeded ${SEED_POSTS.length} posts`);
  } catch (err) {
    payload.logger.error({ err }, "Seed failed");
  }
}

// ─── Config ─────────────────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.NEXT_PUBLIC_SERVER_URL,
  "http://localhost:3000",
  "https://weppy.com.br",
  "https://www.weppy.com.br",
  "*",
].filter(Boolean) as string[];

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: { titleSuffix: " — Weppy" },
  },
  cors: allowedOrigins,
  csrf: allowedOrigins,
  collections: [Users, Media, Posts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  onInit: async (payload) => {
    await seedIfEmpty(payload);
  },
});
