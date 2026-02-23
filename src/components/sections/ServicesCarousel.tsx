import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ElegantButton from '../ui/ElegantButton';

// Importar ícones
import { 
  FaChartLine, 
  FaPaintBrush, 
  FaGoogle, 
  FaFacebook, 
  FaYoutube, 
  FaLaptopCode, 
  FaHeadset, 
  FaLightbulb 
} from 'react-icons/fa';

const ServicesCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const services = [
    {
      icon: <FaChartLine className="text-4xl text-gray-300 mb-4" />,
      title: "Tráfego Pago",
      description: "Estratégias de tráfego pago para maximizar seu ROI e alcançar seu público-alvo ideal.",
      image: "/tf.gif"
    },
    {
      icon: <FaPaintBrush className="text-4xl text-gray-300 mb-4" />,
      title: "Criativos",
      description: "Desenvolvimento de materiais visuais impactantes que capturam a essência da sua marca.",
      image: "/cr.gif"
    },
    {
      icon: <FaGoogle className="text-4xl text-gray-300 mb-4" />,
      title: "Google Ads",
      description: "Campanhas otimizadas para o Google que aumentam sua visibilidade e conversões.",
      image: "/gg.gif"
    },
    {
      icon: <FaFacebook className="text-4xl text-gray-300 mb-4" />,
      title: "Meta Ads",
      description: "Estratégias personalizadas para Facebook e Instagram que engajam seu público-alvo.",
      image: "/mt.gif"
    },
    {
      icon: <FaYoutube className="text-4xl text-gray-300 mb-4" />,
      title: "YouTube Ads",
      description: "Anúncios em vídeo que capturam a atenção e geram resultados mensuráveis.",
      image: "/yt.gif" // Caminho absoluto a partir da pasta public
    },
    {
      icon: <FaLaptopCode className="text-4xl text-gray-300 mb-4" />,
      title: "Websites",
      description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão.",
      image: "/wb.gif"
    },
    {
      icon: <FaHeadset className="text-4xl text-gray-300 mb-4" />,
      title: "Comunicação Full Time",
      description: "Suporte dedicado e comunicação constante para acompanhar cada etapa do seu projeto.",
      image: "/cm.gif"
    },
    {
      icon: <FaLightbulb className="text-4xl text-gray-300 mb-4" />,
      title: "Estratégias Personalizadas",
      description: "Soluções sob medida para os desafios específicos do seu negócio.",
      image: "/st.gif"
    },
    {
      icon: <FaLightbulb className="text-4xl text-gray-300 mb-4" />,
      title: "Social Mídia",
      description: "Soluções sob medida para os desafios específicos do seu negócio.",
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTNydzVkZWthNHlreHVieWMzMmczNzVteDMybW53cjJzNjd0ZDhkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/atZII8NmbPGw0/giphy.gif"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section id="serviços" className="section-padding bg-cinza">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="section-title">
            <span className="text-white">Nossos</span> <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="section-subtitle text-white">
            Oferecemos soluções completas de marketing digital para impulsionar seu negócio no ambiente online, 
            com estratégias personalizadas e resultados comprovados.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                  variants={itemVariants}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} service`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-300 text-center">{service.title}</h3>
                    <p className="text-gray-300 text-center">{service.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <ElegantButton 
            variant="primary"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicite um Orçamento
          </ElegantButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
