import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { Provider } from "./store";
import rtl from 'jss-rtl';
import App from './AppRouter';
import 'typeface-roboto';
import './index.css';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function Main() {
  return (
    <Fragment>
      <StylesProvider injectFirst jss={jss}>
        <Provider>
          <App />
        </Provider>
      </StylesProvider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
