import {BaseExchange} from './BaseExchange';
import {Asset, ExchangeConstructConfig, Transaction} from '../types/exchanges';
import {User} from '../types/exchanges/user';
import {CRYPTO_ICONS_URL} from '../constants';

class Coinbase extends BaseExchange {
  constructor(config?: ExchangeConstructConfig) {
    super('coinbase', config);
  }

  private static parseAsset(data: any): Asset {
    return {
      code: data.currency.code,
      name: data.currency.name,
      amount: parseFloat(data.balance.amount),
      img_url: `${CRYPTO_ICONS_URL}/${data.currency.code.toLowerCase()}`,
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

  async getUser(): Promise<User> {
    console.log("getUser")
    return this.exchange.fetch2("user");
  }

  async getMyTransactions(): Promise<Array<Transaction>> {
    console.log(await this.getUser());
    const c = this.exchange.fetch("https://api.coinbase.com/v2/accounts/:account_id/transactions");
    console.log(c);
    return ["e"];
  }
}

export default Coinbase;
