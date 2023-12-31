// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors: {
      disabled: '#e7e8ec',
      primary: '#189CFC',
      secondary: '#FFFFFF',
      info: '#5DC4E3',
      success: '#2EB62C',
      warning: '#FFB818',
      danger: '#FF4B4B',
      transparent: '#FFFFFFFF',
      muted: '#D3D3D3',
      'disabled-outline': '#DBDBDB',
      'primary-outline': '#D4E8F9',
      'secondary-outline': '#FFFFFF',
      'info-outline': '#DEF7FF',
      'success-outline': '#CFEFDA',
      'warning-outline': '#FFF4C8',
      'danger-outline': '#FCF2F6',
      'transparent-outline': '#FFFFFFFF',
      'muted-outline': '#EAEAEA',
      'info-background': '#ECF6FC',
    },
    fontSize: {
      xs: '10px',
      sm: '14px',
      md: '16px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',
      '20xl': '200px',
    }
  }
}

module.exports = {
  theme,
}
