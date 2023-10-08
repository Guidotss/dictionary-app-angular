/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'jet_black':     '#050505',
        'coral_red':     '#FF5252',
        'dark_grey':     '#1F1F1F',
        'gunmetal':      '#2D2D2D',
        'charcoal_gray': '#3A3A3A',
        'medium_grey':   '#757575',
        'light_grey':    '#E9E9E9',
        'white_smoke':   '#F4F4F4',
        'purple':        '#A445ED',

      },
      fontFamily: {
        'sans': ['Aliquam', 'sans-serif'],
        'serif': ['Aliquam', 'serif'],
        'mono': ['Aliquam', 'monospace'],
      }
    },
  },
  plugins: [],
}

