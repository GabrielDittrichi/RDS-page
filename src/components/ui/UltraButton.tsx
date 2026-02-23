import React from 'react';
import { motion } from 'framer-motion';

interface UltraButtonProps {
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

const UltraButton: React.FC<UltraButtonProps> = ({
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
  // Configurações de estilo base
  let baseClass = '';
  let textColor = '';
  let borderClass = '';
  let hoverClass = '';
  let animationClass = '';

  switch(variant) {
    case 'primary':
      baseClass = 'gradient-silver4';
      textColor = 'text-gray-100';
      hoverClass = 'hover:bg-red ';
      animationClass = 'animate-border-flow';
      break;
    case 'secondary':
      baseClass = 'bg-gray-700';
      textColor = 'text-gray-100';
      hoverClass = 'hover:bg-gray-600';
      animationClass = 'animate-border-flow';
      break;
    case 'outline':
      baseClass = 'bg-transparent border-2';
      textColor = 'text-gray-300';
      borderClass = 'border-gray-500';
      hoverClass = 'hover:border-gray-400 hover:text-gray-100';
      break;
    case 'accent':
      baseClass = 'bg-gradient-to-r from-gray-700 to-gray-800';
      textColor = 'text-gray-100';
      animationClass = 'animate-border-flow';
      hoverClass = 'hover:from-gray-600 hover:to-gray-700';
      break;
    default:
      baseClass = 'bg-gray-800';
      textColor = 'text-gray-100';
      animationClass = 'animate-border-flow';
      hoverClass = 'hover:bg-gray-700';
  }

  // Tamanhos
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
        relative overflow-hidden 
        rounded-lg 
        font-semibold 
        transition-all 
        duration-300 
        ${baseClass} 
        ${textColor} 
        ${borderClass} 
        ${hoverClass} 
        ${sizeClass} 
        ${className}
      `}
      whileHover={{ 
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Efeito de borda animada */}
      <div className={`
        absolute inset-0 
        bg-gradient-to-r
        from-transparent
        via-gray-400
        to-transparent
        bg-[length:200%_100%]
        opacity-30
        ${animationClass}
        -m-[2px]
      `}></div>

      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
      </span>

      {/* Efeito de brilho suave */}
      <div className="
        absolute inset-0 
        bg-gradient-to-b 
        from-white-200/10 
        to-transparent 
        pointer-events-none
      "></div>
    </motion.button>
  );
};

export default UltraButton;