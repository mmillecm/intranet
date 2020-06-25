import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import SharedocPage from './pages/SharedocPage'
import WhoWAPage from './pages/WhoWAPage'
import NotFound from './pages/Notfound'
import ValuesPages from "./pages/ValuesPage";

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
      <PrivateRoute path="/whoweare" component={() => <WhoWAPage/>} />
      <PrivateRoute path="/values" component={() => <ValuesPages/>} />
      <Route path="*" component={() => <NotFound/>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;