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
        // Opinioブランドカラー
        primary: {
          50: '#f5f5fa',
          100: '#eaeaf5',
          200: '#d5d4eb',
          300: '#b5b3d9',
          400: '#8f8bc3',
          500: '#6e68ad',
          600: '#5a5293',
          700: '#4a4378',
          800: '#2d2a5b', // メインカラー
          900: '#262350',
          950: '#1a1838',
        },
        accent: {
          50: '#fef8f3',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6bd96',
          400: '#f19a69',
          500: '#e67635', // アクセントカラー
          600: '#d85f26',
          700: '#b44821',
          800: '#903b21',
          900: '#74331e',
          950: '#3f180d',
        },
      },
      fontFamily: {
        sans: [
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans JP',
          'Yu Gothic',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
