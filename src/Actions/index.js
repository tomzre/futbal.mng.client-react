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
export const RECEIVED_LOGIN_UNAUTHORIZED = "futbal-mng/RECEIVED_LOGIN_UNAUTHORIZED";
export const RECEIVED_LOGIN_ERROR = "futbal-mng/RECEIVED_LOGIN_ERROR";
export const CLOSE_ERROR = "futbal-mng/CLOSE_ERROR";

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

export function closeError() {
  return {
    type: CLOSE_ERROR,
    payload: null
  };
}

export function requestLogin(loginData) {
  return async (dispatch) => {
    dispatch({ type: REQUEST_LOGIN, payload: loginData });

    let axiosConfig = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    let response = {};


    const axiosInstance = axios.create(axiosConfig);
    axiosInstance.interceptors.response.use(
      response => response,
      error => {
        const { status } = error.response;
        if (status === 401) {
          dispatch({ type: RECEIVED_LOGIN_UNAUTHORIZED, payload: error });
        }
        else {
          dispatch({ type: RECEIVED_LOGIN_ERROR, payload: error });
        }
        return Promise.reject(error);
      }
    )
    try {
      response = await axiosInstance.post('http://localhost:5000/api/authenticate', loginData);
      // await axios.post('http://localhost:5000/api/authenticate',
      //   loginData,
      //   axiosConfig
      // );
      dispatch(this.receivedLogin(response));
    } catch (error) {
      console.error(error);
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