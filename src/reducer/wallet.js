import {SET_WALLET} from '../constant/action';

export default function reducer(
  state = {
    wallet: {},
  },
  action,
) {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        wallet: action.payload,
      };
    }
    default:
      return state;
  }
}
