import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
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
  
  switch(variant) {
    case 'primary':
      baseClass = 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700';
      break;
    case 'secondary':
      baseClass = 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-100';
      break;
    case 'outline':
      baseClass = 'bg-transparent text-gray-900 border-2 border-gray-800 hover:bg-gray-100';
      break;
    default:
      baseClass = 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700';
  }
  
  // Configurações da animação de água
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
    
    // Configurações da animação de água
    let particles: {x: number, y: number, radius: number, speed: number, direction: number, opacity: number}[] = [];
    const particleCount = 20;
    const maxRadius = Math.min(canvas.width, canvas.height) / 8;
    
    // Criar partículas iniciais
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * maxRadius + 2,
          speed: Math.random() * 0.7 + 0.3,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.2 + 0.1
        });
      }
    };
    
    createParticles();
    
    // Função de animação
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar partículas com maior opacidade para melhor visibilidade
      particles.forEach(particle => {
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
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Cor baseada na variante
        if (variant === 'primary') {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        } else if (variant === 'secondary') {
          ctx.fillStyle = `rgba(50, 50, 50, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(100, 100, 100, ${particle.opacity})`;
        }
        
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
      className={`relative overflow-hidden py-3 px-6 rounded-md font-medium text-lg transition-all duration-300 shadow-lg ${baseClass} ${className}`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
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
    </motion.button>
  );
};

export default AnimatedButton;
