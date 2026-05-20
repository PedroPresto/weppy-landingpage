// src/components/LandingPage/landingPageData.ts

import {
    Brain, BarChart3, Inbox, Zap, Workflow, Users, TrendingUp, Sparkles,
    MessageSquare, Star, Clock, Target, Smartphone, Images, Database, CalendarCheck
} from 'lucide-react';
import type { ChatStep } from './ChatMockup/types';

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

export const benefits = [
    {icon: Users, text: "Atendimentos simultâneos", color: "text-green-400"},
    {icon: Images, text: "Envio de mídias", color: "text-pink-400"},
    {icon: Sparkles, text: "IA Humanizada", color: "text-purple-400"},
    {icon: TrendingUp, text: "Follow Up inteligente", color: "text-orange-400"},
    {icon: Zap, text: "Integração em 5 minutos", color: "text-yellow-400"}
];

export const testimonials = [
    {
        name: "Carlos Silva",
        role: "Dono, Café Especial Grão Nobre",
        content: "Eu sou o 'faz-tudo': torro o café, empacoto e vendo. A Weppy se tornou minha equipe de vendas. Ela responde sobre os tipos de grãos, calcula o frete e manda o link do Pix. É surreal!",
        rating: 5,
        avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=150&h=150&fit=crop&crop=face",
        stats: "Aumento de 40% em vendas"
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
        id: 'trimestral',
        name: 'Plano Trimestral',
        price: 'R$ 82',
        originalPrice: 'R$ 97',
        period: '/mês', // Equivalente a R$ 246 no total
        description: 'Um ótimo desconto para quem quer mais tempo para ver os resultados e otimizar as vendas.',
        features: allFeatures,
        popular: false, // Tirar o "popular" daqui para não dividir a atenção
        savings: 'Poupe 15%',
        checkoutUrl: 'https://pay.kiwify.com.br/6vyFg62'
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
        answer: "Zero necessidade! Nossa plataforma foi criada para empreendedores, não para programadores. Se você sabe enviar uma mensagem no WhatsApp, você já é um expert na Weppy. Em menos de 5 minutos, com alguns cliques, seu assistente já estará funcionando e pronto para vender. Além disso, a nossa equipa de suporte está pronta para o ajudar em cada passo do processo."
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
        answer: "Sim! Se você vende ou atende pelo WhatsApp, a Weppy foi feita para si. Já ajudamos negócios de dezenas de setores — de e-commerce e infoprodutos a clínicas e serviços locais. A IA é treinada para se adaptar ao seu negócio, qualificando leads, agendando visitas ou vendendo produtos. É a ferramenta mais versátil que você pode ter para escalar as suas vendas."
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
        answer: "O acesso é imediato e você nunca estará sozinho! Assim que o pagamento for aprovado, você recebe acesso instantâneo à plataforma com um passo a passo super simples. E o mais importante: a nossa equipa de especialistas em sucesso do cliente estará disponível no WhatsApp para o ajudar em cada etapa, garantindo que você extraia o máximo de vendas da sua nova ferramenta."
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
    "Grão Nobre Cafés", // Alinhado com o depoimento
    "JM Beauty Studio", // Alinhado com o depoimento
    "Guimarães Mentoria", // Alinhado com o depoimento
    "Sabor em Casa Delivery",
    "Clínica VP Odonto",
    "Agência Impulso Digital",
    "Concurseiros Pro",
    "Agência Pinnest Media",
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
        { name: "Integrações", href: "#" },
    ],
    support: [
        { name: "Central de Ajuda", href: "#" },
        { name: "Contato", href: "#" },
        { name: "Status", href: "#" },
    ],
    legal: [
        { name: "Termos de Uso", href: "#" },
        { name: "Privacidade", href: "#" },
        { name: "LGPD", href: "#" },
    ]
};

export const purchaseToasts = [
    {
        icon: "💅",
        message: "Uma Lash Designer de Lisboa, PT acabou de garantir o Plano Anual.",
        time: "agora mesmo"
    },
    {
        icon: "☕",
        message: "Carlos S. de São Paulo, BR colocou o seu café para vender no piloto automático.",
        time: "há 2 minutos"
    },
    {
        icon: "🧠",
        message: "Uma terapeuta do Porto, PT acabou de poupar 10 horas semanais com o Plano Anual.",
        time: "há 45 segundos"
    },
    {
        icon: "🛍️",
        message: "O dono de um e-commerce no Rio de Janeiro, BR assinou o Plano Anual para vender 24/7.",
        time: "há 3 minutos"
    },
    {
        icon: "🏡",
        message: "Um corretor de imóveis de Faro, PT acabou de se juntar à Weppy.",
        time: "agora mesmo"
    },
    {
        icon: "🦷",
        message: "A Clínica VP Odonto de Belo Horizonte, BR garantiu o Plano Anual com 80% de desconto.",
        time: "há 1 minuto"
    },
    {
        icon: "🚀",
        message: "A Agência Pinnest Media de Brasília, DF acabou de automatizar o seu funil de vendas.",
        time: "há 4 minutos"
    },
    {
        icon: "🍽️",
        message: "O dono de um delivery em Braga, PT não vai perder mais nenhuma venda de madrugada.",
        time: "há 2 minutos"
    }
];