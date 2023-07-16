export default {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#F0C2C2",

          secondary: "#39A7A5",

          accent: "#4ade80",

          neutral: "#232d39",

          "base-100": "#FEFBFB",

          info: "#8dbfe7",

          success: "#4ade80",

          warning: "#f9820b",

          error: "#e84a6a",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "night",
  },
};
