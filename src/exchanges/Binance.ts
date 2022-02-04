import {BaseExchange} from './BaseExchange';
import {Asset, ExchangeConstructConfig, Transaction} from '../types/exchanges';
import {User} from '../types/exchanges/user';
import {CRYPTO_ICONS_URL} from '../constants';

class Binance extends BaseExchange {
  constructor(config?: ExchangeConstructConfig) {
    super('binance', config);
  }

  private static parseAsset(data: any): Asset {
    return {
      code: data.asset,
      name: data.asset,
      amount: parseFloat(data.free) + parseFloat(data.locked),
      img_url: `${CRYPTO_ICONS_URL}/${data.asset.toLowerCase()}`,
    };
  }

  async getAssets(): Promise<Array<Asset>> {
    const balance = await this.exchange.fetchBalance();
    return balance.info.balances.map((d: any) => <Asset>Binance.parseAsset(d));
  }

  async getMyAssets(): Promise<Array<Asset>> {
    const assets = await this.getAssets();
    return assets.filter(a => a.amount !== 0.0);
  }

  async getUser(): Promise<User> {
    console.log("getUser");
    return "n";
    // return this.exchange.fetch2("user");
  }

  async getMyTransactions(): Promise<Array<Transaction>> {
    // console.log(await this.getUser());
    // const c = this.exchange.fetch("https://api.coinbase.com/v2/accounts/:account_id/transactions");
    // console.log(c);
    return ["e"];
  }
}

export default Binance;
