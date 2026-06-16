// src/components/LandingPage/landingPageData.ts

import {
    Brain, BarChart3, Inbox, Zap, Workflow, Users, TrendingUp, Sparkles,
    MessageSquare, Star, Clock, Target, Smartphone, Images, Database, CalendarCheck,
    Megaphone, MousePointerClick, PauseCircle,
    FileText, HelpCircle, Tag, Globe
} from 'lucide-react';
import type { ChatStep } from './ChatMockup/types';

export const features = [
    {
        id: 'rag',
        icon: Database,
        title: "Treinamento RAG",
        description: "Treine a IA com documentos do seu negócio, como PDFs, FAQs e catálogos. Ela aprende o seu tom e responde com as suas informações.",
    },
    {
        id: 'disparo',
        icon: Megaphone,
        title: "Disparo em Massa",
        description: "Dispare mensagens para uma lista de leads e deixe a IA conduzir cada conversa individualmente a partir daí.",
    },
    {
        id: 'agendamento',
        icon: CalendarCheck,
        title: "Sistema de Agendamento",
        description: "Cadastre seus serviços e horários. A IA mostra a disponibilidade em tempo real e confirma o agendamento direto no WhatsApp.",
    },
    {
        id: 'handoff',
        icon: PauseCircle,
        title: "Assuma a Conversa",
        description: "Desative a IA quando quiser e retome o atendimento manualmente. Ou ensine-a a identificar quando deve chamar um humano.",
    },
    {
        id: 'fluxo',
        icon: Workflow,
        title: "Criação de Fluxo Visual",
        description: "Crie fluxos de conversa com um criador de arrastar e soltar. Monte jornadas completas sem escrever uma linha de código.",
    },
    {
        id: 'metricas',
        icon: BarChart3,
        title: "Análise de Métricas",
        description: "Acompanhe taxa de resposta, conversões e volume de atendimentos. Veja o que está funcionando e otimize em tempo real.",
    },
    {
        id: 'tracking',
        icon: Target,
        title: "Rastreamento de Conversões",
        description: "Descubra qual anúncio da Meta gerou cada venda fechada no WhatsApp. Cada conversão volta para o seu Pixel e otimiza suas campanhas com dados reais.",
    },
];

// ===== RASTREAMENTO DE CONVERSÕES =====

export const conversionFlow = [
    {
        icon: Megaphone,
        title: "Anúncio na Meta",
        description: "O cliente clica no seu anúncio e cai direto no seu WhatsApp.",
    },
    {
        icon: MessageSquare,
        title: "Conversa no WhatsApp",
        description: "O lead é identificado pela campanha de origem automaticamente.",
    },
    {
        icon: Sparkles,
        title: "A IA fecha a venda",
        description: "Agenda ou converte o cliente sem você levantar um dedo.",
    },
    {
        icon: Target,
        title: "Conversão no Pixel",
        description: "O evento volta para a Meta otimizar seus anúncios com vendas reais.",
    },
];

export const conversionBenefits = [
    { icon: BarChart3, text: "ROI real por campanha, sem planilha manual." },
    { icon: Sparkles, text: "A própria IA marca a conversão na hora certa." },
    { icon: TrendingUp, text: "A Meta otimiza com dados de venda reais, não palpites." },
];

// ===== BASE DE CONHECIMENTO (RAG) =====

export const knowledgeSources = [
    { icon: FileText, label: "PDFs", hint: "Catálogos, contratos, manuais" },
    { icon: HelpCircle, label: "FAQs", hint: "Dúvidas frequentes dos clientes" },
    { icon: Tag, label: "Tabela de preços", hint: "Valores e pacotes atualizados" },
    { icon: Globe, label: "Seu site", hint: "Conteúdo das suas páginas" },
];

export const knowledgeBenefits = [
    { icon: Brain, text: "Aprende o seu tom e fala como a sua marca." },
    { icon: Database, text: "Responde só com as suas informações, sem inventar." },
    { icon: Zap, text: "Atualizou um documento? A IA já responde com a novidade." },
];

