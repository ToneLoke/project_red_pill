import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import ROUTES from './views/common/routes';
const history = createBrowserHistory();
console.log("ROUTES:", ROUTES)

const RouteConfig = () => (
  <Fragment>
    <Router history={history}>
      <Switch>
        {ROUTES.map((route, i) => (<Route key={route.key} path={route.path} render={(props) => (
          <Fragment>
            <Route key="/home" path="/" exact component={route.home} />
            <route.component {...props} routes={route.routes} />
          </Fragment>
        )} />
        ))}
      </Switch>
    </Router>
  </Fragment>
);

export default RouteConfig;
