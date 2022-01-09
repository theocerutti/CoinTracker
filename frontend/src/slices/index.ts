import {combineReducers} from 'redux';

import themeReducer from './theme';
import authReducer from './auth';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
