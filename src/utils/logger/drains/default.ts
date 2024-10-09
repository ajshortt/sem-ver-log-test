import type { Logdrain, LoggerPayload } from "../logger.types"

export default {
  debug: (message: string, payload: LoggerPayload) => {
    console.log(message, payload || '')
  },
  error: (message: string, payload: LoggerPayload) => {
    console.error(message, payload || '')
  },
  warn: (message: string, payload: LoggerPayload) => {
    console.warn(message, payload || '')
  },
  info: (message: string, payload: LoggerPayload) => {
    console.info(message, payload || '')
  },
  close: () => {}
} as Logdrain
