import {cashify} from '../App';
import currency from 'currency.js';
import {
  CURRENCY_DECIMAL_PRECISION,
  DEFAULT_CURRENCY_CONVERT,
} from '../constants';
import {settingsSelector} from '../store/slices/settings';
import {useSelector} from 'react-redux';
import {cashifySymbol} from '../types/cashify';

export function convertPrice(price: number): number {
  const displayedCurrency = useSelector(settingsSelector).currency;

  return cashify.convert(price, {
    from: DEFAULT_CURRENCY_CONVERT,
    to: displayedCurrency,
  });
}

export function formatPrice(price: number): string {
  const displayedCurrency = useSelector(settingsSelector).currency;

  return currency(convertPrice(price), {
    symbol: cashifySymbol[displayedCurrency],
    precision: CURRENCY_DECIMAL_PRECISION,
  }).format();
}
