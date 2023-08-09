export default interface IExchangeRateService {
  getLiveExchangeRates(): Promise<any>;
}
