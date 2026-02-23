import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import UltraButton from '../ui/UltraButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();
        const id = target.getAttribute('href')!.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false); // Fecha o menu no mobile
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        duration: 0.5 
      }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05, 
      color: 'var(--color-gray-300)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Estilo global para scroll suave */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white-600 bg-opacity-98 backdrop-blur-md shadow-xl py-4' 
      : 'bg-transparent py-6'
  }`}
  variants={navbarVariants} // Adicione esta linha
  initial="hidden"
  animate="visible"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logoprata.png" alt="Real Digital Society" className="h-12 md:h-20" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
            <UltraButton 
              variant="primary"
              size="sm"
              onClick={() => window.open('https://wa.me/5531994704527', '_blank')}
            >
              Fale Conosco
            </UltraButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav 
          className="md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-xl z-50 pt-20 px-6"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex flex-col space-y-6">
            {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-gray-100 transition-colors"
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.a>
            ))}
            <UltraButton 
              variant="primary"
              size="sm"
              className="mt-4  animate-border-flow"
              onClick={() => window.open("https://wa.me/5531994704527", "_blank")}
            >
              Fale Conosco
            </UltraButton>
          </div>
        </motion.nav>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </motion.header>
    </>
  );
};

export default Navbar;
