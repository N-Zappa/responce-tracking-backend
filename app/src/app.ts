import express from "express";
import { port } from "./config/config";
import { logger } from "./config/logger";
import { dbConnection } from "./db/db";
import { router } from "./vacancy-response/vacancy-response.controller";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);

app.listen(port, async () => {
  await dbConnection();
  logger.info(`Server is running on port ${port}`);
});
