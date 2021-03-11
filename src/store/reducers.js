import { combineReducers } from 'redux';

// All reducers from slices go here
import appReducer from './appSlice';
import postReducer from './postSlice';

const reducers = combineReducers({
  app: appReducer,
  post: postReducer,
});

export default reducers;
