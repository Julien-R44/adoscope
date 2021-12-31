module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./resources/js/**/*.vue', './resources/views/**/*.edge'],
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: ({ colors }) => ({
      primary: {
        50: '#ffffff',
        100: '#efecff',
        200: '#dedaff',
        300: '#9c8fff',
        400: '#7b6aff',
        DEFAULT: '#5A45FF',
        600: '#4837cc',
        700: '#362999',
        800: '#241c66',
        900: '#090719',
      },
      secondary: {
        50: '#E5F9FF',
        100: '#B7E1ED',
        200: '#95CDDE',
        300: '#71A2B0',
        DEFAULT: '#2a2647',
        600: '#120e33',
        700: '#0e0b29',
        800: '#0b081f',
        900: '#05040f',
      },
      white: '#fff',
      gray: {
        800: '#2C2B2A',
        500: '#72716D',
        300: '#DBD9D2',
        200: '#C1BFB9',
        100: '#e5e7eb',
        50: '#F8F7F6',
      },
      teal: {
        800: '#075E5A',
        700: '#09847E',
      },
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
    }),
    boxShadow: {
      DEFAULT: '0px 2px 4px rgba(44, 43, 42, 0.1)',
      spread: '0px 12px 32px rgba(44, 43, 42, 0.16)',
    },
    minWidth: {
      240: '240px',
    },
    extend: {
      minHeight: {
        shell: 'calc(100vh - 97px - 64px)',
      },
      fontSize: {
        'xl': ['1.375rem', '2.125rem'],
        '6xl': ['3.625rem', '4rem'],
      },
    },
  },
  plugins: [],
}
