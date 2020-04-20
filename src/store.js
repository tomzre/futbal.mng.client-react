import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import {
  syncHistoryWithStore,
  routerReducer
} from "react-router-redux";
import { createUserManager, loadUser } from "redux-oidc";
import reducer from "./Reducer";
import userManager from "./Utils/UserManager";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


export const history = createBrowserHistory()



// create the middleware with the userManager
// const oidcMiddleware = createOidcMiddleware(userManager);

const loggerMiddleware = store => next => action => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
};

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(loggerMiddleware, routerMiddleware(history))
)(createStore);

const store = createStoreWithMiddleware(reducer(history), initialState);
loadUser(store, userManager);

export default store;