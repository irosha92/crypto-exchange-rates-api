import "reflect-metadata";
import ExchangeRateRepository from "../../src/repositories/ExchangeRateRepository";

describe("ExchangeRateRepository", () => {
  let exchangeRateRepository: ExchangeRateRepository;

  beforeEach(() => {
    exchangeRateRepository = new ExchangeRateRepository();
    (exchangeRateRepository as any)._http = {
      get: jest.fn(),
    };
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe("getLiveExchangeRates", () => {
    it("should call http service", async () => {
      const mockResponse = {
        data: {
          ethereum: {
            usd: 2,
          },
          bitcoin: { usd: 5 },
          dogecoin: { usd: 10 },
        },
      };
      (exchangeRateRepository as any)._http.get = jest
        .fn()
        .mockReturnValue(mockResponse);
      const response = await exchangeRateRepository.getLiveExchangeRates();
      expect((exchangeRateRepository as any)._http.get).toHaveBeenCalledTimes(
        1
      );
      expect(response).toEqual(mockResponse.data);
    });
  });
});
