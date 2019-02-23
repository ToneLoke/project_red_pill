import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b085f5',
      main: '#7e57c2',
      dark: '#4d2c91',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#7e57c2',
    },
  }
});

export default theme;
