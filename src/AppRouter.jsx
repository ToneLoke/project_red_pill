import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from './views/layout';

const RouteConfig = () => {
  const loggedIn = sessionStorage.getItem('token');
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/games?type=draft" />
            ) : (
              <Redirect to='/authenticate?type=register' />
            )
          )}/>
          <Layout />
        </Switch>
      </Router>
    </Fragment>
  )
};

export default RouteConfig;
