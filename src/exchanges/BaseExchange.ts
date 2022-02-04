import {Asset, ExchangeConstructConfig, Transaction} from '../types/exchanges';
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
  abstract getMyTransactions(): Promise<Array<Transaction>>

  exchange: ccxt.Exchange;
}
