import {FETCHING, FETCHED, SET_FEE} from '../constant/action';
import network from '../constant/network';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export function getFee() {
  return (dispatch) => {
    dispatch({type: FETCHING, payload: ''});
    const url = network.base_url + '/common/get-fee';
    AsyncStorage.getItem('access_token').then((token) => {
      network.headers.Authorization = token;
      fetch(url, {
        method: 'GET',
        headers: network.headers,
      })
        .then((res) => res.json())
        .then((resJson) => {
          dispatch({type: FETCHED, payload: ''});
          dispatch({type: SET_FEE, payload: resJson});
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };
}
