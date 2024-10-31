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
        'sub-primary': '#f5aa07c5',
        'sub-secondary': '#01153a',
        '--color-cr-gray-darker': '#1f2937',
        '--color-cr-gray-dark': '#6b7280',
        '--color-cr-gray-light': '#9ca3af',
        '--color-cr-gray-lighter': '#f3f4f6'
      },
      height: {
        '13.43rem': '13.43rem',
        '14.7rem': '14.7rem',
        '21rem': '21rem',
        '25.25rem': '25.25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '75rem': '75rem'
      },
      maxHeight: {
        '50rem': '50rem',
        '75rem': '75rem',
        '90rem': '90rem',
        'screen-75': '75vh'
      },
      minHeight: {
        '90rem': '90rem'
      },
      width: {
        49: '49%',
        '35rem': '35rem',
        '45rem': '45rem',
        '50rem': '50rem'
      }
    }
  },
  plugins: []
}
