import { ThemeOptions } from '@mui/material/styles'

const pallette: ThemeOptions = {
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { default: 'rgba(225, 231, 243, 1)' },
    primary: {
      light: 'rgba(78, 174, 255, 1)',
      main: 'rgba(0, 123, 226, 1)',
      dark: 'rgba(22, 21, 95, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(234, 123, 184, 1)',
      main: 'rgba(239, 100, 176, 1)',
      dark: 'rgba(177, 43, 117, 1)',
      contrastText: '#fff',
    },
    error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
    text: {
      primary: 'rgba(22, 21, 95, 1)',
      secondary: 'rgba(234, 123, 184, 1)',
      disabled: 'rgba(0, 0, 0, 0.5)',
    },
  },
  typography: {
    h1: {
      fontFamily: "'PT Sans Caption', sans-serif",
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: "'PT Sans Caption', sans-serif",
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: "'PT Sans Caption', sans-serif",
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: "'PT Sans Caption', sans-serif",
    },
    h5: {
      fontFamily: "'PT Sans Caption', sans-serif",
    },
    h6: {
      fontFamily: "'PT Sans Caption', sans-serif",
      fontWeight: 'bold',
    },
  },
}

export default pallette
