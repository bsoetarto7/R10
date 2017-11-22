import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import conductReducer from './modules/conduct';
import sessionReducer from './modules/session';
import speakerReducer from './modules/speaker';

export default combineReducers({
  navigation: NavigationReducer,
  conduct:conductReducer,
  session:sessionReducer,
  speaker:speakerReducer
})