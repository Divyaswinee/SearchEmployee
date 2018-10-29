import { combineReducers } from 'redux';
import EmpDetailReducer from './detail';

const rootReducer = combineReducers({
  detail: EmpDetailReducer
});

export default rootReducer;