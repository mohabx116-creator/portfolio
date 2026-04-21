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
        ambient: '0 18px 44px rgba(0, 0, 0, 0.32)',
        panel: '0 36px 92px rgba(0, 0, 0, 0.46)',
      },
      backgroundImage: {
        'berry-glow': 'radial-gradient(circle at top left, rgba(var(--color-primary-container), 0.2), transparent 30%), radial-gradient(circle at 85% 20%, rgba(var(--color-secondary-container), 0.12), transparent 22%), radial-gradient(circle at 50% 100%, rgba(var(--color-tertiary), 0.08), transparent 22%)',
        'berry-text': 'linear-gradient(135deg, rgb(var(--color-on-surface)) 0%, rgb(var(--color-on-surface)) 38%, rgb(var(--color-primary)) 72%, rgb(var(--color-secondary)) 100%)',
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
