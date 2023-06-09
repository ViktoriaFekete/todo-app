/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui'),],
  daisyui: {
      themes: [
          {
              mytheme: {
                  "primary": "#570df8",
                  "secondary": "#f000b8",
                  "active": "#181818",
                  "accent": "#1dcdbc",
                  "neutral": "#000000",
                  "base-100": "rgba(255,255,255,0.58)",
                  "info": "#3abff8",
                  "success": "#36d399",
                  "warning": "#fbbd23",
                  "error": "#f87272",
              },
          },
      ],
  }
}

