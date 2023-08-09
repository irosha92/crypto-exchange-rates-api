import { inject, injectable } from "inversify";
import BigNumber from "bignumber.js";
import IExchangeRateService from "./interfaces/IExchangeRateService";
import { RepoTypes } from "../repositories/types";
import IExchangeRateRepository from "../repositories/interfaces/IExchangeRateRepository";

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN });

@injectable()
export default class ExchangeRateService implements IExchangeRateService {
  @inject(RepoTypes.IExchangeRateRepository)
  private readonly _exchangeRepository: IExchangeRateRepository;

  async getLiveExchangeRates(): Promise<any> {
    const liveRates = await this._getLiveExchangeRates();
    return liveRates;
  }

  private _getLiveExchangeRates(): Promise<any> {
    return this._exchangeRepository.getLiveExchangeRates();
  }
}
