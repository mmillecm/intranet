import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import SharedocPage from './pages/SharedocPage'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <LoginPage/> } />
      <PrivateRoute path="/app" component={() => <HomePage/>} />
      <PrivateRoute path="/sharedoc" component={() => <SharedocPage/>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;