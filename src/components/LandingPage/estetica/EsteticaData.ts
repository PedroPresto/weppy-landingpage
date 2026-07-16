// src/components/LandingPage/estetica/EsteticaData.ts
// Copy dedicado da LP segmentada para profissionais autônomos de estética
// (lash, sobrancelha, esteticista, nail). Reaproveita os primitivos da home
// (ChatMockup, plans/checkout) e carrega apenas a copy específica deste público.

import { Zap, Megaphone, CalendarCheck, Smartphone, Sparkles, HandHeart } from 'lucide-react';
import type { ChatStep } from '../ChatMockup/types';

/* ===== HERO — chat de demonstração (cabeleireira · luzes) ===== */
export const esteticaHeroChat: ChatStep[] = [
    { id: 'c1', from: 'customer', text: 'Oi! Vc faz luzes? Quanto fica? 😍', holdMs: 1400 },
    { id: 't1', type: 'typing', agent: 'ai', durationMs: 1000 },
    {
        id: 'b1',
        from: 'bot',
        agent: 'ai',
        text: 'Faço sim! 💛 As luzes ficam a partir de R$220, já com o toner incluso. Tenho horário quinta às 14h ou sexta às 9h. Qual fica melhor pra você?',
        holdMs: 1800,
    },
    { id: 'c2', from: 'customer', text: 'Sexta 9h 🙌', holdMs: 1300 },
    { id: 't2', type: 'typing', agent: 'ai', durationMs: 900 },
    {
        id: 'b2',
        from: 'bot',
        agent: 'ai',
        text: 'Fechado! Agendei sua sexta às 9h ✨ Te mando um lembrete na véspera. Até lá! 💛',
        holdMs: 2600,
    },
];

/* ===== A CENA — antes e depois (manicure · alongamento de unha) ===== */
export const esteticaScene: { before: ChatStep[]; after: ChatStep[] } = {
    before: [
        { id: 'c1', from: 'customer', text: 'Oi! Vc faz alongamento de unha? Quanto?', holdMs: 2200 },
        { id: 'c2', from: 'customer', text: '??', holdMs: 2200 },
        { id: 'c3', from: 'customer', text: 'Deixa, já agendei em outro lugar 🙃', holdMs: 2800 },
    ],
    after: [
        { id: 'c1', from: 'customer', text: 'Oi! Vc faz alongamento de unha? Quanto?', holdMs: 900 },
        { id: 't', type: 'typing', agent: 'ai', durationMs: 700 },
        {
            id: 'b1',
            from: 'bot',
            agent: 'ai',
            text: 'Faço sim! 💅 O alongamento em fibra fica R$150 e dura de 3 a 4 semanas. Tenho amanhã 10h ou 16h, qual prefere?',
            holdMs: 1600,
        },
        { id: 'c2', from: 'customer', text: 'Amanhã 16h!', holdMs: 1200 },
        { id: 't2', type: 'typing', agent: 'ai', durationMs: 700 },
        {
            id: 'b2',
            from: 'bot',
            agent: 'ai',
            text: 'Agendado ✨ Te mando um lembrete na véspera 💛',
            holdMs: 2000,
        },
    ],
};

/* ===== AS TRÊS DORES RESOLVIDAS ===== */
export const esteticaBenefits = [
    {
        id: 'na-hora',
        icon: Zap,
        title: 'Responde em 1 segundo, mesmo com você ocupada',
        description:
            'A IA atende toda cliente na hora, passa valores, tira dúvida e conduz até o agendamento. Você lê tudo depois, com calma, sabendo que ninguém ficou sem resposta.',
    },
    {
        id: 'reativar',
        icon: Megaphone,
        title: 'Semana fraca? A IA reativa quem já é sua cliente',
        description:
            'Com um clique, dispare uma mensagem pra toda a sua lista e deixe a IA convidar cada cliente de volta, uma por uma, até preencher os horários vazios da semana.',
    },
    {
        id: 'no-show',
        icon: CalendarCheck,
        title: 'Menos faltas, sem você lembrar ninguém',
        description:
            'A IA confirma o agendamento e manda o lembrete na véspera automaticamente. Você para de perder horário com quem esquece e para de fazer cobrança na mão.',
    },
];

/* ===== COMO FUNCIONA ===== */
export const esteticaSteps = [
    {
        step: 1,
        icon: Smartphone,
        title: 'Conecte seu WhatsApp',
        description: 'Escaneie o QR code e pronto. Funciona no seu número atual, sem chip novo.',
    },
    {
        step: 2,
        icon: Sparkles,
        title: 'Ensine seus serviços e valores',
        description: 'Suba sua tabela de preços ou só escreva do seu jeito. A IA aprende e fala como você fala.',
    },
    {
        step: 3,
        icon: CalendarCheck,
        title: 'Defina seus horários',
        description: 'A IA mostra sua disponibilidade real e agenda sozinha, sem conflito de horário.',
    },
    {
        step: 4,
        icon: HandHeart,
        title: 'Volte a atender em paz',
        description: 'A IA responde, agenda e te chama só quando precisa de você.',
    },
];

