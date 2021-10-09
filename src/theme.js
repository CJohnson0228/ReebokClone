import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Yantramanav',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;