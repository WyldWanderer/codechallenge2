import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
//import saveInput from './SaveInputReducer';

const RootReducer = combineReducers({
  Locations,
});

export default RootReducer;
