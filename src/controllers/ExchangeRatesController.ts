import { Request, Response } from "express";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import IExchangeRateService from "../services/interfaces/IExchangeRateService";
import { inject } from "inversify";
import { ServiceTypes } from "../services/types";

// use inversify-express-utils library for inversify integration with Express
// it handles creating express API routes from library level
@controller("/exchange-rates")
export default class ExchangeRatesController implements interfaces.Controller {
  @inject(ServiceTypes.IExchangeRateService)
  private readonly _exchangeRatesService: IExchangeRateService;

  @httpGet("/")
  public async index(@request() req: Request, @response() res: Response) {
    try {
      const liveExchangeRates =
        await this._exchangeRatesService.getLiveExchangeRates();
      res.status(200).json({ liveExchangeRates });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
