import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#3B55AB',
      main: '#3B55AB',
      dark: '#3B55AB',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#3B55AB',
    },
    background: {
      default: '#3B55AB'
    }
  }
});

export default theme;
