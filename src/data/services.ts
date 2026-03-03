// Importar ícones das plataformas
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import googleIcon from '../assets/google-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';
// import tiktokIcon from '../assets/tiktok-icon.png'; // Comentado pois não está sendo usado no momento
// import whatsappIcon from '../assets/whatsapp-platform-icon.png'; // Comentado pois não está sendo usado no momento

// Importar imagens de serviços (opcional, usando GIFs da public por enquanto)
// import googleAdsService from '../assets/google-ads-service.png';
// import socialMediaService from '../assets/social-media-service.png';
// import websiteService from '../assets/website-development-service.png';
// import ecommerceService from '../assets/ecommerce-service.png';
// import metaAdsService from '../assets/meta-ads-service.png';

export interface Service {
  id: string;
  title: string;
  description: string;
  platformIcon?: string;
  serviceImage: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: 'trafego-pago',
    title: 'Tráfego Pago',
    description: 'Estratégias avançadas de tráfego pago para maximizar seu ROI',
    serviceImage: '/tf.gif',
    detailedDescription: 'Nosso serviço de tráfego pago é uma estratégia completa para atrair visitantes qualificados para seu negócio através de anúncios pagos em diversas plataformas digitais. Utilizamos técnicas avançadas de segmentação, otimização e análise de dados para garantir que cada real investido gere o máximo retorno possível.',
    features: [
      'Configuração e otimização de campanhas',
      'Segmentação avançada de público-alvo',
      'Criação de anúncios persuasivos',
      'Monitoramento em tempo real',
      'Relatórios detalhados de performance',
      'Otimização contínua de ROI'
    ],
    benefits: [
      'Aumento imediato de visitantes qualificados',
      'Controle total sobre investimento',
      'Resultados mensuráveis e transparentes',
      'Escalabilidade conforme crescimento',
      'Redução do custo por aquisição'
    ],
    process: [
      'Análise do negócio e objetivos',
      'Pesquisa de palavras-chave e público',
      'Criação de campanhas estratégicas',
      'Implementação e monitoramento',
      'Otimização baseada em dados',
      'Relatórios e ajustes contínuos'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Campanhas otimizadas no Google para capturar leads qualificados',
    platformIcon: googleIcon,
    serviceImage: '/gg.gif',
    detailedDescription: 'Especialistas em Google Ads, criamos e gerenciamos campanhas altamente otimizadas na maior plataforma de busca do mundo. Nossa abordagem combina pesquisa de palavras-chave estratégica, criação de anúncios persuasivos e otimização contínua para garantir que sua empresa apareça no momento exato em que seus clientes estão procurando.',
    features: [
      'Campanhas de Pesquisa (Search)',
      'Campanhas de Display',
      'Campanhas de Shopping',
      'Campanhas de Vídeo no YouTube',
      'Remarketing avançado',
      'Extensões de anúncios otimizadas'
    ],
    benefits: [
      'Aparição no topo das pesquisas',
      'Pagamento apenas por cliques',
      'Segmentação geográfica precisa',
      'Controle total do orçamento',
      'Resultados rápidos e mensuráveis'
    ],
    process: [
      'Auditoria da conta existente',
      'Pesquisa de palavras-chave',
      'Estruturação de campanhas',
      'Criação de anúncios e landing pages',
      'Configuração de conversões',
      'Monitoramento e otimização'
    ]
  },
  {
    id: 'youtube-ads',
    title: 'YouTube Ads',
    description: 'Anúncios em vídeo que convertem e engajam sua audiência',
    platformIcon: youtubeIcon,
    serviceImage: '/yt.gif',
    detailedDescription: 'O YouTube é a segunda maior plataforma de busca do mundo e oferece oportunidades únicas para conectar com sua audiência através de vídeos. Criamos campanhas de vídeo estratégicas que não apenas geram visualizações, mas convertem espectadores em clientes reais.',
    features: [
      'Anúncios TrueView (Puláveis)',
      'Anúncios Bumper (6 segundos)',
      'Anúncios Discovery',
      'Segmentação por canais e tópicos',
      'Remarketing de vídeo',
      'Integração com Google Ads'
    ],
    benefits: [
      'Alto engajamento visual',
      'Alcance massivo de audiência',
      'Custo por visualização eficiente',
      'Fortalecimento de marca (Branding)',
      'Segmentação comportamental detalhada'
    ],
    process: [
      'Definição da estratégia de vídeo',
      'Criação/Edição de vídeos para anúncios',
      'Configuração da campanha no Google Ads',
      'Segmentação de público-alvo',
      'Lançamento e monitoramento',
      'Análise de retenção e conversão'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Campanhas poderosas no Facebook e Instagram',
    platformIcon: facebookIcon,
    serviceImage: '/mt.gif',
    detailedDescription: 'Alcance seu público onde ele passa a maior parte do tempo: nas redes sociais. Nossas campanhas de Meta Ads (Facebook e Instagram) são projetadas para gerar demanda, construir marca e converter usuários em clientes fiéis através de criativos envolventes e segmentação precisa.',
    features: [
      'Campanhas no Facebook e Instagram',
      'Carrossel, Stories e Reels Ads',
      'Lead Ads (Formulários nativos)',
      'Catálogo de produtos dinâmico',
      'Públicos personalizados e Lookalike',
      'Pixel do Facebook avançado'
    ],
    benefits: [
      'Segmentação demográfica e de interesses',
      'Formatos visuais altamente engajadores',
      'Retargeting eficaz',
      'Geração de leads qualificados',
      'Vendas diretas via catálogo'
    ],
    process: [
      'Planejamento de criativos e copy',
      'Configuração do Business Manager',
      'Instalação e verificação do Pixel',
      'Criação de públicos segmentados',
      'Testes A/B de anúncios',
      'Escala de campanhas vencedoras'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Gestão estratégica de redes sociais para sua marca',
    platformIcon: instagramIcon,
    serviceImage: '/sm.gif',
    detailedDescription: 'Mais do que apenas postar, gerenciamos sua presença nas redes sociais de forma estratégica para construir uma comunidade engajada em torno da sua marca. Criamos conteúdo relevante, interagimos com seu público e monitoramos a saúde da sua marca no ambiente digital.',
    features: [
      'Planejamento de conteúdo mensal',
      'Criação de posts (arte e legenda)',
      'Gestão de Stories e Reels',
      'Interação com seguidores',
      'Monitoramento de menções',
      'Relatórios de engajamento'
    ],
    benefits: [
      'Aumento do reconhecimento de marca',
      'Comunidade fiel e engajada',
      'Canal direto de comunicação com clientes',
      'Humanização da marca',
      'Feedback em tempo real'
    ],
    process: [
      'Diagnóstico da presença atual',
      'Definição da persona e tom de voz',
      'Criação do calendário editorial',
      'Produção e aprovação de conteúdo',
      'Agendamento e publicação',
      'Análise de métricas e aprendizado'
    ]
  },
  {
    id: 'web-development',
    title: 'Desenvolvimento Web',
    description: 'Sites modernos, rápidos e otimizados para conversão',
    platformIcon: googleIcon,
    serviceImage: '/wb.gif',
    detailedDescription: 'Seu site é sua vitrine digital 24 horas por dia. Desenvolvemos sites profissionais, responsivos e otimizados para SEO que não apenas impressionam visualmente, mas são projetados para converter visitantes em clientes. Utilizamos as tecnologias mais modernas para garantir velocidade e segurança.',
    features: [
      'Sites institucionais e Landing Pages',
      'Design responsivo (Mobile-first)',
      'Otimização para SEO (On-page)',
      'Integração com ferramentas de marketing',
      'CMS fácil de gerenciar',
      'Hospedagem e manutenção'
    ],
    benefits: [
      'Credibilidade e profissionalismo',
      'Melhor posicionamento no Google',
      'Experiência do usuário superior',
      'Base para todas as estratégias digitais',
      'Disponibilidade 24/7 para clientes'
    ],
    process: [
      'Briefing e arquitetura de informação',
      'Wireframing e Design de UI/UX',
      'Desenvolvimento Front-end e Back-end',
      'Inserção de conteúdo',
      'Testes de compatibilidade e performance',
      'Lançamento e treinamento'
    ]
  }
];
