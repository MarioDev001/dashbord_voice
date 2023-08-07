/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '128': '1000px',
        '129': '104px',
        '130': '500px',
      },
      height: {
        '128': '600px',
        '129': '104px',
        '130': '500px',
      },
      colors: {
        'color-n1': '#16171B',
        'color-n2': '#1F2326',
        'color-n3': '#65BA6D',
        'color-n4': '#33993C',
        'color-n5': '#3F5AE4',
        'color-n6': '#418FEA',
        'color-n7': '#E3E4E5',
        'color-n8': '#FFFFFF',
        'color-n9': '#F8E949',
        'color-n10': '#E65E5E',
      }
    },
  },
  plugins: [],
}
