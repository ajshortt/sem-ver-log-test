import type { Logdrain, LoggerPayload } from "../logger.types"

// import { Browser as Logtail } from "@logtail/js";
// const logtail = new Logtail("$SOURCE_TOKEN");

export default {
  debug: (message: string, payload: LoggerPayload) => {
    // logtail.debug(message, payload)
  },
  error: (message: string, payload: LoggerPayload) => {
    // logtail.error(message, payload)
  },
  warn: (message: string, payload: LoggerPayload) => {
    // logtail.warn(message, payload)
  },
  info: (message: string, payload: LoggerPayload) => {
    // logtail.info(message, payload)
  }
} as Logdrain
