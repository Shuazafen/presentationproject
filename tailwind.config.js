const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "Black" : "#1E2832",
        "PrimaryBG" : "1e28320d",
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
    },
  },
},
  plugins: [
    flowbite.plugin(),
  ],
}

