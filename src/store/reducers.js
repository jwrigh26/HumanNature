import { combineReducers } from 'redux';

// All reducers from slices go here
import appReducer from './appSlice';
import postReducer from './postSlice';
import screenReducer from './screenSlice';

const reducers = combineReducers({
  app: appReducer,
  post: postReducer,
  screen: screenReducer,
});

export default reducers;
