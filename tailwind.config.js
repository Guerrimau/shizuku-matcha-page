/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'Courier New', 'monospace'],
        script: ['var(--font-noto-serif-jp)', 'Hiragino Mincho ProN', 'Yu Mincho', 'MS PMincho', 'serif'],
      },
      colors: {
        'washi-bg': '#F9F8F4',
        'washi-text': '#1A1C1A',
        charcoal: {
          DEFAULT: '#1A1C1A',
          light: '#3A3C3A',
          dark: '#0A0C0A',
        },
        'forest-green': {
          DEFAULT: '#3E4A3C',
          light: '#5A6658',
          dark: '#2A332A',
          pale: '#E8EBE7',
        },
        matcha: {
          DEFAULT: '#3E4A3C',
          light: '#5A6658',
          dark: '#2A332A',
          pale: '#E8EBE7',
        },
        gold: {
          DEFAULT: '#d1ad60',
          light: '#dbb970',
          dark: '#c7a050',
          pale: '#f5f0e6',
        },
        cream: {
          DEFAULT: '#F9F8F4',
          light: '#FDFCFA',
          dark: '#F0EDE8',
        },
        wood: {
          light: '#D4C4A8',
          DEFAULT: '#B8A082',
          dark: '#9C8A6B',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 62, 45, 0.08)',
        'medium': '0 8px 30px rgba(44, 62, 45, 0.12)',
        'strong': '0 12px 40px rgba(44, 62, 45, 0.16)',
      }
    },
  },
  plugins: [],
}