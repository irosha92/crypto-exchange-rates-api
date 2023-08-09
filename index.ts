import "reflect-metadata";
import express from "express";
import "./src/controllers/ExchangeRatesController";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindRepos } from "./src/repositories/config";
import { bindServices } from "./src/services/config";

const app = express();

const container = new Container();
bindRepos(container);
bindServices(container);

let server = new InversifyExpressServer(
  container,
  null,
  { rootPath: "/" },
  app
);

const port = 3000;
let appConfigured = server.build();
appConfigured.listen(process.env.PORT || port, () => `App running on ${port}`);
