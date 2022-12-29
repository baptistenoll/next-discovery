/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2.5rem",
          md: "2.25rem",
          lg: "2.75rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],
        'sm': ['1.125rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.625rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['2.813rem', '3rem'],
        '6xl': ['3.125rem', '3.75rem'],
        '7xl': ['4.5rem', '4.5rem'],
    },
    colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1D1D1B',
        brand: {
            '01': {
                dark: '#0E7B38',
                DEFAULT: '#009E3D',
                light: '#50AF47',
            },
            '02': {
                dark: '#111A45',
                DEFAULT: '#04378B',
                light: '#B3FFB1',
            },
        },
        gray: {
            900: '#111827',
            800: '#1F2937',
            700: '#374151',
            600: '#4B5563',
            500: '#6B7280',
            400: '#9CA3AF',
            300: '#D1D5DB',
            200: '#E5E7EB',
            100: '#F3F4F6',
            50: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
}
