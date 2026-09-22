/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0F1222',
        brand: {
          orange: '#FF7A45',
          pink: '#EC4899',
          violet: '#8B5CF6',
        },
      },
      backgroundImage: {
        // single source-of-truth brand gradient (orange -> pink -> violet)
        'brand-gradient': 'linear-gradient(90deg, #FF7A45 0%, #EC4899 55%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
}
