import currency from 'currency.js';
import {CURRENCY_DECIMAL_PRECISION, DEFAULT_CURRENCY_CONVERT,} from '../constants';
import {settingsSelector} from '../store/slices/settings';
import {useSelector} from 'react-redux';
import {cashifySymbol} from '../types/cashify';
import {appConfigSelector} from '../store/slices/appConfig';

export function useConvertPrice(price: number): number {
  const {cashify} = useSelector(appConfigSelector);
  const displayedCurrency = useSelector(settingsSelector).currency;

  if (!price) price = 0;
  return cashify.convert(price, {
    from: DEFAULT_CURRENCY_CONVERT,
    to: displayedCurrency,
  });
}

export function useFormatPrice(price: number): string {
  const displayedCurrency = useSelector(settingsSelector).currency;

  if (!price) price = 0;
  return currency(useConvertPrice(price), {
    symbol: cashifySymbol[displayedCurrency],
    precision: CURRENCY_DECIMAL_PRECISION,
  }).format();
}
