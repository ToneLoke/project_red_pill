import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from './views/common/routes';

const RouteConfig = ({children}) => (
  <Fragment>
    <Router>
      <Switch>
        {ROUTES.map((route, i) => (<Route key={route.key} path={route.path} render={(props) => (
          <div style={{}}>
            <Route key="/home" path="/" exact component={route.home} />
            <route.component {...props} routes={route.routes} />
            {children}
          </div>
        )} />
        ))}
      </Switch>
    </Router>
  </Fragment>
);

export default RouteConfig;