export const knowledgeDemo = {
    question: "Qual o valor do clareamento dental?",
    answer: "O clareamento começa em R$ 690 😊 Conforme a sua tabela de preços, inclui avaliação e a sessão de moldagem.",
    source: "Tabela de preços.pdf",
};

// ===== MOCKUPS DE CHAT =====

export const heroChatSteps: ChatStep[] = [
    {
        id: 'c1',
        from: 'customer',
        text: 'Oi! Vocês fazem clareamento dental?',
        holdMs: 1400
    },

    {
        id: 't1',
        type: 'typing',
        agent: 'ai',
        durationMs: 1100
    },

    {
        id: 'b1',
        from: 'bot',
        agent: 'ai',
        text: 'Fazemos sim 🦷✨ Temos avaliação disponível amanhã às 15h ou quinta às 10h. Qual horário prefere?',
        holdMs: 1600
    },

    {
        id: 'c2',
        from: 'customer',
        text: 'Quinta às 10h fica melhor. Qual o valor?',
        holdMs: 1400
    },

    {
        id: 't2',
        type: 'typing',
        agent: 'ai',
        durationMs: 1000
    },

    {
        id: 'b2',
        from: 'bot',
        agent: 'ai',
        text: 'O clareamento começa em R$ 690 😊 Posso reservar sua avaliação agora?',
        holdMs: 1600
    },

    {
        id: 'c3',
        from: 'customer',
        text: 'Pode reservar 👍',
        holdMs: 1300
    },

    {
        id: 't3',
        type: 'typing',
        agent: 'ai',
        durationMs: 900
    },

    {
        id: 'b3',
        from: 'bot',
        agent: 'ai',
        text: 'Agendamento confirmado ✅ Quinta-feira às 10h.\nSegue o sinal da avaliação:',
        preview: {
            title: 'Reserva · Avaliação Odontológica',
            subtitle: 'R$ 50,00 · Pix',
            cta: 'Toque para pagar'
        },
        holdMs: 2800,
    },
];

export const beforeAfterChats: { before: ChatStep[]; after: ChatStep[] } = {
    before: [
        { id: 'c1', from: 'customer', text: 'Oi! Quanto fica preenchimento labial?', holdMs: 2200 },
        { id: 'c2', from: 'customer', text: 'Consegue me passar valores?', holdMs: 2200 },
        { id: 'c3', from: 'customer', text: 'Tudo bem 😊 vou procurar outra clínica.', holdMs: 2800 },
    ],
    after: [
        { id: 'c1', from: 'customer', text: 'Oi! Quanto fica preenchimento labial?', holdMs: 900 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 700 },
        {
            id: 'b1',
            from: 'bot',
            agent: 'ai',
            text: 'Oi Maria! 💖 O preenchimento labial começa em R$ 790. Quer que eu te envie fotos de resultados e horários disponíveis?',
            holdMs: 1500
        },
        { id: 'c2', from: 'customer', text: 'Quero sim 😍', holdMs: 1500 },
    ],
};

export const benefits = [
    {icon: Users, text: "Atendimentos simultâneos", color: "text-green-400"},
    {icon: Images, text: "Envio de mídias", color: "text-pink-400"},
    {icon: Sparkles, text: "IA Humanizada", color: "text-purple-400"},
    {icon: TrendingUp, text: "Follow Up inteligente", color: "text-orange-400"},
    {icon: Zap, text: "Integração em 15 minutos", color: "text-yellow-400"}
];

