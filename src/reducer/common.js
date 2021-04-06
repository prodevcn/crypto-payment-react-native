import {FETCHING, FETCHED, SET_FEE} from '../constant/action';
export default function reducer(
  state = {
    fetching: false,
    fee: {
      deposit: null,
      withdraw: null,
      transfer: null,
      exchange: null,
    },
  },
  action,
) {
  switch (action.type) {
    case FETCHING: {
      return {...state, fetching: true};
    }
    case FETCHED: {
      return {...state, fetching: false};
    }
    case SET_FEE: {
      console.log(action.payload);
      return {...state, fee: action.payload};
    }
    default:
      return state;
  }
}
