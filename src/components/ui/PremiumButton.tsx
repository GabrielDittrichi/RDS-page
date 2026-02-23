import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  icon,
  iconPosition = 'right'
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  
  // Definir classes base com base na variante
  let baseClass = '';
  let textColor = '';
  
  switch(variant) {
    case 'primary':
      baseClass = 'bg-gray-900 border-2 border-gray-800 hover:bg-gray-800';
      textColor = 'text-gray-100';
      break;
    case 'secondary':
      baseClass = 'bg-white border-2 border-gray-300 hover:bg-gray-100';
      textColor = 'text-gray-900';
      break;
    case 'outline':
      baseClass = 'bg-transparent border-2 border-gray-300 hover:bg-gray-900 hover:bg-opacity-10';
      textColor = 'text-gray-100';
      break;
    default:
      baseClass = 'bg-gray-900 border-2 border-gray-800 hover:bg-gray-800';
      textColor = 'text-gray-100';
  }
  
  // Configurações da animação premium
  useEffect(() => {
    if (!canvasRef.current || !buttonRef.current) return;
    
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Ajustar o tamanho do canvas para corresponder ao botão
    const updateCanvasSize = () => {
      const rect = button.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Configurações da animação de água premium
    let particles: {x: number, y: number, radius: number, speed: number, direction: number, opacity: number, life: number, maxLife: number}[] = [];
    const particleCount = 30;
    const maxRadius = Math.min(canvas.width, canvas.height) / 10;
    
    // Criar partículas iniciais
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * maxRadius + 2,
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.3 + 0.2,
          life: 0,
          maxLife: Math.random() * 100 + 50
        });
      }
    };
    
    createParticles();
    
    // Função de animação
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar partículas com maior opacidade para melhor visibilidade
      particles.forEach((particle) => {
        // Atualizar vida da partícula
        particle.life += 1;
        if (particle.life >= particle.maxLife) {
          // Reiniciar partícula
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.radius = Math.random() * maxRadius + 2;
          particle.opacity = Math.random() * 0.3 + 0.2;
        }
        
        // Calcular opacidade baseada no ciclo de vida
        const lifeRatio = particle.life / particle.maxLife;
        const fadeInOut = lifeRatio < 0.2 
          ? lifeRatio * 5 // fade in
          : lifeRatio > 0.8 
            ? (1 - lifeRatio) * 5 // fade out
            : 1; // full opacity
        
        // Mover partícula
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Verificar colisão com bordas
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = -particle.direction;
        }
        
        // Desenhar partícula
        ctx.beginPath();
        
        // Criar gradiente radial para efeito de brilho
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        );
        
        // Cor baseada na variante
        if (variant === 'primary') {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * fadeInOut * 0.7})`);
          gradient.addColorStop(0.6, `rgba(200, 200, 255, ${particle.opacity * fadeInOut * 0.3})`);
          gradient.addColorStop(1, `rgba(150, 150, 255, 0)`);
        } else if (variant === 'secondary') {
          gradient.addColorStop(0, `rgba(100, 100, 100, ${particle.opacity * fadeInOut * 0.5})`);
          gradient.addColorStop(0.6, `rgba(80, 80, 80, ${particle.opacity * fadeInOut * 0.2})`);
          gradient.addColorStop(1, `rgba(50, 50, 50, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(200, 200, 200, ${particle.opacity * fadeInOut * 0.6})`);
          gradient.addColorStop(0.6, `rgba(150, 150, 150, ${particle.opacity * fadeInOut * 0.3})`);
          gradient.addColorStop(1, `rgba(100, 100, 100, 0)`);
        }
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [variant]);
  
  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden py-3 px-6 rounded-md font-medium text-lg transition-all duration-300 shadow-xl ${baseClass} ${textColor} ${className}`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'overlay' }}
      />
      <span className="relative z-10 font-bold flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
      </span>
      
      {/* Efeito de borda brilhante */}
      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></span>
      </span>
    </motion.button>
  );
};

export default PremiumButton;