export const testimonials = [
    {
        name: "Dr. Ricardo Almeida",
        role: "Dentista, Clínica Almeida Odontologia",
        content: "Antes da Weppy, muitos pacientes mandavam mensagem e acabavam sem resposta durante o atendimento. Hoje a IA responde instantaneamente, agenda avaliações e organiza tudo no WhatsApp. A clínica ficou muito mais profissional.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=150&h=150&fit=crop&crop=face",
        stats: "Aumento de 32% nos agendamentos"
    },
    {
        name: "Ana Rodrigues",
        role: "Lash Designer, JM Beauty Studio",
        content: "Eu literalmente via o dinheiro a fugir pelos dedos. Clientes mandavam mensagem e eu só conseguia responder horas depois. A Weppy não só organizou a minha agenda, como recuperou essas vendas perdidas. Os 35% de aumento são de clientes que eu simplesmente não conseguia atender antes.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/2066039/pexels-photo-2066039.jpeg?w=150&h=150&fit=crop&crop=face",
        stats: "35% aumento em vendas adicionais"
    },
    {
        name: "Fernanda Guimarães",
        role: "Terapeuta e Mentora de Carreira",
        content: "Antes da Weppy, eu perdia horas com curiosos. Agora, minha IA faz as perguntas iniciais, qualifica o lead e só agenda a primeira sessão com quem realmente tem perfil. Profissionalizou meu primeiro contato.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/6140109/pexels-photo-6140109.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2", // Sugestão de imagem de uma profissional liberal/consultora
        stats: "Economia de 10 horas por semana em triagem"
    }
];

export const stats = [
    {number: 250000, label: "Leads Qualificados", icon: MessageSquare, suffix: "+"},
    {number: 98, label: "Taxa de Satisfação", icon: Star, suffix: "%"},
    {number: 300, label: "Aumento Médio em Vendas", icon: TrendingUp, suffix: "%"},
    {number: 24, label: "Atendimento Ininterrupto", icon: Clock, suffix: "/7"}
];

export const beforeAfter = [
    {
        before: "Leads a esfriar a cada minuto de espera (e a comprar do concorrente).",
        after: "Atendimento imediato que cria uma primeira impressão 'UAU' e acelera a decisão de compra.",
        icon: Clock
    },
    {
        before: "Você a responder a 'preços' e 'olá' o dia todo, sem tempo para pensar no futuro do negócio.",
        after: "Você focado em fazer o seu negócio crescer, enquanto o assistente faz o trabalho repetitivo.",
        icon: Users
    },
    {
        before: "Vendas perdidas porque o cliente mandou mensagem de madrugada ou no fim de semana.",
        after: "Notificações de vendas a chegar no seu telemóvel às 3 da manhã. Feitas pelo seu 'funcionário' perfeito.",
        icon: Target
    },
    {
        before: "Sentimento de caos e de estar sempre a 'apagar incêndios' no WhatsApp.",
        after: "Paz de espírito e a certeza de que cada oportunidade de venda está a ser tratada com máxima eficiência.",
        icon: Brain
    }
];

const allFeatures = [
    '1 Assistente Virtual 24h',
    'Responde clientes e tira dúvidas',
    'Qualifica interessados automaticamente',
    'Construtor de Conversas (Funis)',
    'Envio de mensagens agendadas',
    'Funciona com o telemóvel desligado',
    'Treinamento da IA via RAG',
    'Agendamento Automático via IA',
    'Gestão de Agenda integrada',
    'Rastreamento de conversões com Pixel da Meta',
    'Tokens ilimitados',
    'Relatórios Simplificados',
    'Suporte individual via WhatsApp'
];

// ===== ARRAY DE PLANS OTIMIZADO PARA PLANO ÚNICO =====
export const plans = [
    {
        id: 'mensal',
        name: 'Plano Mensal',
        price: 'R$ 97',
        originalPrice: 'R$ 197', // Manter a ancoragem forte
        period: '/mês',
        description: 'Acesso total e imediato para ver o poder da Weppy. Sem compromisso, cancele quando quiser.',
        features: allFeatures,
        popular: false,
        savings: 'Começar Agora', // CTA mais direto
        checkoutUrl: 'https://pay.kiwify.com.br/mSN9fqk'
    },
    {
        id: 'anual',
        name: 'Plano Anual',
        price: 'R$ 25',
        originalPrice: 'R$ 97',
        period: '/mês', // Equivalente a R$ 297/ano - EXTREMAMENTE poderoso
        description: 'Acesso completo por menos de R$1 por dia. A escolha inteligente para escalar o seu negócio e ter o máximo de lucro.',
        features: allFeatures,
        popular: true, // <<< O FOCO É AQUI
        savings: 'Economia Máxima: Poupe 80%', // Deixar a economia explícita e forte
        checkoutUrl: 'https://pay.kiwify.com.br/rTGqpV7'
    }
];

