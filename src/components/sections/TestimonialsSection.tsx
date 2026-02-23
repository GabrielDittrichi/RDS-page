import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaChartLine, FaRocket, FaTrophy } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Marina Costa",
      position: "CEO, EcoTech Solutions",
      company: "Startup de Tecnologia Verde",
      image: "profile1.jpg",
      text: "Pare de deixar para amanhã! Foi exatamente isso que a R Digital nos disse quando chegamos até eles. Em 4 meses, saímos de zero para 50 mil seguidores e triplicamos nosso faturamento. A transparência deles é impressionante - sabemos exatamente onde cada real é investido.",
      stars: 5,
      results: "300% aumento no faturamento",
      metric: "50k",
      metricLabel: "Novos Seguidores",
      icon: <FaRocket className="text-2xl" />
    },
    {
      name: "Diego Almeida",
      position: "Diretor Comercial, FitLife Academia",
      company: "Rede de Academias",
      image: "profile2.jpg",
      text: "Crescer junto com os clientes não é só um slogan para eles, é realidade! Quando nossa academia estava com dificuldades, a R Digital não apenas criou campanhas, mas se tornou nosso parceiro estratégico. Hoje temos 3 unidades e uma lista de espera!",
      stars: 5,
      results: "200% crescimento em matrículas",
      metric: "3x",
      metricLabel: "Expansão de Unidades",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      name: "Carla Rodrigues",
      position: "Fundadora, Boutique Elegance",
      company: "E-commerce de Moda",
      image: "profile3.jpg",
      text: "A transparência da R Digital mudou minha visão sobre agências. Eles mostram cada clique, cada conversão, cada centavo investido. Em 6 meses, meu e-commerce saiu do vermelho para ser referência no nicho. Vender o meu negócio realmente virou o negócio deles!",
      stars: 5,
      results: "500% ROI em campanhas",
      metric: "1M+",
      metricLabel: "Faturamento Mensal",
      icon: <FaTrophy className="text-2xl" />
    },
    {
      name: "Rafael Santos",
      position: "Proprietário, TechRepair Pro",
      company: "Assistência Técnica",
      image: "profile4.jpg",
      text: "Eu estava cético sobre marketing digital, mas a R Digital provou que funciona. Eles não vendem sonhos, vendem resultados. Minha assistência técnica que atendia 20 clientes por mês agora atende mais de 200. A transparência deles me deu confiança para investir mais.",
      stars: 5,
      results: "1000% aumento em clientes",
      metric: "200+",
      metricLabel: "Clientes/Mês",
      icon: <FaRocket className="text-2xl" />
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [inView, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-gray-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Histórias de <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent">Sucesso Real</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Quando dizemos que crescemos junto com nossos clientes, não é marketing - são fatos. 
            Veja como a transparência e resultados reais transformaram estes negócios.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-xl relative">
                    <FaQuoteLeft className="text-4xl text-gray-200 absolute top-6 left-6" />
                    
                    <div className="relative z-10">
                      <p className="text-lg text-gray-300 mt-10 mb-4 leading-relaxed">
                        "{testimonials[currentIndex].text}"
                      </p>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`${i < testimonials[currentIndex].stars ? 'text-yellow-400' : 'text-gray-300'} text-xl mr-1`} 
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white">
                          <span className="text-xl font-bold">{testimonials[currentIndex].name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                          <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                          <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Card */}
                <div className="lg:col-span-1">
                  <div className="gradient-silver2 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Resultados</h3>
                      {testimonials[currentIndex].icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-white mb-2">
                        {testimonials[currentIndex].metric}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {testimonials[currentIndex].metricLabel}
                      </div>
                    </div>
                    
                    <div className="gradient-silver bg-opacity-10 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-100 mb-1 font-bold">Impacto Principal</div>
                      <div className="font-semibold">{testimonials[currentIndex].results}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-12 gap-6 items-center">
            <motion.button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-gray-700' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>


        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pare de deixar para amanhã!
            </h3>
            <p className="text-gray-600 mb-6">
              Seja a próxima história de sucesso. Vamos crescer juntos com transparência total.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-silver text-[#FFFFFF] px-8 py-3 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Comece Sua Transformação Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

