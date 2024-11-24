"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_conn_string = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.port = _a.PORT, exports.db_conn_string = _a.DB_CONN_STRING;
if (!exports.port)
    throw new Error("PORT env var is required!");
if (!exports.db_conn_string)
    throw new Error("DB_CONN_STRING env var is required!");