export const faqs = [
    {
        question: "Preciso de saber programar ou ser 'expert' em tecnologia?",
        answer: "Zero necessidade! Nossa plataforma foi criada para empreendedores, não para programadores. Se você sabe enviar uma mensagem no WhatsApp, você já é um expert na Weppy. Em menos de 15 minutos, com alguns cliques, seu assistente já estará funcionando e pronto para vender. Além disso, a nossa equipe de suporte está pronta para o ajudar em cada passo do processo."
    },
    {
        question: "As respostas do assistente parecem mesmo humanas?",
        answer: "Sim, é impressionante! Usamos a mesma inteligência artificial de ponta do ChatGPT-4o e Gemini. Na prática, isso significa que seu cliente terá uma conversa tão fluida e natural que nem vai perceber que está falando com um robô. É a garantia de um atendimento premium que encanta e vende."
    },
    {
        question: "E se eu quiser assumir a conversa e falar com o cliente?",
        answer: "Claro! Você está sempre no comando. Com apenas um clique, você pode pausar o assistente e assumir a conversa instantaneamente. É perfeito para dar aquele toque humano final e fechar uma venda importante. O melhor dos dois mundos: a eficiência do robô com o seu toque de mestre."
    },
    {
        question: "O assistente pode enviar mídias, como fotos e áudios?",
        answer: "Sim, e de uma forma que impressiona! O seu assistente pode enviar imagens de produtos, vídeos de demonstração e até áudios que soam como se tivessem sido gravados na hora. Imagine qualificar um lead e, no momento certo, enviar um áudio pessoal seu explicando o próximo passo. É o nível máximo de personalização e confiança para acelerar as suas vendas, tudo no automático."
    },
    {
        question: "O meu assistente fica online 24 horas?",
        answer: "Sim, ele é o seu funcionário perfeito! Uma vez ativo, seu assistente trabalha 24/7, sem pausas nem feriados. Isso significa que você vende enquanto dorme, viaja ou está ocupado. Chega de perder vendas por demora na resposta. Seu negócio estará sempre aberto!"
    },
    {
        question: "Isto funciona para o meu tipo de negócio? ",
        answer: "Sim! Se você vende ou atende pelo WhatsApp, a Weppy foi feita para si. Já ajudamos negócios de dezenas de setores, de e-commerce e infoprodutos a clínicas e serviços locais. A IA é treinada para se adaptar ao seu negócio, qualificando leads, agendando visitas ou vendendo produtos. É a ferramenta mais versátil que você pode ter para escalar as suas vendas."
    },
    {
        question: "Ele consegue atender vários clientes ao mesmo tempo?",
        answer: "Sim, sem limites! Imagine ter 10, 50 ou até 200 clientes a fazer perguntas ao mesmo tempo e todos serem respondidos instantaneamente. O assistente não se cansa nem comete erros. É o fim da fila de espera no seu WhatsApp. Cada cliente recebe atenção imediata, o que acelera drasticamente as suas vendas."
    },
    {
        question: "Qual o real impacto que posso esperar nas minhas vendas?",
        answer: "O impacto é direto: mais velocidade, mais vendas. Nossos clientes relatam que, ao eliminar a demora na resposta, a taxa de conversão aumenta drasticamente. Pense em todas as vendas que você já perdeu porque estava ocupado, dormindo ou demorou a responder. A Weppy recupera essas vendas para si, transformando o seu WhatsApp numa máquina de lucro que trabalha 24/7."
    },
    {
        question: "Funciona com o meu número de WhatsApp atual? Preciso de um novo chip?",
        answer: "Funciona perfeitamente com o seu número atual! Não precisa de comprar um novo chip nem mudar nada na sua comunicação. A integração é feita de forma simples e digital. Em minutos, o seu número de sempre, que os seus clientes já conhecem e confiam, estará turbinado com a nossa IA."
    },
    {
        question: "O que acontece logo após eu pagar? Terei suporte?",
        answer: "O acesso é imediato e você nunca estará sozinho! Assim que o pagamento for aprovado, você recebe acesso instantâneo à plataforma com um passo a passo super simples. E o mais importante: a nossa equipe de especialistas em sucesso do cliente estará disponível no WhatsApp para o ajudar em cada etapa, garantindo que você extraia o máximo de vendas da sua nova ferramenta."
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Sim, com total liberdade. Não existem contratos nem fidelidade. Se os resultados não o satisfizerem, pode cancelar com um clique. Nosso foco é mantê-lo como cliente pelo seu sucesso, não por um contrato."
    },
    {
        question: "E se eu não me adaptar ou achar que não é para mim?",
        answer: "Risco Absolutamente Zero! Nós confiamos tanto no poder da Weppy que tiramos todo o peso dos seus ombros. Você tem 7 dias completos para testar tudo, automatizar suas conversas e ver as vendas a acontecerem. Se por QUALQUER motivo achar que não é para si, basta um clique para receber 100% do seu dinheiro de volta. Sem perguntas, sem ressentimentos. Ou você tem resultados, ou não paga nada."
    }
];

