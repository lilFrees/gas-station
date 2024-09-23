/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["SF Pro Display", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#E0F1F6",
        primary: "#3ABAAA",
        danger: "#FF4E4E",
      },
      fontSize: {
        "parent-10": "10%",
        "parent-20": "20%",
        "parent-30": "30%",
        "parent-40": "40%",
        "parent-50": "50%",
        "parent-60": "60%",
        "parent-70": "70%",
        "parent-80": "80%",
        "parent-90": "90%",
        "parent-100": "100%",
      },
    },
  },
  plugins: [],
};
