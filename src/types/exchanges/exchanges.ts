import ccxt from 'ccxt';

export type ExchangeConstructConfig = {
  [key in keyof ccxt.Exchange]?: ccxt.Exchange[key];
};
