/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#f5a807',
        'secondary':  '#021b4b',
        'sub-primary':  '#f5aa07c5',
        'sub-secondary':  '#01153a',
        'primary':  '#f5a807',
        'secondary':  '#021b4b',
      },
    },
  },
  plugins: [],
}

