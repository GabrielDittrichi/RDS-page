import React from 'react';
import { motion } from 'framer-motion';

interface ElegantButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const ElegantButton: React.FC<ElegantButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  icon,
  iconPosition = 'right',
  size = 'md'
}) => {
  // Definir classes base com base na variante - Usando a paleta da logo (tons de prata/cinza)
  let baseClass = '';
  let textColor = '';
  let borderColor = '';
  let hoverClass = '';
  let gradientClass = '';
  
  switch(variant) {
    case 'primary':
      baseClass = 'gradient-silver2 text-gray-800';
      textColor = 'text-white';
      borderColor = 'border border-gray-600';
      hoverClass = 'hover:from-gray-600 hover:to-gray-700';
      gradientClass = 'after:bg-gradient-to-r after:from-gray-500 after:to-gray-600';
      break;
    case 'secondary':
      baseClass = 'bg-gradient-to-r from-gray-200 to-gray-300';
      textColor = 'text-gray-800';
      borderColor = 'border border-gray-300';
      hoverClass = 'hover:from-gray-300 hover:to-gray-400';
      gradientClass = 'after:bg-gradient-to-r after:from-gray-400 after:to-gray-500';
      break;
    case 'outline':
      baseClass = 'bg-transparent';
      textColor = 'text-white';
      borderColor = 'border border-gray-400';
      hoverClass = 'hover:bg-gray-800 hover:bg-opacity-30';
      gradientClass = 'after:bg-gradient-to-r after:from-gray-400 after:to-gray-500';
      break;
    case 'accent':
      baseClass = 'gradient-silver3 text-gray-800';
      textColor = 'text-white';
      borderColor = 'border border-gray-500';
      hoverClass = 'hover:from-gray-400 hover:to-gray-500';
      gradientClass = 'after:bg-gradient-to-r after:from-gray-300 after:to-gray-400';
      break;
    default:
      baseClass = 'bg-gradient-to-r from-gray-700 to-gray-800';
      textColor = 'text-white';
      borderColor = 'border border-gray-600';
      hoverClass = 'hover:from-gray-600 hover:to-gray-700';
      gradientClass = 'after:bg-gradient-to-r after:from-gray-500 after:to-gray-600';
  }
  
  // Definir classes de tamanho
  let sizeClass = '';
  switch(size) {
    case 'sm':
      sizeClass = 'py-2 px-4 text-sm';
      break;
    case 'lg':
      sizeClass = 'py-4 px-8 text-xl';
      break;
    default:
      sizeClass = 'py-3 px-6 text-base';
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-md font-medium transition-all duration-300
        ${baseClass} ${textColor} ${borderColor} ${hoverClass} ${sizeClass} ${className}
        shadow-md after:absolute after:inset-0 after:opacity-0 after:transition-opacity
        after:duration-500 hover:after:opacity-20 ${gradientClass}
        before:absolute before:inset-0 before:z-0 before:bg-gradient-to-t 
        before:from-transparent before:to-white/10 before:opacity-0
        hover:before:opacity-100 before:transition-opacity before:duration-300
      `}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {/* Efeito de brilho sutil na borda */}
      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-1000 ease-in-out"></span>
      </span>
      
      {/* Conteúdo do botão */}
      <span className="relative z-10 font-medium flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default ElegantButton;
