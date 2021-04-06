import {
  SIGNUP,
  FETCHING,
  FETCHED,
  SET_PIN,
  CHANGE_PASSWORD,
  LOGIN,
  SET_WALLET,
} from '../constant/action';
import conf from '../constant/network';
import AsyncStorage from '@react-native-async-storage/async-storage';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
export function createPin(user, letters) {
  return (dispatch) => {
    let pin = '';
    let wallet = {};
    for (let letter of letters) {
      pin += letter;
    }
    user.pinCode = pin;
    dispatch({type: FETCHING, payload: ''});
    const url = conf.base_url + '/user/create-pin';
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: user}),
    })
      .then((res) => res.json())
      .then((resJson) => {
        for (let item of resJson.currencies) {
          wallet[item.name] = item.balance;
        }
        dispatch({type: SET_WALLET, payload: wallet});
        dispatch({type: SET_PIN, payload: user});
        dispatch({type: FETCHED, payload: ''});
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function changePassword(user, password, secret_number) {
  return (dispatch) => {
    dispatch({type: FETCHING, payload: ''});
    const url = conf.base_url + '/user/change-password';
    AsyncStorage.getItem('access_token').then((token) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          user: user,
          password: password,
          secret_number: secret_number,
        }),
      })
        .then((res) => res.json())
        .then((resJson) => {
          user.password = password;
          user.secret_number = secret_number;
          dispatch({type: CHANGE_PASSWORD, payload: user});
          dispatch({type: FETCHED, payload: ''});
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };
}

export function signupRequest() {
  return (dispatch) => {
    dispatch({type: FETCHING, payload: ''});
    const url = conf.base_url + '/user/signup';
    fetch(url, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: '',
    })
      .then((res) => res.json())
      .then((resJson) => {
        AsyncStorage.setItem('access_token', resJson.token).then(() => {
          dispatch({type: SIGNUP, payload: resJson});
          dispatch({type: FETCHED, payload: ''});
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function login(userId, password) {
  return (dispatch) => {
    dispatch({type: FETCHING, payload: ''});
    const url = conf.base_url + '/user/login';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        dispatch({type: FETCHED, payload: ''});
        AsyncStorage.setItem('access_token', resJson.token).then(() => {
          dispatch({type: LOGIN, payload: resJson});
          dispatch({type: FETCHED, payload: ''});
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
