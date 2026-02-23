import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Importar ícones das plataformas
import facebookIcon from '../../assets/facebook-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';
import googleIcon from '../../assets/google-icon.png';
import youtubeIcon from '../../assets/youtube-icon.png';
import tiktokIcon from '../../assets/tiktok-icon.png';
import whatsappIcon from '../../assets/whatsapp-platform-icon.png';

// Importar imagens de serviços

import googleAdsService from '../../assets/google-ads-service.png';
import socialMediaService from '../../assets/social-media-service.png';
import websiteService from '../../assets/website-development-service.png';
import ecommerceService from '../../assets/ecommerce-service.png';

interface Service {
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

const services: Service[] = [
  {
    id: 'trafego-pago',
    title: 'Tráfego Pago',
    description: 'Estratégias avançadas de tráfego pago para maximizar seu ROI',
    serviceImage: './tf.gif',
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
    serviceImage: './gg.gif',
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
    serviceImage: googleAdsService,
    detailedDescription: 'O YouTube é a segunda maior plataforma de busca do mundo e oferece oportunidades únicas para conectar com sua audiência através de vídeos. Criamos campanhas de vídeo estratégicas que não apenas geram visualizações, mas convertem espectadores em clientes reais.',
    features: [
      'Anúncios TrueView (skippable)',
      'Anúncios Bumper (6 segundos)',
      'Anúncios de descoberta',
      'Campanhas de ação',
      'Segmentação por interesses e comportamento',
      'Remarketing de vídeo'
    ],
    benefits: [
      'Alto engajamento através de vídeo',
      'Segmentação precisa de audiência',
      'Custo-benefício excelente',
      'Aumento de brand awareness',
      'Conversões qualificadas'
    ],
    process: [
      'Estratégia de conteúdo em vídeo',
      'Produção ou otimização de vídeos',
      'Configuração de campanhas',
      'Segmentação de audiência',
      'Lançamento e monitoramento',
      'Otimização baseada em métricas'
    ]
  },
  {
    id: 'tiktok-ads',
    title: 'TikTok Ads',
    description: 'Alcance a geração Z e millennials com anúncios criativos',
    platformIcon: tiktokIcon,
    serviceImage: './yt.gif',
    detailedDescription: 'O TikTok revolucionou a forma como consumimos conteúdo, especialmente entre públicos mais jovens. Nossos especialistas criam campanhas autênticas e criativas que se integram naturalmente ao feed dos usuários, gerando engajamento real e conversões efetivas.',
    features: [
      'In-Feed Ads nativos',
      'Branded Hashtag Challenges',
      'TopView e Brand Takeover',
      'Spark Ads (conteúdo orgânico)',
      'Segmentação por idade e interesses',
      'Pixel de conversão avançado'
    ],
    benefits: [
      'Acesso a audiências jovens',
      'Alto potencial viral',
      'Engajamento autêntico',
      'Custo por mil impressões baixo',
      'Crescimento rápido de marca'
    ],
    process: [
      'Análise de tendências da plataforma',
      'Criação de conteúdo nativo',
      'Configuração de campanhas',
      'Teste A/B de criativos',
      'Monitoramento de engajamento',
      'Escalabilidade de campanhas vencedoras'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Facebook e Instagram Ads para máximo alcance e conversão',
    platformIcon: facebookIcon,
    serviceImage: './mt.gif',
    detailedDescription: 'As plataformas Meta (Facebook e Instagram) oferecem as ferramentas de segmentação mais avançadas do mercado digital. Criamos campanhas altamente direcionadas que aproveitam todo o potencial dessas plataformas para gerar leads qualificados e vendas consistentes.',
    features: [
      'Campanhas no Facebook e Instagram',
      'Stories e Reels Ads',
      'Carousel e Collection Ads',
      'Lead Ads otimizados',
      'Retargeting avançado',
      'Lookalike Audiences'
    ],
    benefits: [
      'Segmentação demográfica precisa',
      'Múltiplos formatos de anúncio',
      'Integração com WhatsApp Business',
      'Remarketing poderoso',
      'ROI comprovado'
    ],
    process: [
      'Configuração do Business Manager',
      'Instalação e configuração de pixels',
      'Criação de audiências customizadas',
      'Desenvolvimento de criativos',
      'Lançamento de campanhas',
      'Otimização contínua'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Gestão completa das suas redes sociais com estratégia e resultados',
    platformIcon: instagramIcon,
    serviceImage: './cm.gif',
    detailedDescription: 'Nossa gestão de redes sociais vai além de apenas postar conteúdo. Desenvolvemos uma estratégia completa que constrói relacionamentos genuínos com sua audiência, aumenta o engajamento e converte seguidores em clientes fiéis.',
    features: [
      'Estratégia de conteúdo personalizada',
      'Criação de posts e stories',
      'Gestão de comunidade',
      'Monitoramento de menções',
      'Relatórios de performance',
      'Influencer marketing'
    ],
    benefits: [
      'Presença consistente online',
      'Aumento do engajamento',
      'Construção de autoridade',
      'Relacionamento com clientes',
      'Geração de leads orgânicos'
    ],
    process: [
      'Auditoria das redes atuais',
      'Desenvolvimento de estratégia',
      'Criação de calendário editorial',
      'Produção de conteúdo',
      'Publicação e engajamento',
      'Análise e otimização'
    ]
  },
  {
    id: 'estrategias-personalizadas',
    title: 'Estratégias Personalizadas',
    description: 'Soluções sob medida para as necessidades específicas do seu negócio',
    serviceImage: './st.gif',
    detailedDescription: 'Cada negócio é único e merece uma abordagem personalizada. Desenvolvemos estratégias de marketing digital completamente customizadas, combinando diferentes canais e táticas para criar uma solução que se alinha perfeitamente com seus objetivos e orçamento.',
    features: [
      'Análise completa do mercado',
      'Estratégia multicanal integrada',
      'Automação de marketing',
      'CRM e nutrição de leads',
      'Análise de concorrência',
      'Consultoria estratégica'
    ],
    benefits: [
      'Solução única para seu negócio',
      'Integração de todos os canais',
      'Otimização de recursos',
      'Vantagem competitiva',
      'Crescimento sustentável'
    ],
    process: [
      'Diagnóstico completo do negócio',
      'Mapeamento de jornada do cliente',
      'Desenvolvimento de estratégia',
      'Implementação faseada',
      'Monitoramento de KPIs',
      'Ajustes estratégicos contínuos'
    ]
  },
  {
    id: 'funis-vendas',
    title: 'Funis de Vendas',
    description: 'Funis otimizados que convertem visitantes em clientes pagantes',
    serviceImage: './sm.gif',
    detailedDescription: 'Construímos funis de vendas altamente otimizados que guiam seus prospects através de uma jornada estruturada, desde o primeiro contato até a conversão final. Cada etapa é cuidadosamente planejada para maximizar as taxas de conversão.',
    features: [
      'Mapeamento da jornada do cliente',
      'Landing pages de alta conversão',
      'Sequências de e-mail marketing',
      'Automação de nutrição',
      'Testes A/B contínuos',
      'Análise de métricas de conversão'
    ],
    benefits: [
      'Aumento das taxas de conversão',
      'Processo de vendas automatizado',
      'Melhor qualificação de leads',
      'Redução do ciclo de vendas',
      'Escalabilidade do negócio'
    ],
    process: [
      'Análise do processo atual',
      'Mapeamento de pontos de conversão',
      'Criação de conteúdo persuasivo',
      'Implementação de automações',
      'Testes e otimizações',
      'Monitoramento de performance'
    ]
  },
  {
    id: 'desenvolvimento-websites',
    title: 'Desenvolvimento de Websites',
    description: 'Sites modernos, responsivos e otimizados para conversão',
    serviceImage: './wb.gif',
    detailedDescription: 'Desenvolvemos websites que não são apenas visualmente atraentes, mas também funcionalmente superiores. Cada site é construído com foco na experiência do usuário, velocidade de carregamento e otimização para mecanismos de busca.',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Velocidade de carregamento otimizada',
      'Integração com ferramentas de marketing',
      'Sistema de gerenciamento de conteúdo',
      'Segurança e backup automático'
    ],
    benefits: [
      'Presença profissional online',
      'Melhor experiência do usuário',
      'Maior visibilidade no Google',
      'Aumento de credibilidade',
      'Geração de leads 24/7'
    ],
    process: [
      'Briefing e planejamento',
      'Criação de wireframes',
      'Design e prototipagem',
      'Desenvolvimento e programação',
      'Testes e otimizações',
      'Lançamento e treinamento'
    ]
  },
  {
    id: 'landing-pages',
    title: 'Criação de Páginas de Vendas',
    description: 'Páginas de alta conversão focadas em resultados específicos',
    serviceImage: websiteService,
    detailedDescription: 'Nossas landing pages são projetadas com um único objetivo: converter visitantes em leads ou clientes. Utilizamos princípios de psicologia do consumidor e design persuasivo para criar páginas que realmente vendem.',
    features: [
      'Design focado em conversão',
      'Copywriting persuasivo',
      'Formulários otimizados',
      'Testes A/B de elementos',
      'Integração com ferramentas de CRM',
      'Análise de heatmaps'
    ],
    benefits: [
      'Taxas de conversão superiores',
      'ROI maximizado em campanhas',
      'Captura eficiente de leads',
      'Mensagem focada e clara',
      'Resultados mensuráveis'
    ],
    process: [
      'Definição de objetivo da página',
      'Pesquisa de público-alvo',
      'Criação de copy persuasivo',
      'Design e desenvolvimento',
      'Implementação de tracking',
      'Testes e otimizações'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerces',
    description: 'Lojas virtuais completas e otimizadas para vendas online',
    serviceImage: ecommerceService,
    detailedDescription: 'Criamos e-commerces completos que não apenas exibem produtos, mas criam experiências de compra excepcionais. Desde a navegação intuitiva até o checkout otimizado, cada elemento é pensado para maximizar as vendas online.',
    features: [
      'Plataforma de e-commerce robusta',
      'Design responsivo e intuitivo',
      'Sistema de pagamento seguro',
      'Gestão de estoque integrada',
      'SEO para produtos',
      'Integração com marketplaces'
    ],
    benefits: [
      'Vendas online 24/7',
      'Alcance nacional e internacional',
      'Gestão centralizada de produtos',
      'Múltiplas formas de pagamento',
      'Relatórios de vendas detalhados'
    ],
    process: [
      'Planejamento da arquitetura',
      'Configuração da plataforma',
      'Design da interface',
      'Cadastro de produtos',
      'Configuração de pagamentos',
      'Testes e lançamento'
    ]
  },
  {
    id: 'automacao-ia',
    title: 'Automações com IA',
    description: 'Inteligência artificial para otimizar processos e aumentar eficiência',
    serviceImage: websiteService,
    detailedDescription: 'Implementamos soluções de inteligência artificial que automatizam tarefas repetitivas, melhoram a experiência do cliente e otimizam processos de marketing. Nossa IA trabalha 24/7 para maximizar seus resultados.',
    features: [
      'Chatbots inteligentes',
      'Automação de e-mail marketing',
      'Segmentação automática de leads',
      'Análise preditiva de comportamento',
      'Otimização automática de campanhas',
      'Personalização em tempo real'
    ],
    benefits: [
      'Redução de custos operacionais',
      'Atendimento 24/7 automatizado',
      'Decisões baseadas em dados',
      'Escalabilidade sem limite',
      'Experiência personalizada'
    ],
    process: [
      'Análise de processos atuais',
      'Identificação de oportunidades',
      'Desenvolvimento de soluções IA',
      'Implementação e integração',
      'Treinamento da equipe',
      'Monitoramento e otimização'
    ]
  },
  {
    id: 'automacao-whatsapp',
    title: 'Automação de WhatsApp',
    description: 'Atendimento automatizado via WhatsApp para melhor experiência do cliente',
    platformIcon: whatsappIcon,
    serviceImage: socialMediaService,
    detailedDescription: 'Transformamos o WhatsApp em uma poderosa ferramenta de vendas e atendimento. Nossas automações inteligentes respondem instantaneamente aos clientes, qualificam leads e direcionam para vendas, tudo de forma natural e humanizada.',
    features: [
      'Chatbot inteligente no WhatsApp',
      'Qualificação automática de leads',
      'Integração com CRM',
      'Campanhas de broadcast',
      'Atendimento humanizado',
      'Métricas de conversação'
    ],
    benefits: [
      'Atendimento instantâneo',
      'Maior taxa de resposta',
      'Qualificação eficiente de leads',
      'Redução de tempo de resposta',
      'Aumento de conversões'
    ],
    process: [
      'Configuração do WhatsApp Business',
      'Desenvolvimento do fluxo de conversa',
      'Implementação do chatbot',
      'Integração com sistemas',
      'Treinamento da equipe',
      'Monitoramento e ajustes'
    ]
  }
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const getCurrentServices = () => {
    const start = currentSlide * servicesPerSlide;
    return services.slice(start, start + servicesPerSlide);
  };

  return (
    <section id="serviços" className="py-20 bg-cinza from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nossos <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas de marketing digital para impulsionar seu negócio no ambiente online, 
            com estratégias personalizadas e resultados comprovados.
          </p>
        </motion.div>

        {/* Carrossel de Serviços */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
              >
                {/* Imagem do Serviço */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.serviceImage} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Ícone da Plataforma (se houver) */}
                  {service.platformIcon && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <img 
                        src={service.platformIcon} 
                        alt="Platform icon"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-8 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                     <br />
                     <br />
                  {/* Botão Saiba Mais */}
                  <button className="w-full bg-gradient-to-r from-gray-500 via-gray-500 to-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:from-gray-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-105">
                    Saiba Mais
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Controles do Carrossel */}
          <div className="flex justify-center items-center space-x-6">
            {/* Setas */}
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-300 opacity-70 hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-300 opacity-70 hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Modal de Detalhes do Serviço */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header do Modal */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-4">
                    {selectedService.platformIcon && (
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <img 
                          src={selectedService.platformIcon} 
                          alt={selectedService.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="space-y-8">
                  {/* Descrição Detalhada */}
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">O que é este serviço?</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">O que está incluído:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefícios */}
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Benefícios para seu negócio:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processo */}
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Como funciona nosso processo:</h4>
                    <div className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="text-gray-300 pt-1">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Solicitar Orçamento
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;

