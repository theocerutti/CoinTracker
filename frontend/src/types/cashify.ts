import {Currency} from './exchanges/currency';

export type CashifyRates = Record<Currency, number>;
export type CashifySymbol = Record<keyof CashifyRates, string>;

export const cashifyRates: CashifyRates = {
  USD: 1.0,
  EUR: 0.8813,
};

export const cashifySymbol: CashifySymbol = {
  USD: '$',
  EUR: '€',
};
