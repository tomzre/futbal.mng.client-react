export const LOAD_SUBSCRIPTIONS_START =
  "futbal-mng/LOAD_SUBSCRIPTIONS_START";
export const LOAD_SUBSCRIPTIONS_SUCCESS =
  "futbal-mng/LOAD_SUBSCRIPTIONS_SUCCESS";

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