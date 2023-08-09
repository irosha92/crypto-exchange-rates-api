import "reflect-metadata";
import { Container } from "inversify";
import { RepoTypes } from "./types";
import ExchangeRateRepository from "./ExchangeRateRepository";
import IExchangeRateRepository from "./interfaces/IExchangeRateRepository";

export function bindRepos(container: Container): void {
  container
    .bind<IExchangeRateRepository>(RepoTypes.IExchangeRateRepository)
    .to(ExchangeRateRepository);
}
