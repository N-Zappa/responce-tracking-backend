import express from "express";
import { port } from "./config/config";
import { logger } from "./config/logger";
import { dbConnection } from "./db/db";

const app = express();

app.listen(port, async () => {
  await dbConnection();
  logger.info(`Server is running on port ${port}`);
});
