import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import CustomCallback from '../Pages/Callback'

const PageNotFound = () => (
  <div>Page not found</div>
);

//const history = syncHistoryWithStore(BrowserRouter, store);

const Routes = () => (
  <Router >
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/callback" component={CustomCallback} />
    {/* <Route path="/dashboard" component={withOidcSecure(Dashboard)} /> */}
    {/* <Route path="/admin" component={Admin} />
    <Route path="/home" component={Home} /> */}
    <Route component={PageNotFound} />
  </Router>
);

export default Routes;