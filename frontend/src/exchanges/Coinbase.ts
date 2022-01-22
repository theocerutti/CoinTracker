import {BaseExchange} from './BaseExchange';
import {Asset, ExchangeConstructConfig} from '../types/exchanges';

class Coinbase extends BaseExchange {
  constructor(config?: ExchangeConstructConfig) {
    super('coinbase', config);
  }

  private static parseAsset(data: any): Asset {
    return {
      code: data.currency.code,
      name: data.currency.name,
      amount: parseFloat(data.balance.amount),
      img_url: '',
    };
  }

  async getAssets(): Promise<Array<Asset>> {
    const data: Array<any> = []; // raw asset

    let page = 0;
    while (true) {
      const balance = await this.exchange.fetchBalance({
        limit: 300,
        page,
      });
      data.push(...balance.info.data);
      page = balance.info.pagination.next_starting_after;
      if (!page) break;
    }
    return data.map(d => <Asset>Coinbase.parseAsset(d));
  }

  async getMyAssets(): Promise<Array<Asset>> {
    const assets = await this.getAssets();
    return assets.filter(a => a.amount !== 0.0);
  }
}

export default Coinbase;