export const howItWorks = [
    { step: 1, title: "Conecte seu WhatsApp", description: "Escaneie o QR code e conecte em segundos", icon: Smartphone },
    { step: 2, title: "Configure sua IA", description: "Escolha o modelo e treine com suas informações", icon: Brain },
    { step: 3, title: "Crie seus funis", description: "Monte jornadas personalizadas visualmente", icon: Workflow },
    { step: 4, title: "Monitore resultados", description: "Acompanhe métricas e otimize constantemente", icon: BarChart3 }
];

export const companies = [
    "JM Beauty Studio", // Alinhado com o depoimento
    "Guimarães Mentoria", // Alinhado com o depoimento
    "Una Parque",
    "Clínica Pediátrica",
    "Clínica VP Odonto",
    "Concurseiros Pro",
    "Agência Pinnest Media",
    "Rodrigues Advocacia",
    "Método VTSD",
];
export const urgencyFeatures = [
    "⚡ Bônus: Configuração da sua IA com nossa equipe e suporte prioritário",
    "🔥 Apenas 15 vagas abertas este mês",
    "💰 Comece por apenas R$97 com tudo liberado (sem necessidade de cartão)",
    "🎯 Garantia de 7 dias"
];

export const footerLinks = {
    product: [
        { name: "Recursos", href: "#features" },
        { name: "Preços", href: "#pricing" },
        { name: "Como Funciona", href: "#how-it-works" },
    ],
    support: [
        { name: "Fale Conosco", href: "https://wa.me/5561999999999" },
        { name: "Resultados", href: "#results" },
        { name: "Depoimentos", href: "#testimonials" },
    ],
    legal: [
        { name: "Termos de Uso", href: "/termos" },
        { name: "Privacidade", href: "/privacidade" },
        { name: "LGPD", href: "/lgpd" },
    ]
};

export const purchaseToasts = [
    {
        icon: "✨",
        message: "Mariana Brandão assinou o Plano Mensal.",
        time: "agora mesmo"
    },
    {
        icon: "✨",
        message: "Lucas Felipe assinou o Plano Anual.",
        time: "há 1 minuto"
    },
    {
        icon: "✨",
        message: "Camila Rocha assinou o Plano Mensal.",
        time: "há 2 minutos"
    },
    {
        icon: "✨",
        message: "Rafael Martins assinou o Plano Anual.",
        time: "há 3 minutos"
    },
    {
        icon: "✨",
        message: "Juliana Alves assinou o Plano Mensal.",
        time: "há 4 minutos"
    },
    {
        icon: "✨",
        message: "Thiago Henrique assinou o Plano Anual.",
        time: "agora mesmo"
    },
    {
        icon: "✨",
        message: "Fernanda Lima assinou o Plano Mensal.",
        time: "há 5 minutos"
    },
    {
        icon: "✨",
        message: "Gabriel Costa assinou o Plano Anual.",
        time: "há 2 minutos"
    },
    {
        icon: "✨",
        message: "Amanda Freitas assinou o Plano Mensal.",
        time: "há 6 minutos"
    },
    {
        icon: "✨",
        message: "Bruno Carvalho assinou o Plano Anual.",
        time: "há 7 minutos"
    }
];