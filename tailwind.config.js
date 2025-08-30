/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#d1ddff',
          300: '#b3c5ff',
          400: '#8aa2ff',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4c5bc4',
          800: '#3d4695',
          900: '#2d3574',
        },
        secondary: {
          50: '#f3f0ff',
          100: '#e9e3ff',
          200: '#d6cbff',
          300: '#bca5ff',
          400: '#a078ff',
          500: '#764ba2',
          600: '#6b4190',
          700: '#5d377e',
          800: '#4f2d6c',
          900: '#42255a',
        }
      },
      fontFamily: {
        'atkinson': ['Atkinson', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px rgb(0 0 0 / 0.05)',
        'card-hover': '0 12px 35px rgb(0 0 0 / 0.1)',
        'book': '0 20px 40px rgb(0 0 0 / 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}