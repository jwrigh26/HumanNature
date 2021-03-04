import { combineReducers } from 'redux';

// All reducers from slices go here
import appReducer from './appSlice';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
