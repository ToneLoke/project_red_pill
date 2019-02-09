import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login, Admin} from "./views";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
