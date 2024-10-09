import type { Logdrain, LoggerPayload } from "../logger.types"
import config from "./../config";

const logtailConfig = config.drains.logtail
console.log('config :>> ', config);
console.log('logtailConfig :>> ', logtailConfig);
import { Browser as Logtail } from "@logtail/js";
const logtail = new Logtail(logtailConfig.sourceId || '');

export default {
  debug: (message: string, payload: LoggerPayload) => {
    logtail.debug(message, payload)
  },
  error: (message: string, payload: LoggerPayload) => {
    logtail.error(message, payload)
  },
  warn: (message: string, payload: LoggerPayload) => {
    logtail.warn(message, payload)
  },
  info: (message: string, payload: LoggerPayload) => {
    logtail.info(message, payload)
  },
  close: () => logtail.flush()
} as Logdrain
