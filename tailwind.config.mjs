/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#48bb78',
          700: '#2f855a',
          900: '#22543d',
        },
        blue: {
          300: '#90cdf4',
          500: '#4299e1',
          700: '#2b6cb0',
        },
      },
    },
  },
  plugins: [],
}
