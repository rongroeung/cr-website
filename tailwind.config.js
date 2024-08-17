/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f5a807',
        secondary: '#021b4b',
        'cr-gray':'#f4f5f7',
        'sub-primary': '#f5aa07c5',
        'sub-secondary': '#01153a'
      },
      height: {
        '35rem': '35rem',
        '45rem': '45rem',
        '50rem': '50rem'
      },
      width: {
        '35rem': '35rem',
        '45rem': '45rem',
        '50rem': '50rem'
      }
    }
  },
  plugins: []
}
