import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';
import {ThemeType} from '../../types/theme';
import {ThemeSliceState} from '../../types/slices/theme';
import theme from '../../theme';

const INITIAL_THEME: ThemeType = 'dark';

export const initialState: ThemeSliceState = {
  theme: theme[INITIAL_THEME],
  themeType: INITIAL_THEME,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, {payload}: {payload: ThemeType}) => {
      state.theme = theme[payload];
      state.themeType = payload;
    },
    switchAutoTheme: state => {
      const switchedType = state.themeType === 'dark' ? 'light' : 'dark';
      state.theme = theme[switchedType];
      state.themeType = switchedType;
    },
  },
});

export const {switchAutoTheme, switchTheme} = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;
