import { combineReducers } from 'redux';
import globalTimer from 'app/globalTimer';
import localTimer from 'app/localTimer';

export default combineReducers({
  [globalTimer.constants.NAME]: globalTimer.reducer,
  [localTimer.constants.NAME]: localTimer.reducer
});
