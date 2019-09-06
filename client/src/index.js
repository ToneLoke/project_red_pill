import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { create } from 'jss';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/styles';
import { Provider } from "./store";
import rtl from 'jss-rtl';
import App from './AppRouter';
import 'typeface-roboto';
import './index.css';
import theme from './views/common/theme';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const Main = React.memo(() => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst jss={jss}>
          <Provider>
            <App />
          </Provider>
        </StylesProvider>
      </ThemeProvider>
    </Fragment>
  );
}
)

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
