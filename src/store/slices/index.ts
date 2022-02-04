import {combineReducers} from 'redux';

import themeReducer from './theme';
import settingsReducer from './settings';
import appConfigReducer from './appConfig';

const rootReducer = combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
  appConfig: appConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
