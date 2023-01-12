// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
      },
      minHeight: {
      },
      backgroundImage: {
      },
      colors: {
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: {

      }
    },
  },
  plugins: [
  ]
};
