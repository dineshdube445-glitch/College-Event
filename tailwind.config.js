/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#16A085',
          50: '#EBF8F5',
          100: '#D2F0E9',
          200: '#A4E1D3',
          300: '#76D2BC',
          400: '#48C3A6',
          500: '#16A085',
          600: '#12826C',
          700: '#0E6453',
          800: '#0A463A',
          900: '#062821',
        },
        mint: {
          DEFAULT: '#DDF7E8',
          50: '#F6FCF9',
          100: '#EDF9F3',
          200: '#DDF7E8',
          300: '#C0F0D3',
          400: '#9CE6B9',
          500: '#6BD494',
        },
        sky: {
          accent: '#55B8E8',
        },
        lime: {
          highlight: '#C7F36B',
        },
        offwhite: '#F8FAFC',
        navy: {
          DEFAULT: '#172B4D',
          dark: '#0E1726',
        },
        slate: {
          muted: '#64748B',
        },
        coolgrey: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
