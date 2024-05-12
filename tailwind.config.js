/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 10s linear",
        "circle-animation": "circle-animation 2s infinite",
        "up-down": "up-down 1s infinite"
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        "circle-animation": {
          "0%": { padding: '6px', background: "#7d6f60", outlineOffset: '2px' },
          "40%": { padding: '4px', background: "#ebc8a0", outlineOffset: '4px' },
          "100%": { padding: '6px', background: "#7d6f60", outlineOffset: '2px' }
          // "0%": { width: '8px', height: '8px', background: "#7d6f60" },
          // "40%": { width: '12px', height: '12px', background: "#ebc8a0" },
          // "100%":{ width: '8px', height: '8px', background: "#7d6f60" }
          // "0%": { transform: "scale(.7)", background: "#7d6f60" },
          // "40%": { transform: "scale(1)", background: "#ebc8a0" },
          // "100%": { transform: "scale(.7)", background: "#7d6f60" }
        },
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" }
        },
      }
    },
  },
  plugins: [],
}