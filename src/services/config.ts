import "reflect-metadata";
import { Container } from "inversify";
import { ServiceTypes } from "./types";
import ExchangeRateService from "./ExchangeRateService";
import IExchangeRateService from "./interfaces/IExchangeRateService";

export function bindServices(container: Container): void {
  container
    .bind<IExchangeRateService>(ServiceTypes.IExchangeRateService)
    .to(ExchangeRateService);
}
