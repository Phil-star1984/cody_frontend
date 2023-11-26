/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

// export default {
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#dd0cdd",
      lila: "#7907b3",
      darkPink: "#c216c2",
    },
    extend: {},
  },
  plugins: [],
});
