import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { services, Service } from '../../data/services';

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
    // Garante que não estoure o array e faça loop se necessário (embora a lógica de slide cuide disso)
    // Para simplificar, vamos apenas pegar o slice correto.
    // Se for o último slide e não tiver 3 itens, slice resolve.
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

