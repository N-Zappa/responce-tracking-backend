import dotenv from "dotenv";
dotenv.config();

export const { PORT: port, DB_CONN_STRING: db_conn_string } = process.env;

if (!port) throw new Error("PORT env var is required!");
if (!db_conn_string) throw new Error("DB_CONN_STRING env var is required!");
