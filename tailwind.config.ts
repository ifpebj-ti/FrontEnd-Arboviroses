import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary_100: '#79B669',
        primary_200: '#1F8505',
        primary_300: '#155902',
        primary_400: '#114602',
        primary_500: '#0B2F03',
        secondary_100: '#FCFBF9',
        secondary_200: '#151515',
        success_100: '#D2FBD0',
        success_200: '#A6F7A1',
        success_300: '#1AB24F',
        success_400: '#0D804B',
        success_500: '#045540',
        warning_100: '#FDF9CC',
        warning_200: '#F5E466',
        warning_300: '#E0BF06',
        warning_400: '#C3A709',
        warning_500: '#937E0A',
        danger_100: '#FDE4D6',
        danger_200: '#F39884',
        danger_300: '#D83634',
        danger_400: '#9B1A2E',
        danger_500: '#670929',
        info_100: '#D0DEFC',
        info_200: '#7295F0',
        info_300: '#1A44CE',
        info_400: '#0D2694',
        info_500: '#041162',
        gray_100: '#FCFBF9',
        gray_200: '#E5E5E5',
        gray_300: '#CECECC',
        gray_400: '#C8C8C8',
        gray_500: '#AAAAAA',
        gray_600: '#6E736F',
        gray_700: '#3B3D3A',
        gray_800: '#151515'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
