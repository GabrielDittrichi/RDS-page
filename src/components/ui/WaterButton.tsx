import { FC, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface WaterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const WaterButton: FC<WaterButtonProps & HTMLMotionProps<'button'>> = ({ children, variant, ...props }) => {
  return (
    <motion.button
      {...props}
      className={`water-button ${variant || ''}`}
      style={{
        position: 'relative',
        width: '200px',
        height: '60px',
        borderRadius: '30px',
        border: '2px solid rgba(0, 120, 255, 0.6)',
        background: 'transparent',
        cursor: 'pointer',
        overflow: 'hidden',
        padding: 0,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="water"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 120, 255, 0.6)',
          scaleY: 0.5,
        }}
        animate={{
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '50% 50% 50% 50% / 30% 30% 70% 70%',
            '50% 50% 50% 50% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 70% 70% 30% 30%',
          ],
          scaleX: [1, 1.1, 0.9, 1],
          scaleY: [0.5, 0.9, 1.1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scaleY: 1,
          borderRadius: '0 0 20% 20%',
          transition: { duration: 0.3 },
        }}
      />
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default WaterButton;
