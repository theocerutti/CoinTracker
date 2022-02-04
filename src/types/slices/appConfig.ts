import {Cashify} from 'cashify';
import ccxt from 'ccxt';
import {BaseExchange} from '../../exchanges/BaseExchange';

export type AppConfigState = {
  cashify: Cashify;
  globalExchange: ccxt.Exchange;
  currentExchange: BaseExchange;
};
