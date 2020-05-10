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
import Logout from '../Pages/Logout';
import Header from '../Layout/Header';
import { SilentCallback } from '../Pages/Callback/SilentCallback';

const PageNotFound = () => (
  <div>Page not found</div>
);

const PreLogoutPage = () => (
  <div>logging out!</div>
);

const Routes = () => (
  <ConnectedRouter history={history} >
    <Route exact path="/" render={() => <Header><Home /></Header>} />
    <PrivateRoute path="/dashboard" >
        <Header>
          <Dashboard/>
        </Header>
      </PrivateRoute> 
    <PublicRoute path="/signin" >
      <Header>
        <Login />
      </Header>
    </PublicRoute>
    <PublicRoute path="/signup" >
    <Header>
      <Register />
    </Header>
    </PublicRoute>
    <Route path="/callback" component={CustomCallback} />
    <Route path="/silent" component={SilentCallback} />
    <Route path="/logout" component={Logout} />
    <Route path="/prelogout" component={PreLogoutPage} />
    
    {/* <Route path="/dashboard" component={withOidcSecure(Dashboard)} /> */}
    {/* <Route path="/admin" component={Admin} />
    <Route path="/home" component={Home} /> */}
    <Route component={PageNotFound} />
  </ConnectedRouter>
);

export default Routes;