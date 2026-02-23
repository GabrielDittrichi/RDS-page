import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import ElegantButton from '../ui/ElegantButton';
import UltraButton from '../ui/UltraButton';
import WaterButton from '../ui/WaterButton';


const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false });
  const textControls = useAnimation();
  const logoControls = useAnimation();

  // Estados para animação de texto digitado
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [isTyping1Complete, setIsTyping1Complete] = useState(false);

  const text1 = "Vender o seu negócio";
  const text2 = "é o que move o nosso";

  // Animação de texto digitado
  useEffect(() => {
    if (!isInView) return;

    // Primeira linha
    if (currentIndex1 < text1.length && !isTyping1Complete) {
      const timer = setTimeout(() => {
        setDisplayedText1(text1.slice(0, currentIndex1 + 1));
        setCurrentIndex1(currentIndex1 + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!isTyping1Complete) {
      setIsTyping1Complete(true);
      setShowCursor1(false);
      setShowCursor2(true);
      // Pequena pausa antes de começar a segunda linha
      setTimeout(() => {
        setCurrentIndex2(0);
      }, 300);
    }

    // Segunda linha
    if (isTyping1Complete && currentIndex2 < text2.length) {
      const timer = setTimeout(() => {
        setDisplayedText2(text2.slice(0, currentIndex2 + 1));
        setCurrentIndex2(currentIndex2 + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex1, currentIndex2, isTyping1Complete, isInView]);

  // Cursor piscando
  useEffect(() => {
    const interval = setInterval(() => {
      if (showCursor1) setShowCursor1(prev => !prev);
      if (showCursor2) setShowCursor2(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Cursor permanente no final
  useEffect(() => {
    if (isTyping1Complete && currentIndex2 >= text2.length) {
      // Manter cursor piscando no final da palavra "nosso"
      const permanentCursor = setInterval(() => {
        setShowCursor2(prev => !prev);
      }, 500);
      return () => clearInterval(permanentCursor);
    }
  }, [isTyping1Complete, currentIndex2, text2.length]);

  // Animação de entrada
  useEffect(() => {
    if (isInView) {
      textControls.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 }
      });
      
      logoControls.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0.2 }
      });
    } else {
      textControls.start({ opacity: 0, x: -100 });
      logoControls.start({ opacity: 0, x: 100 });
    }
  }, [isInView, textControls, logoControls]);

  // Animação do background profissional
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configurações das partículas
    const particleCount = 100;
    const gridParticles: {
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      speed: number;
    }[] = [];

    const floatingParticles: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      opacity: number;
    }[] = [];

    // Criar partículas do grid
    const gridSize = 30;
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        gridParticles.push({
          x: x + Math.random() * gridSize,
          y: y + Math.random() * gridSize,
          size: Math.random() * 1.5 + 0.5,
          baseOpacity: Math.random() * 0.2 + 0.1,
          speed: Math.random() * 0.02 + 0.01
        });
      }
    }

    // Criar partículas flutuantes
    for (let i = 0; i < particleCount; i++) {
      floatingParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    // Função de animação
    const animate = () => {
      ctx.fillStyle = '#2b2b2b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar partículas do grid
      gridParticles.forEach(particle => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${
          particle.baseOpacity * (Math.sin(Date.now() * particle.speed) * 0.5 + 0.5)
        })`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Desenhar partículas flutuantes
      floatingParticles.forEach(particle => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Camada de gradiente sutil
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(114, 114, 114, 0.2)');
      gradient.addColorStop(1, 'rgba(179, 179, 179, 0.63)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            animate={textControls}
            initial={{ opacity: 0, x: -100 }}
          >
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">
                {displayedText1}
                {showCursor1 && <span className="animate-pulse"></span>}
              </span>
              <br />
              <span className="text-white">
                {displayedText2}
                {showCursor2 && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>
            
            <motion.p className="text-xl text-white mb-8 max-w-lg">
              Soluções inovadoras de marketing digital para impulsionar seu negócio com estratégias personalizadas.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4">
              <ElegantButton 
                variant="accent"
                onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Nossos Serviços
              </ElegantButton>
              
              <ElegantButton 
                variant="accent"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agende uma Consulta
              </ElegantButton>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            animate={logoControls}
            initial={{ opacity: 0, x: 100 }}
          >
            <img 
              src="/logoprata.png" 
              alt="Digital Logo" 
              className="w-full max-w-md"
            />
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <button onClick={() => document.getElementById('serviços')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white p-3 rounded-full border border-gray-300 hover:border-gray-100 transition-all"
            aria-label="Rolar para baixo"
          > 
            <FaArrowDown className="text-xl " />
          </button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;