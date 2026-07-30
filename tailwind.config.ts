import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6366f1',
          'purple-dark': '#4f46e5',
          indigo: '#818cf8',
          dark: '#0f0f1a',
          surface: '#f8f9fc',
          card: '#ffffff',
          border: '#e8eaf0',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 100px rgba(99, 102, 241, 0.2)',
        card: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(99, 102, 241, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.15), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
