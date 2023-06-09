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
                  "primary": "#100e10",
                  "secondary": "rgba(240,0,184,0.84)",
                  // "secondary": "#268db9",
                  "active": "#181818",
                  "accent": "#1dcdbc",
                  "neutral": "#000000",
                  "base-100": "rgba(243,243,243,0.58)",
                  "info": "#3abff8",
                  "success": "#36d399",
                  "warning": "#fbbd23",
                  "error": "#f87272",
              },
          },
      ],
  }
}

