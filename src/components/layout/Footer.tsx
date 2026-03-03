import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks, quickLinks, serviceLinks } from '../../data/navigation';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Coluna 1 - Sobre */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              <img src="/logoprata.png" alt="Real Digital Society" className="h-10 mb-4" />
            </h3>
            <p className="text-gray-300 mb-6">
              Transformamos negócios através de estratégias digitais inovadoras, 
              gerando resultados mensuráveis e construindo relacionamentos duradouros.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Coluna 2 - Links Rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gray-100">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3 - Serviços */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gray-100">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Coluna 4 - Contato */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-gray-100">Contato</h4>
            <ul className="space-y-4">

              <li className="flex items-center">
                <FaPhone className="text-gray-200 mr-3" />
                <span className="text-gray-300">31 99470-4527</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-200 mr-3" />
                <span className="text-gray-300">business@realdigitalsociety.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        

        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Real Digital Society. Todos os direitos reservados.
          </p>
          <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-400">
            <a href="/politica-de-privacidade.pdf" target="_blank" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso.pdf" target="_blank" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="/cookies.pdf" target="_blank" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
