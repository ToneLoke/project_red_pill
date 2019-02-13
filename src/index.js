import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from "./store";
import theme from './views/common/theme';
import { Notification } from './views/common/components';
import App from './Router';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

function Main() {
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Provider>
          <App>
            <Notification />
          </App>
        </Provider>
      </MuiThemeProvider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
