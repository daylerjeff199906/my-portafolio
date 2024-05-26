import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        love: {
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        love: 'love 0.5s linear infinite alternate-reverse',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
