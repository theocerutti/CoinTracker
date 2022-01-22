import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';
import {SettingsSliceState} from '../../types/slices/settings';
import {Currency} from '../../types/exchanges/currency';
import {DEFAULT_DISPLAYED_CURRENCY} from '../../constants';

export const initialState: SettingsSliceState = {
  currency: DEFAULT_DISPLAYED_CURRENCY,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCurrency: (state, {payload}: {payload: Currency}) => {
      state.currency = payload;
    },
    switchAutoCurrency: state => {
      state.currency = state.currency === 'USD' ? 'EUR' : 'USD';
    },
  },
});

export const {switchAutoCurrency, setCurrency} = settingsSlice.actions;

export const settingsSelector = (state: RootState) => state.settings;
export default settingsSlice.reducer;
