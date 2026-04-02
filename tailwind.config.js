/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/app.jsx'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'FF Providence Sans'", "'FFProvidenceSans'", "'Nunito'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
