import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withOidcSecure } from '@axa-fr/react-oidc-context';
import App from '../App';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register'

const PageNotFound = () => (
  <div>Page not found</div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/dashboard" component={withOidcSecure(Dashboard)} />
    {/* <Route path="/admin" component={Admin} />
    <Route path="/home" component={Home} /> */}
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;