/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 100%, 100%)',
      'green-500' : 'hsl(163, 72%, 41%)',
      'red': {
        500: 'hsl(356, 69%, 56%)',
        700: 'hsl(348, 97%, 39%)',
      },
      'blue': {
        50: 'hsl(225, 100%, 98%)',
        500: 'hsl(203, 89%, 53%)',
        600: 'hsl(208, 92%, 53%)',
      },
      'gray': {
        400 : 'hsl(230, 22%, 74%)',
        650: 'hsl(228, 12%, 44%)',
        900: 'hsl(232, 19%, 15%)',
        950: 'hsl(230, 17%, 14%)',
      },
      'navy': {
        50: 'hsl(227, 47%, 96%)',
        100: 'hsl(227, 47%, 94%)',
        900: 'hsl(230, 27%, 30%)',
        950: 'hsl(228, 28%, 20%)',
      },
      'instagram': {
        'yellow': 'hsl(37, 97%, 70%)',
        'orange': 'hsl(5, 77%, 71%)',
        'pink': 'hsl(329, 70%, 58%)',
      },
    },
    extend: {},
  },
  plugins: [],
}

