import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';
import {AppConfigState} from '../../types/slices/appConfig';
import Coinbase from '../../exchanges/Coinbase';
import {Cashify} from 'cashify';
import {cashifyRates} from '../../types/cashify';
import ccxt from 'ccxt';

export const initialState: AppConfigState = {
  cashify: new Cashify({base: 'USD', rates: cashifyRates}),
  globalExchange: new ccxt.binance(),
  currentExchange: new Coinbase(),
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    loadAppConfig: state => {
      state.cashify = new Cashify({base: 'USD', rates: cashifyRates});
      state.currentExchange = new Coinbase({
        apiKey: '9nXxZtkhQinEA6fe',
        secret: 'CRbgFPeqqO5fnfigPceyXRSVlKGsAwra',
        timeout: 30000,
        enableRateLimit: true,
      });
      state.globalExchange = new ccxt.binance();
    },
  },
});

export const {loadAppConfig} = appConfigSlice.actions;

export const appConfigSelector = (state: RootState) => state.appConfig;
export default appConfigSlice.reducer;
