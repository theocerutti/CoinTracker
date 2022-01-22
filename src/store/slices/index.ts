import {combineReducers} from 'redux';

import themeReducer from './theme';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
