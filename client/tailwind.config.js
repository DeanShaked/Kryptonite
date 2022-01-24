module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#1f2e59',
      royal: '#003FF7',
      regular: '#676D85',
      black: '#000000',
      cyan: '#34D9C5',
      grey: '#323232',
      secondary: 'unknown',
      warning: '#f03800',
      greyish: '#dbdbdb',
      light: '#F6F7F8',
      dark: 'unknown',
      placeholder: '#c7c7cd',
      white: '#fff',
      transparent: '#ffffff00',
      categoryBgInactive: '#f8f8f8',
      categoryBgActive: '#34D9C5',
      categoryText: '#9CA2AF',
      numberPad: '#0B2349',
      purple: '#5526c1',
      yellow: '#fed505',
      green: '#00ce05',
      lightGreen: '#5f9A0',
      normalGreen: '#23ce67',
      darkGreen: '#008621',
      darkerGreen: '#08442F',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {},
  },
  plugins: [],
};
