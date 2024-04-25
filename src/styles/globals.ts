import { createGlobalStyle } from 'styled-components'

export const design = {
  colors: {
    white: '#FFFFFF',
    background: '#F4F7FA',

    black: '#20232a',
    red: '#dc3545',

    gray900: '#283149',
    gray800: '#404B69',
    gray300: '#DBEDF3',
    gray100: '#E8E8E8',

    green800: '#45A29E',
    green100: '#D2E2DC',
    green500: '#97CE4C',

    orange: '#EF8354',
    yellow: '#F9C80E',
    blue500: '#4682B4',
  },

  fontSizes: {
    sm: '0.875rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2.5rem',
  },
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${design.colors.green100};
  }

  body {
    color: ${design.colors.gray100};
    background: ${design.colors.background};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
