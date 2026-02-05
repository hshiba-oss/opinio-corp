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
          50: '#f4f4ed',  // オフホワイト
          100: '#e8e8e0',
          200: '#d1d1c2',
          300: '#b5b5a3',
          400: '#8a8a7a',
          500: '#5f5f52',
          600: '#4a4a40',
          700: '#3d3d35',
          800: '#332c54', // ダークパープル（メイン）
          900: '#2a2445',
          950: '#1a1830',
        },
        accent: {
          50: '#f0faf4',
          100: '#daf5e5',
          200: '#b8e9cd',
          300: '#88d8ac',
          400: '#65b891', // メイングリーン
          500: '#4e9f7a',
          600: '#3d8063',
          700: '#336651',
          800: '#2c5243',
          900: '#264438',
          950: '#12261f',
        },
        teal: {
          50: '#f0f9f9',
          100: '#d9f0f1',
          200: '#b7e1e4',
          300: '#85ccd1',
          400: '#4e878c', // ティール
          500: '#3d7278',
          600: '#355e63',
          700: '#304e52',
          800: '#2d4245',
          900: '#29383b',
          950: '#162225',
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
