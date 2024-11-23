import mongoose from "mongoose";
import { logger } from "../config/logger";
import { db_conn_string } from "../config/config";

export const dbConnection = async () => {
  if (!db_conn_string) return;
  else {
    logger.info("Start DB connection");
    await mongoose.connect(db_conn_string).catch((err) => {
      logger.error(`Error on DB connection: ${err}`);
    });
  }
};
