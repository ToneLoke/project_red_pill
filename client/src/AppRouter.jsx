import React, { Component, Fragment } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    // console.log("CONTACTING SERVER")
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return <RouteConfig />
  }
}
export default App;
