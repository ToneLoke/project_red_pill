import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from "./store";
import theme from './views/common/theme';
import App from './AppRouter';
import 'typeface-roboto';
import './index.css';

function Main() {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <Provider>
          <App/>
        </Provider>
      </MuiThemeProvider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
