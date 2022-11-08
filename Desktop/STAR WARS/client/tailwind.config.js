/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "stars": "url('./src/assets/background.jpg')",
      },
      // cursor: {
      //   'default': 'url("./src/assets/lightsabergreen.cur"), default',
      //   'pointer': 'url("./src/assets/lightsaberblue.cur"), pointer',
      // }
    },
  },
  plugins: [],
}
