module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],

  center: true,
  prefix: "tw-",
  theme: {
    important: true,

    // screens: {
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1280px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1536px",
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  // plugins: [   require('tailwindcss'),
  // require('autoprefixer'),]
};

// module.exports = {
//   important: true,
//   theme: {
//     fontFamily: {
//       display: ['Gilroy', 'sans-serif'],
//       body: ['Graphik', 'sans-serif'],
//     },
//     extend: {
//       colors: {
//         cyan: '#9cdbff',
//       },
//       margin: {
//         '96': '24rem',
//         '128': '32rem',
//       },
//     }
//   },
//   variants: {
//     opacity: ['responsive', 'hover']
//   }
// }
