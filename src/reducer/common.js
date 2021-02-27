import {FETCHING, FETCHED} from '../constant/action';
export default function reducer(
  state = {
    fetching: false,
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
    default:
      return state;
  }
}
