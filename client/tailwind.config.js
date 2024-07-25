/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
     'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#694e21",
        soft_primary: "#806331",
        dark_primary: "#614a23",
        bg_primary: "#fafafa",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

