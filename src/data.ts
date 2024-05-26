import Atualizacao1 from './assets/img/atualizacoes-1.png';
import Atualizacao2 from './assets/img/atualizacoes-2.png';
import Atualizacao3 from './assets/img/atualizacoes-3.png';
import Atualizacao4 from './assets/img/atualizacoes-4.png';


export const gameTitle = [
    'FIFA',
    'LOL',
    'Valorant',
    'FreeFire',
    'Counter Strike',
    'Fortnite'
]

export const boasVindas = 'A Game.Her é uma plataforma dedicada a divulgar eventos de jogos, promovendo a maior participação de meninas e mulheres no universo gamer. Nossa missão é garantir que jogadoras de todas as idades e níveis de experiência encontrem eventos que as acolham e celebrem.'

export const principaisEventos = 'Encontre uma variedade de eventos de jogos focados em meninas e mulheres, desde torneios e campeonatos até meetups e workshops. Nosso calendário é constantemente atualizado para que você esteja sempre por dentro das últimas oportunidades.'

export const experienciaPersonalizada = 'Ao se cadastrar na plataforma, é possível ter uma experiência única e personalizada! Cada evento listado na Girls Game Hub vem com informações detalhadas, incluindo datas, horários, formatos de competição, requisitos de inscrição e muito mais. Facilitamos para que você saiba tudo o que precisa antes de participar. Filtros Personalizados: Use nossos filtros para encontrar eventos que se encaixem perfeitamente no seu interesse e disponibilidade. Filtre por tipo de jogo, localização, modalidade (online ou presencial) e faixa etária. Notificações e Lembretes: Cadastre-se para receber notificações sobre novos eventos e lembretes dos eventos em que você se inscreveu, garantindo que você nunca perca uma oportunidade de se envolver.'

export const recomendacaoEvento = [
    {   data: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' }).format(new Date('2024-06-30')).replace('de', ''),
        titulo: 'Maratona de Jogos Indie', 
        descricao: 'Uma celebração de jogos indie incríveis.'
    },
    {   data: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' }).format(new Date('2024-07-05')).replace('de', ''), 
        titulo: 'Torneio de Aventura Épica', 
        descricao: 'Competições em jogos de aventura e RPG.'
    },
    {   data: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' }).format(new Date('2024-07-10')).replace('de', ''), 
        titulo: 'Desafio de Estratégia Online', 
        descricao: 'Teste suas habilidades em jogos de estratégia.'
    }
]

export const atualizacoes = [
    {
        title: 'Torneio de FIFA',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum sem nunc porta mauris nisi in donec enim. Eget sit sem erat diam porttitor.',
        date : new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit'}).format(new Date('2024-07-11')),
        local: 'Recife, PE',
        img: Atualizacao2,
        href: '/eventos/fifa'
    },
    {
        title: 'Competição de CS',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum sem nunc porta mauris nisi in donec enim. Eget sit sem erat diam porttitor.',
        date : new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit'}).format(new Date('2024-07-05')),
        local: 'Recife, PE',
        img: Atualizacao1
    },
    {
        title: 'Evento de LOL',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum sem nunc porta mauris nisi in donec enim. Eget sit sem erat diam porttitor.',
        date : new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit'}).format(new Date('2024-06-01')),
        local: 'São Paulo, SP',
        img: Atualizacao3
    },
    {
        title: 'VR GAMES',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum sem nunc porta mauris nisi in donec enim. Eget sit sem erat diam porttitor.',
        date : new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit'}).format(new Date('2024-06-10')),
        local: 'Vitória, ES',
        img: Atualizacao4
    }
]