import { combineReducers } from 'redux';

// All reducers from slices go here
import appReducer from './appSlice';
import errorSlice from './errorSlice';
import postReducer from './postSlice';
import screenReducer from './screenSlice';
import shopReducer from './shopSlice';

const reducers = combineReducers({
  app: appReducer,
  error: errorSlice,
  post: postReducer,
  screen: screenReducer,
  shop: shopReducer,
});

export default reducers;
