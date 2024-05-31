const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      serif: ["system-ui", "sans-serif"],
      body: ["system-ui", "sans-serif"],
    },
  },
  plugins: [],
});