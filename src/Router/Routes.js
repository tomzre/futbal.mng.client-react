import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, BrowserRouter as Router } from 'react-router';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import { history }  from '../store';
import PrivateRoute  from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CustomCallback from '../Pages/Callback'

const PageNotFound = () => (
  <div>Page not found</div>
);

const Routes = () => (
  <ConnectedRouter history={history} >
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/dashboard" >
      <Dashboard/>
      </PrivateRoute> 
    <PublicRoute path="/signin" >
      <Login />
    </PublicRoute>
    <PublicRoute path="/signup" >
      <Register />
    </PublicRoute>
    {/* <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} /> */}
    <Route path="/callback" component={CustomCallback} />
    {/* <Route path="/dashboard" component={withOidcSecure(Dashboard)} /> */}
    {/* <Route path="/admin" component={Admin} />
    <Route path="/home" component={Home} /> */}
    <Route component={PageNotFound} />
  </ConnectedRouter>
);

export default Routes;