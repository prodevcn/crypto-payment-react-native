import {
  GET_USERS,
  REGISTER_USER,
  UPDATE_USER,
  REMOVE_USER,
  SET_AUTH,
  SIGNUP,
  SET_PIN,
  LOGIN,
} from '../constant/action';

export default function reducer(
  state = {
    user: {},
    status: false,
    authenticated: false,
    access_token: null,
    msg: '',
  },
  action,
) {
  switch (action.type) {
    case GET_USERS: {
      return state;
    }
    case REGISTER_USER: {
      return state;
    }
    case UPDATE_USER: {
      return state;
    }
    case REMOVE_USER: {
      return state;
    }
    case SET_AUTH: {
      return {
        ...state,
        authenticated: true,
      };
    }
    case SET_PIN: {
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    }
    default:
      return state;
  }
}
