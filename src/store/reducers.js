import { combineReducers } from 'redux';

// All reducers from slices go here
import appReducer from './appSlice';
import errorReducer from './errorSlice';
import paymentReducer from './paymentSlice';
import postReducer from './postSlice';
import screenReducer from './screenSlice';
import shopReducer from './shopSlice';

const reducers = combineReducers({
  app: appReducer,
  error: errorReducer,
  payment: paymentReducer,
  post: postReducer,
  screen: screenReducer,
  shop: shopReducer,
});

export default reducers;
