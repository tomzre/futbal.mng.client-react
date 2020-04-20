export const LOAD_SUBSCRIPTIONS_START =
  "futbal-mng/LOAD_SUBSCRIPTIONS_START";
export const LOAD_SUBSCRIPTIONS_SUCCESS =
  "futbal-mng/LOAD_SUBSCRIPTIONS_SUCCESS";
export const LOAD_SUBSCRIPTIONS_ERROR =
  "futbal-mng/LOAD_SUBSCRIPTIONS_ERROR";

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