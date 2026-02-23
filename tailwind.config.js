/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extensões existentes
      backgroundOpacity: {
        '95': '0.95',
      },
      backdropBlur: {
        md: '12px',
      },

      // Novas adições para o degradê animado
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      backgroundSize: {
        'gradient-stretch': '200% 100%',
      }
    },
  },
  corePlugins: {
    backgroundOpacity: true,
    borderOpacity: true,
    textOpacity: true,
    divideOpacity: true,
    placeholderOpacity: true,
    ringOpacity: true
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}