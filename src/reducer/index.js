import {combineReducers} from 'redux';
import user from './user';
import error from './error';
import common from './common';
import wallet from './wallet';
export default combineReducers({
  user: user,
  error: error,
  common: common,
  wallet: wallet,
});
