import { LOAD_SUBSCRIPTIONS_SUCCESS, OPEN_MENU, CLOSE_MENU, REQUEST_LOGIN, RECEIVED_LOGIN_SUCCESS, RECEIVED_LOGIN_ERROR, CLOSE_ERROR } from "../Actions";
import { SESSION_TERMINATED, SILENT_RENEW_ERROR, USER_EXPIRED, USER_SIGNED_OUT, LOAD_USER_ERROR } from "redux-oidc";

const initialState = {
  channels: [],
  open: false,
  anchorEl: null,
  login: {
    body: {
      // username: '',
      // password: '',
      // returnUrl: ''
    },
    error: null,
    isLoading: false
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TERMINATED:
    case USER_EXPIRED:
    case USER_SIGNED_OUT:
    case SILENT_RENEW_ERROR:
      return {...state, channels: []};
    case LOAD_SUBSCRIPTIONS_SUCCESS:
      return {...state, channels: action.payload};
    case LOAD_USER_ERROR:
      return {...state, channels: []};
    case OPEN_MENU:
      return {...state, open: action.payload.open, anchorEl: action.payload.anchorEl};
    case CLOSE_MENU:
      return {...state, open: action.payload.open, anchorEl: action.payload.anchorEl};
    case REQUEST_LOGIN:
      return {...state, login: { body: action.payload, isLoading: true, error: null}}
    case RECEIVED_LOGIN_SUCCESS:
      return {...state, login: {body: action.payload, isLoading: false, error: null}}
    case RECEIVED_LOGIN_ERROR:
      return {...state, login: {body: null, isLoading: false, error: 'Invalid username or password.'}}
    case CLOSE_ERROR:
      return {...state, login: {body: null, isLoading: false, error: null}}
    default:
      return state;
  }
}