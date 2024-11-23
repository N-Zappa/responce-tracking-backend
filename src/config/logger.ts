import log4js from "log4js";

log4js.configure({
  appenders: {
    app: { type: "file", filename: `./src/logs/log.log` },
    stdout: { type: "stdout" },
  },
  categories: { default: { appenders: ["app", "stdout"], level: "info" } },
});

export const logger = log4js.getLogger();
