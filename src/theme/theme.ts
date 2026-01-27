import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4dabf5', // azul suave
    },
    secondary: {
      main: '#90caf9', // azul claro complementario
    },
    background: {
      default: '#0d1117', // fondo oscuro tipo GitHub
      paper: '#161b22',
    },
    text: {
      primary: '#e6edf3', // blanco suave
      secondary: '#9bbcff', // azul grisáceo
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h4: {
      fontWeight: 600,
      color: '#4dabf5',
    },
    h6: {
      fontWeight: 500,
      color: '#9bbcff',
    },
    body1: {
      color: '#e6edf3',
    },
    body2: {
      color: '#c9d1d9',
    },
  },
  shape: {
    borderRadius: 10,
  },
})