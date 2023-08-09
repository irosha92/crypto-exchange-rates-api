import { injectable } from "inversify";
import axios from "axios";
import IExchangeRateRepository from "./interfaces/IExchangeRateRepository";

@injectable()
export default class ExchangeRateRepository implements IExchangeRateRepository {
  private readonly _http = axios;

  private readonly _USD = "usd";

  async getLiveExchangeRates() {
    try {
      const res = await this._http.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,dogecoin&vs_currencies=${this._USD}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
}
