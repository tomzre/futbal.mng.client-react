import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, BrowserRouter as Router } from 'react-router';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import store, { history }  from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import CustomCallback from '../Pages/Callback'

const PageNotFound = () => (
  <div>Page not found</div>
);

//const history = syncHistoryWithStore(Router, store);

const Routes = () => (
  <ConnectedRouter history={history} >
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/callback" component={CustomCallback} />
    {/* <Route path="/dashboard" component={withOidcSecure(Dashboard)} /> */}
    {/* <Route path="/admin" component={Admin} />
    <Route path="/home" component={Home} /> */}
    <Route component={PageNotFound} />
  </ConnectedRouter>
);

export default Routes;