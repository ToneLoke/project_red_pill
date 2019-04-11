import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
    background: {
      default: 'rgba(93, 60, 173, 1)'
    }
  }
});

export default theme;
