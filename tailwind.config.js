module.exports = {
  mode: 'jit', // Enable JIT mode
  purge: {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [], // Add any classes that should not be purged
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}