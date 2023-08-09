import "reflect-metadata";
import ExchangeRateService from "../../src/services/ExchangeRateService";

describe("ExchangeRateService", () => {
  let exchangeRateService: ExchangeRateService;

  beforeEach(() => {
    exchangeRateService = new ExchangeRateService();
    (exchangeRateService as any)._exchangeRepository = {
      getLiveExchangeRates: jest.fn(),
    };
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe("printSellTokens", () => {
    it("should call exchangeRepository.getLiveExchangeRates", async () => {
      (exchangeRateService as any)._exchangeRepository.getLiveExchangeRates =
        jest.fn().mockReturnValue({
          ethereum: {
            usd: 2,
          },
          bitcoin: { usd: 5 },
          dogecoin: { usd: 10 },
        });
      await exchangeRateService.getLiveExchangeRates();
      expect(
        (exchangeRateService as any)._exchangeRepository.getLiveExchangeRates
      ).toHaveBeenCalledTimes(1);
    });
  });
});
