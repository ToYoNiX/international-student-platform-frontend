/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Existing colors preserved
        navy: {
          50: '#E6E8EC',
          100: '#C0C6D1',
          200: '#96A1B3',
          300: '#6B7C96',
          400: '#475B7A',
          500: '#0B1D3A',
          600: '#09172E',
          700: '#071223',
          800: '#040C18',
          900: '#02060D',
        },
        academic: {
          50: '#E8F3EC',
          100: '#C5E2D0',
          200: '#9ECFB1',
          300: '#76BB91',
          400: '#53A975',
          500: '#1B8A4E',
          600: '#156E3E',
          700: '#10532F',
          800: '#0A371F',
          900: '#051C10',
        },
        brand: {
          green: '#00AC5C',
          'green-light': '#00C96B',
          'green-dark': '#009A52',
        },
        dark: {
          bg: '#142644',
          card: '#1A3258',
          'card-hover': '#1F3A66',
          surface: '#0F1E38',
          border: '#243B5C',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F5F7FA',
          200: '#E2E8F0',
          300: '#CBD5E1',
        },
        status: {
          pending: '#F59E0B',
          review: '#3B82F6',
          approved: '#10B981',
          rejected: '#EF4444',
        },
        // New Comfort Dark Palette (warm navy-slate)
        comfortDark: {
          bg: '#0F172A',      // Primary background
          card: '#1E293B',    // Cards/sections
          navbar: '#334155',  // Navbar/footer
          border: '#475569',  // Dividers/highlights
          text: '#F8FAFC',    // Primary text
          'text-secondary': '#E2E8F0', // Secondary text
          accent: {
            blue: '#3B82F6',
            violet: '#A78BFA',
            amber: '#F59E0B',
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'nav': '0 4px 20px -2px rgba(11, 29, 58, 0.1)',
        'dark-card': '0 10px 25px rgba(15, 23, 42, 0.4), 0 4px 12px rgba(15, 23, 42, 0.3)',
        'dark-card-hover': '0 20px 40px rgba(15, 23, 42, 0.5), 0 8px 20px rgba(15, 23, 42, 0.4)',
        'dark-nav': '0 4px 20px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.2)',
        'comfort-shadow': '0 4px 12px rgba(15, 23, 42, 0.4)',
        'comfort-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}