/* ===== PROVA SOCIAL (Ana como protagonista) ===== */
export const esteticaTestimonials = [
    {
        name: 'Ana Rodrigues',
        role: 'Lash Designer, JM Beauty Studio',
        content:
            'Eu literalmente via o dinheiro fugir pelos meus dedos. As clientes mandavam mensagem e eu só conseguia responder horas depois. A Weppy não só organizou minha agenda, como recuperou essas vendas que eu perdia. Os 35% de aumento são de clientes que eu simplesmente não conseguia atender antes.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/2066039/pexels-photo-2066039.jpeg?w=150&h=150&fit=crop&crop=face',
        stats: '+35% em vendas · agenda organizada sozinha',
        highlight: true,
    },
    {
        name: 'Patrícia Reis',
        role: 'Cabeleireira e Colorista',
        content:
            'No meio de uma coloração eu não conseguia parar pra responder, e era aí que a cliente sumia. Agora a IA responde na hora, passa os valores e já deixa o horário marcado. Minha agenda vive cheia e eu nem pego no celular enquanto atendo.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/6140109/pexels-photo-6140109.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        stats: 'Agenda cheia sem largar a cadeira',
        highlight: false,
    },
];

/* ===== DEMO AO VIVO — a IA da Weppy atendendo de verdade ===== */
export const esteticaDemo = {
    /** Número com a IA da Weppy conectada (conta pedroprestodev). */
    whatsappNumber: '556192817914',
    prefilledMessage:
        'Oi! Vim do site da Weppy e quero ver a IA atendendo na prática 😄',
    get waLink() {
        return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.prefilledMessage)}`;
    },
};

/** Endpoint público que dispara a primeira mensagem da IA pro lead. */
export const LANDING_LEADS_ENDPOINT =
    process.env.NEXT_PUBLIC_WEPPY_API_URL
        ? `${process.env.NEXT_PUBLIC_WEPPY_API_URL}/public/landing-leads`
        : 'https://app.weppy.com.br/api/public/landing-leads';

/* ===== DEPOIMENTO EM VÍDEO (formato story) — cliente real de estética ===== */
export const esteticaVideo = {
    name: 'Camila Borges',
    role: 'Clínica de Estética',
    videoUrl:
        'https://res.cloudinary.com/dsbqk9o5s/video/upload/v1781055819/depoimento_clinica_estetica_camila_borges_pm8zx6.mp4',
};

/* ===== FAQ (adaptado ao público autônomo de estética) ===== */
export const esteticaFaqs = [
    {
        question: 'Preciso saber mexer em tecnologia?',
        answer:
            'Zero. Se você sabe mandar mensagem no WhatsApp, já sabe usar a Weppy. Em 15 minutos, com alguns cliques, sua IA está atendendo. E a nossa equipe te ajuda em cada passo.',
    },
    {
        question: 'As respostas parecem mesmo humanas?',
        answer:
            'Sim. A IA aprende o seu jeito de falar e responde com carinho, como você responderia. As clientes não percebem a diferença.',
    },
    {
        question: 'Funciona no meu número de WhatsApp atual? Preciso de chip novo?',
        answer:
            'Funciona no seu número de sempre. Não precisa de chip novo nem de outro aparelho. A conexão é feita em segundos com um QR code.',
    },
    {
        question: 'E quando eu quiser responder eu mesma?',
        answer:
            'É só assumir a conversa com um clique. Você pausa a IA quando quiser e volta a atender pessoalmente na hora. O controle é sempre seu.',
    },
    {
        question: 'A IA fica online mesmo com meu celular desligado?',
        answer:
            'Fica. Ela atende 24h por dia, mesmo com você dormindo, atendendo ou com o celular guardado na gaveta.',
    },
    {
        question: 'Funciona pro meu tipo de trabalho?',
        answer:
            'Lash, sobrancelha, estética, nail, maquiagem, depilação, qualquer atendimento agendado no WhatsApp. Se você marca horário e passa preço por mensagem, funciona pra você.',
    },
    {
        question: 'A IA pode mandar fotos, como do meu portfólio?',
        answer:
            'Pode. Ela envia fotos, áudios e outros arquivos, então pode mostrar seus trabalhos e tabelas direto na conversa com a cliente.',
    },
    {
        question: 'Posso cancelar quando quiser?',
        answer:
            'Pode, a qualquer momento, sem multa. E ainda tem 7 dias de garantia integral: se não for pra você, devolvemos cada centavo. Sem perguntas.',
    },
];

/* ===== BLOCO DE URGÊNCIA (CTA final) ===== */
export const esteticaUrgencyFeatures = [
    '⚡ Bônus: configuração da sua IA junto com a nossa equipe',
    '💰 Comece por R$97 com tudo liberado, sem precisar de cartão',
    '🎯 Garantia integral de 7 dias. Se a IA não vender pra você, devolvemos cada centavo.',
];
