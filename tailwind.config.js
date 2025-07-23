module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#005BAC', // INOTEXブルー
          light: '#EDF4FC',   // 補助的に使う薄めの青
        },
      },
    },
  },
  plugins: [],
}
