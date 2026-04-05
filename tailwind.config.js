/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'surface-low': 'rgb(var(--color-surface-low) / <alpha-value>)',
        'surface-card': 'rgb(var(--color-surface-card) / <alpha-value>)',
        'surface-high': 'rgb(var(--color-surface-high) / <alpha-value>)',
        'surface-top': 'rgb(var(--color-surface-top) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        'primary-container': 'rgb(var(--color-primary-container) / <alpha-value>)',
        'secondary-container': 'rgb(var(--color-secondary-container) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-muted': 'rgb(var(--color-on-muted) / <alpha-value>)',
        outline: 'rgb(var(--color-outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'Inter', 'sans-serif'],
        headline: ['Plus Jakarta Sans', 'IBM Plex Sans Arabic', 'sans-serif'],
        label: ['Inter', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 8px 32px rgba(0, 0, 0, 0.12)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.18)',
      },
      backgroundImage: {
        'berry-glow': 'radial-gradient(circle at top right, rgba(var(--color-primary), 0.14), transparent 34%), radial-gradient(circle at bottom left, rgba(var(--color-secondary), 0.1), transparent 28%)',
        'berry-text': 'linear-gradient(135deg, rgb(var(--color-on-surface)) 0%, rgb(var(--color-primary)) 52%, rgb(var(--color-secondary)) 100%)',
        'berry-button': 'linear-gradient(135deg, rgb(var(--color-primary-container)) 0%, rgb(var(--color-secondary-container)) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
