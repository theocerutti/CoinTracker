import {combineReducers} from 'redux';

import themeReducer from './theme';
import authReducer from './auth';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
