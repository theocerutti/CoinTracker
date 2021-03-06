import {Currency} from './types/exchanges';
import {ExchangeId} from 'ccxt';

export const appName: string = 'Coin Tracker';

// react-query
export const REFETCH_PORTFOLIO_ASSETS: number = 1000 * 60 * 60; // 1 hour
export const REFETCH_PORTFOLIO_ASSET_PRICE: number = 1000 * 30;

export const DEFAULT_CURRENCY_TICKER_EXCHANGE: Currency = 'USDT';
export const DEFAULT_CURRENCY_CONVERT: Currency = 'USD';
export const DEFAULT_DISPLAYED_CURRENCY: Currency = 'USD';
export const CURRENCY_DECIMAL_PRECISION: number = 3;

export const CRYPTO_ICONS_URL = "https://cryptoicon-api.vercel.app/api/icon"

export const SUPPORTED_EXCHANGES: Array<ExchangeId> = ['coinbase', 'binance'];
