/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        surface: '#0d0d12',
        surface2: '#141420',
        purple: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        cyan: '#22d3ee',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'grad-purple-cyan': 'linear-gradient(135deg, #7c3aed, #22d3ee)',
        'grad-hero': 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
