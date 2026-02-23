import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaEye, FaRocket, FaClock, FaChartLine, FaHeart, FaShieldAlt, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stats = [
    { number: "100%", label: "Transparência", icon: <FaEye /> },
    { number: "200+", label: "Clientes Crescendo", icon: <FaChartLine /> },
    { number: "100%", label: "De Aprovação", icon: <FaShieldAlt /> },
    { number: "24/7", label: "Suporte Dedicado", icon: <FaHeart /> }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Pare de deixar para <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">amanhã!</span>
          </h2>
          <p className="section-subtitle max-w-4xl mx-auto text-lg">
            A Real Digital Society foi fundada com um objetivo claro: ser transparente com o cliente e crescer junto com os clientes. 
            Não somos apenas uma agência - somos seus parceiros de crescimento.
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div className="gradient-silver3 text-gray-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FaHandshake className="text-3xl" />
                  Nossa Missão
                </h3>
                <p className="text-lg leading-relaxed">
                  Crescer junto com nossos clientes através da transparência total. Cada estratégia, cada investimento, 
                  cada resultado é compartilhado em tempo real. Quando você cresce, nós crescemos.
                </p>
              </div>

              <div className="gradient-silver3 text-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <h4 className="text-xl font-bold text-white mb-4">Por que somos diferentes?</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-white">
                      <strong>Transparência Real:</strong> Você vê exatamente onde cada real é investido e qual o retorno gerado.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-white">
                      <strong>Parceria Verdadeira:</strong> Seu sucesso é nosso sucesso. Crescemos juntos ou não crescemos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-white">
                      <strong>Resultados Mensuráveis:</strong> Cada estratégia tem métricas claras e objetivos definidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="gradient-silver2 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <img src="/logoprata.png" alt="Real Digital Society" className="h-24 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">O Início</h4>
                      <p className="text-gray-300 text-sm">
                        Fundada com a promessa de transparência total no marketing digital.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaRocket className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Crescimento</h4>
                      <p className="text-gray-300 text-sm">
                        Mais de 200 empresas transformadas com nossa abordagem transparente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaUsers className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Parceiros</h4>
                      <p className="text-gray-300 text-sm">
                        Não somos fornecedores, somos parceiros de crescimento dos nossos clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="gradient-silver rounded-2xl p-6 text-center shadow-xl border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="text-3xl text-white mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-black text-sm font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="gradient-silver3 rounded-3xl p-12 text-white mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Nossos Valores Não Negociáveis</h3>
            <p className="text-xl text-gray-200">
              Estes princípios guiam cada decisão que tomamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEye className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3">Transparência</h4>
              <p className="text-gray-200">
                Você vê tudo: investimentos, resultados, estratégias. Sem caixas pretas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3">Parceria</h4>
              <p className="text-gray-200">
                Crescemos juntos. Seu sucesso é nosso sucesso, literalmente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3">Resultados</h4>
              <p className="text-gray-200">
                Cada ação tem um objetivo mensurável. Sem achismos, só dados.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3">Dedicação</h4>
              <p className="text-gray-200">
                Tratamos seu negócio como se fosse nosso. Porque, de certa forma, é.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-white rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Pare de deixar para amanhã!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vamos crescer juntos com transparência total. Cada real investido, cada resultado alcançado, 
            cada estratégia implementada - você verá tudo em tempo real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-silver text-white px-8 py-4 rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Comece Sua Transformação
            </button>
            <button
              onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gradient-silver text-gray-600 px-8 py-4 rounded-xl hover:bg-gray-400 hover:text-black   transition-all duration-300 font-semibold text-lg"
            >
              Veja Nossos Resultados
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

