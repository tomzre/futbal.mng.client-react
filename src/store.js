import { createStore, applyMiddleware, compose } from "redux";
import { loadUser } from "redux-oidc";
import reducer from "./Reducer";
import userManager from "./Utils/UserManager";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


export const history = createBrowserHistory()

const initialState = {};

const logger = createLogger({
  collapsed: true
})

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, routerMiddleware(history), logger)
)(createStore);

const store = createStoreWithMiddleware(reducer(history), initialState);
loadUser(store, userManager);

export default store;