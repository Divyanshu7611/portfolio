import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleGradient: '#161499',
        darkGradient: '#FFFFFF',
      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'expand-contract': 'expand-contract 5s ease-in-out infinite',
        'expand-contract-slow': 'expand-contract 8s ease-in-out infinite',
      },
      keyframes: {
        'expand-contract': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
