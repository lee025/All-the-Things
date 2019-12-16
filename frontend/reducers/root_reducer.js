import { combineReducers } from 'redux';

import entities from './entities_reducer';
import sessions from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  entities,
  sessions,
  errors
});

export default rootReducer;