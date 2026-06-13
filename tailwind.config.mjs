/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette: aged paper, forest green, creek blue, warm copper, dark ink
        parchment:  '#F7F3EC',
        'parchment-dark': '#EDE6D8',
        forest:     '#2D4A2D',
        'forest-light': '#3D6B3D',
        creek:      '#4A7C8E',
        'creek-light': '#6FA3B5',
        copper:     '#A0522D',
        'copper-light': '#C47848',
        ink:        '#1A1612',
        'ink-soft':  '#3D3530',
        stone:      '#8C8078',
        'stone-light': '#BFB8AF',
      },
      fontFamily: {
        // Display: Playfair Display — period-appropriate serif for headings
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        // Body: Source Serif 4 — readable, historical feel
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        // Utility: Inter — clean, modern for UI labels and nav
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'body': ['1.125rem', { lineHeight: '1.75' }],
      },
    },
  },
  plugins: [],
};
