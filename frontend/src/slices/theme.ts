import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';
import {ThemeSliceState, ThemeType} from '../types/slices/theme';
import {styledTheme} from '../theme';

const INITIAL_THEME: ThemeType = 'dark';

export const initialState: ThemeSliceState = {
  theme: styledTheme[INITIAL_THEME],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, {payload}: {payload: ThemeType}) => {
      state.theme = styledTheme[payload];
    },
  },
});

export const {switchTheme} = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;
