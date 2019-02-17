import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useStore } from './store';
import Layout from './views/layout';

const RouteConfig = () => {
  const { state: { loggedIn } } = useStore()
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/games" />
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
