/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados con código hex
        'mi-azul': '#3b82f6',
        'mi-verde': '#22c55e',
        'mi-rojo': '#ef4444',
        'mi-gris': '#64748b',
        'mi-morado': '#8b5cf6',
      }
    },
  },
  plugins: [],
}
