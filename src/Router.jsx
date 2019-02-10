import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ROUTES from './views/common/routes';
console.log("ROUTES:", ROUTES)

const RouteConfig = () => (
  <Fragment>
    <Router>
    <div>
      {ROUTES.map((route, i) => <Route key={route.key} path={route.path} render={props => <route.component {...props} routes={route.routes}/>} />)}
    </div>
    </Router>
  </Fragment>
);

export default RouteConfig;
