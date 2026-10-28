/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./lowongan/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#10243A',
          'navy-dark': '#0B1928',
          'navy-light': '#1A3654',
          blue: '#174A72',
          'blue-light': '#1F6296',
          'blue-soft': '#EBF2F7',
          gray: '#F4F6F8',
          'gray-hover': '#E8ECF0',
          green: '#249B65',
          'green-light': '#E9F7F0',
          'green-hover': '#1E8255',
          dark: '#1F2937',
          muted: '#64748B',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Manrope', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(16, 36, 58, 0.07), 0 4px 6px -2px rgba(16, 36, 58, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 36, 58, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 36, 58, 0.14)',
        'dropdown': '0 10px 30px -5px rgba(16, 36, 58, 0.15)',
        'glow': '0 0 25px -5px rgba(36, 155, 101, 0.3)'
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' }
        }
      }
    },
  },
  plugins: [],
}
