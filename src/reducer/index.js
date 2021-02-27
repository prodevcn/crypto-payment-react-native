import {combineReducers} from 'redux';
import user from './user';
import error from './error';
import common from './common';
export default combineReducers({
  user: user,
  error: error,
  common: common,
});
