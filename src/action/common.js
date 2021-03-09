import {FETCHING, FETCHED} from '../constant/action';

export function setFetching() {
  return (dispatch) => {
    dispatch({type: FETCHING, payload: ''});
  };
}

export function setFetched() {
  return (dispatch) => {
    dispatch({type: FETCHED, payload: ''});
  };
}
