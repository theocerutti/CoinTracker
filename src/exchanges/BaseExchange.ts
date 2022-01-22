import {Asset, ExchangeConstructConfig} from '../types/exchanges';
import ccxt, {ExchangeId} from 'ccxt';

export abstract class BaseExchange {
  protected constructor(
    exchangeId: ExchangeId,
    config?: ExchangeConstructConfig,
  ) {
    this.exchange = new ccxt[exchangeId](config);
  }

  abstract getAssets(): Promise<Array<Asset>>;
  abstract getMyAssets(): Promise<Array<Asset>>;

  exchange: ccxt.Exchange;
}
