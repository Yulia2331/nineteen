/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'orange': '#E67950',
       }
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         'beige': '#EAE0C5',
//         'orange': '#E67950',
//         dark:{
//           400: '#2424244D',
//           800: '#242424',
//         }
//       },
//       fontFamily: {
//         // mon: ['Montserrat'], 
//         cy: ['cy'],
//       },
//       container: {
//         center: true,
//         padding: '20px',
//       }
//     },
//   },
//   plugins: [],

// };
