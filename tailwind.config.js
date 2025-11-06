/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        elev: "#14141a",
        text: "#f5f7ff",
        muted: "#9ca3af",
        brand: "#BB99FF",
        brand2: "#7a5cff",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "28px",
      }
    },
  },
  plugins: [],
}
