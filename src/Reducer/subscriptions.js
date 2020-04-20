import { LOAD_SUBSCRIPTIONS_SUCCESS } from "../Actions";
import { SESSION_TERMINATED, USER_EXPIRED } from "redux-oidc";
import { LOAD_USER_ERROR } from 'redux-oidc';

const initialState = {
  channels: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TERMINATED:
    case USER_EXPIRED:
      return {...state, channels: []};
      //Object.assign({}, state, { channels: [] });
    case LOAD_SUBSCRIPTIONS_SUCCESS:
      return {...state, channels: action.payload};
      //Object.assign({}, state, { channels: action.payload });
    case LOAD_USER_ERROR:
      return {...state};
    default:
      return state;
  }
}