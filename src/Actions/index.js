import axios from 'axios';

export const LOAD_SUBSCRIPTIONS_START =
  "futbal-mng/LOAD_SUBSCRIPTIONS_START";
export const LOAD_SUBSCRIPTIONS_SUCCESS =
  "futbal-mng/LOAD_SUBSCRIPTIONS_SUCCESS";
export const LOAD_SUBSCRIPTIONS_ERROR =
  "futbal-mng/LOAD_SUBSCRIPTIONS_ERROR";
export const OPEN_MENU = "futbal-mng/OPEN_MENU";
export const CLOSE_MENU = "futbal-mng/CLOSE_MENU";
export const REQUEST_LOGIN = "futbal-mng/REQUEST_LOGIN";
export const RECEIVED_LOGIN_SUCCESS = "futbal-mng/RECEIVED_LOGIN_SUCCESS";
export const RECEIVED_LOGIN_ERROR = "futbal-mng/RECEIVED_LOGIN_ERROR";

export function loadSubscriptionsStart() {
  return {
    type: LOAD_SUBSCRIPTIONS_START
  };
}

export function loadSubscriptionsSuccess(channels) {
  return {
    type: LOAD_SUBSCRIPTIONS_SUCCESS,
    payload: channels
  };
}

export function loadSubscriptionsError() {
  return {
    type: LOAD_SUBSCRIPTIONS_ERROR
  };
}

export function openMenu(open) {
  return {
    type: OPEN_MENU,
    payload: open
  };
}

export function closeMenu(open) {
  return {
    type: CLOSE_MENU,
    payload: open
  };
}

export function requestLogin(loginData) {
  return async (dispatch) => {
    dispatch({type: REQUEST_LOGIN, payload: loginData});

    let axiosConfig = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    let response = {};

    try {
      response = await axios.post('http://localhost:5000/api/authenticate',
        loginData,
        axiosConfig
      );
      dispatch(this.receivedLogin(response));
    } catch (error) {
      console.error(error);
      dispatch({type: RECEIVED_LOGIN_ERROR, payload: error});
      // this.setState({ formErrors: 'Wrong username or password!' });
    }
  }
}

export function receivedLogin(response) {
  console.log(response);
  console.log(response.data.redirectUrl);
  window.location = response.data.redirectUrl;
  return {
    type: RECEIVED_LOGIN_SUCCESS,
    payload: response
  }
}

async function makeLoginRequest(payload) {
  let axiosConfig = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };
  let response = {};

  try {
    response = await axios.post('http://localhost:5000/api/authenticate',
      payload,
      axiosConfig
    );

    if (response.data.isOk) {
      window.location = response.data.redirectUrl;
    }

  } catch (error) {
    console.error(error);
    this.setState({ formErrors: 'Wrong username or password!' });
  }
}