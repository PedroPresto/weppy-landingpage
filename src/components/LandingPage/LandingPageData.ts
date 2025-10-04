// src/components/LandingPage/landingPageData.ts

import {
    Brain, BarChart3, Inbox, Zap, Workflow, Users, TrendingUp, Shield,
    MessageSquare, Star, Clock, Target, Smartphone,
} from 'lucide-react';

export const features = [
    {
        icon: Brain,
        title: "Respostas que Parecem Humanas",
        description: "O seu assistente entende o que o cliente quer e responde de forma natural, criando confiança para fechar a venda.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        icon: Workflow,
        title: "Crie Conversas Automáticas",
        description: "Defina o passo a passo do atendimento com um sistema de arrastar e soltar. Simples, visual e sem precisar de programar.",
        gradient: "from-red-500 to-cyan-500"
    },
    {
        icon: BarChart3,
        title: "Relatórios Fáceis de Entender",
        description: "Descubra quais conversas estão a gerar mais vendas com gráficos simples, para que saiba exatamente o que está a funcionar.",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        icon: Inbox,
        title: "Assuma o Controle Quando Quiser",
        description: "Veja todas as conversas num só lugar e entre no chat a qualquer momento para falar pessoalmente com um cliente.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        icon: Zap,
        title: "Funciona 24h na Nuvem",
        description: "Após configurar, o seu assistente fica online dia e noite, mesmo com o seu computador ou telemóvel desligado.",
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        icon: Clock,
        title: "Envie Mensagens na Hora Certa",
        description: "Agende mensagens de acompanhamento (follow-up) para garantir que nenhuma oportunidade de venda é esquecida.",
        gradient: "from-purple-500 to-red-500"
    }
];

export const benefits = [
    {icon: TrendingUp, text: "Aumente suas conversões em até 300%", color: "text-green-400"},
    {icon: Users, text: "Atenda milhares de clientes simultaneamente", color: "text-red-400"},
    {icon: Shield, text: "Segurança e privacidade garantidas", color: "text-orange-400"},
    {icon: Zap, text: "Integração em menos de 5 minutos", color: "text-yellow-400"}
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
        content: "Minha agenda era uma loucura! Eu perdia clientes por não conseguir responder a todas no WhatsApp. Com a Weppy minhas vendas aumentaram 35%",
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
        before: "Clientes irritados com a demora (e a comprar do concorrente).",
        after: "Respostas instantâneas que impressionam e transformam curiosos em clientes.",
        icon: Clock
    },
    {
        before: "Você a responder a 'preços' e 'olá' o dia todo, sem tempo para o que importa.",
        after: "Você focado em fazer o seu negócio crescer, enquanto o assistente faz o trabalho repetitivo.",
        icon: Users
    },
    {
        before: "Vendas perdidas porque o cliente mandou mensagem de madrugada.",
        after: "Vendas fechadas às 3 da manhã pelo seu 'funcionário' que nunca dorme.",
        icon: Target
    },
    {
        before: "Sentimento de caos e de estar sempre a 'apagar incêndios' no WhatsApp.",
        after: "Paz de espírito, sabendo que nenhuma oportunidade de venda está a ser ignorada.",
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
    'Relatórios Simplificados',
    'Suporte individual via WhatsApp'
];

// ===== ARRAY DE PLANS OTIMIZADO PARA PLANO ÚNICO =====
export const plans = [
    {
        id: 'mensal',
        name: 'Plano Mensal',
        price: 'R$ 97',
        originalPrice: 'R$ 197',
        period: '/mês',
        description: 'Ideal para experimentar todo o poder da Weppy sem compromisso. Cancele quando quiser.',
        features: allFeatures,
        popular: false,
        savings: 'Comece já!', // Alterado para um CTA
        checkoutUrl: 'https://pay.kiwify.com.br/mSN9fqk'
    },
    {
        id: 'trimestral',
        name: 'Plano Trimestral',
        price: 'R$ 82',
        originalPrice: 'R$ 97',
        period: '/mês',
        description: 'A escolha mais popular! Poupe 15% e tenha mais tranquilidade para ver o seu negócio crescer.',
        features: allFeatures,
        popular: false,
        savings: 'Poupe 15%',
        checkoutUrl: 'https://pay.kiwify.com.br/6vyFg62'
    },
    {
        id: 'anual',
        name: 'Plano Anual',
        price: 'R$ 25',
        originalPrice: 'R$ 97',
        period: '/mês',
        description: 'O melhor custo-benefício para quem está focado no longo prazo e quer a máxima economia.',
        features: allFeatures,
        popular: true,
        savings: 'Poupe 80%',
        checkoutUrl: 'https://pay.kiwify.com.br/rTGqpV7'
    }
];

export const faqs = [
    {
        question: "Preciso de saber programar ou ser 'expert' em tecnologia?",
        answer: "De todo! A nossa plataforma foi desenhada para ser super simples. Se sabe usar o WhatsApp, sabe usar a Weppy. A configuração inicial é feita com poucos cliques e nós damos todo o suporte necessário."
    },
    {
        question: "As respostas do assistente parecem mesmo humanas?",
        answer: "Sim! Usamos a tecnologia mais avançada (a mesma do ChatGPT-4o e Gemini) para garantir que as respostas sejam naturais e personalizadas. O seu cliente sentirá que está a falar com uma pessoa."
    },
    {
        question: "Posso ser banido do WhatsApp por usar a Weppy?",
        answer: "Não. A nossa tecnologia utiliza uma conexão segura e autorizada pelo WhatsApp. Desde que não use a ferramenta para enviar spam, a sua conta estará perfeitamente segura."
    },
    {
        question: "E se eu quiser assumir a conversa e falar com o cliente?",
        answer: "É muito fácil! A qualquer momento, pode entrar na nossa caixa de entrada, pausar o assistente para aquela conversa específica e responder pessoalmente ao seu cliente."
    },
    {
        question: "O meu assistente fica online 24 horas?",
        answer: "Sim! Após configurar, ele funciona na nuvem e fica online 24 horas por dia, 7 dias por semana, mesmo com o seu telemóvel ou computador desligado."
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Claro! Não há fidelidade nem letras pequenas. Você pode cancelar a sua subscrição a qualquer momento, sem complicações."
    }
];

export const howItWorks = [
    { step: 1, title: "Conecte seu WhatsApp", description: "Escaneie o QR code e conecte em segundos", icon: Smartphone },
    { step: 2, title: "Configure sua IA", description: "Escolha o modelo e treine com suas informações", icon: Brain },
    { step: 3, title: "Crie seus funis", description: "Monte jornadas personalizadas visualmente", icon: Workflow },
    { step: 4, title: "Monitore resultados", description: "Acompanhe métricas e otimize constantemente", icon: BarChart3 }
];

export const companies = [ "TechCorp", "InnovateLab", "FutureStart", "DigitalHub", "SmartSolutions", "NextGen" ];

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