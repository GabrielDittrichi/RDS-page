import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import UltraButton from '../ui/UltraButton';
import ElegantButton from '../ui/ElegantButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    niche: '',
    phone: '',
    cityOfOperation: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset do formulário após alguns segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          niche: '',
          phone: '',
          cityOfOperation: '',
          message: ''
        });
      }, 5000);
    }, 1000);
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Vamos <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Conversar</span>
          </h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo e nossa equipe entrará em contato para discutir como podemos ajudar seu negócio.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 gradient-dark p-8 text-gray-200 flex flex-col justify-center">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 text-gray-100">Informações de Contato</h3>
                <p className="mb-8">
                  Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar a impulsionar seu negócio no ambiente digital.
                </p>
                <div className="space-y-4">
                 
                  <div>
                    <p className="font-semibold text-gray-100">Email</p>
                    <p>business@realdigitalsociety.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Telefone</p>
                    <p>31 99470-4527</p>
                  </div>
                  <div>
                    <a href="https://wa.me/5531994704527" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-2">
                      <FaWhatsapp className="mr-2" /> Fale Conosco no WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-3 p-8">
              {isSubmitted ? (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                    <FaPaperPlane className="text-gray-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600">
                    Obrigado pelo seu contato. Nossa equipe retornará em breve.
                  </p>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} variants={itemVariants}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">Nicho da Empresa</label>
                      <input
                        type="text"
                        id="niche"
                        name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Área de atuação"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="cityOfOperation" className="block text-sm font-medium text-gray-700 mb-1">Cidade de atuação *</label>
                      <input
                        type="text"
                        id="cityOfOperation"
                        name="cityOfOperation"
                        value={formData.cityOfOperation}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Cidade onde sua empresa atua"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>
                  
                  <ElegantButton
                    type="submit"
                    variant="primary"
                    className="w-full py-3"
                    icon={<FaPaperPlane />}
                    iconPosition="right"
                    disabled={isSubmitting}
                    size="md"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </ElegantButton>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
