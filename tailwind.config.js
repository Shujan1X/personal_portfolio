/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#070B14',
        panel: '#0F1729',
        accent: {
          primary: '#22E1FF',
          secondary: '#4C6FFF',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#8A97AC',
        },
        grid: '#1B2740',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 225, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
