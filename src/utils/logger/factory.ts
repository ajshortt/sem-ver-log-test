import { generateLoggerMessage } from "./helpers"
import { logDrain } from "./logdrain"
import type { Logdrain, LoggerPayload } from "./logger.types"

export const createLogger = (releaseId?: string) => ({
  debug: (message: string, payload: LoggerPayload) => {
    const compiledMessage = generateLoggerMessage(message, releaseId)
    logDrain.debug(compiledMessage, payload)
    console.log(compiledMessage, payload)
  },
  error: (message: string, payload: LoggerPayload) => {
    const compiledMessage = generateLoggerMessage(message, releaseId)
    logDrain.error(compiledMessage, payload)
    console.error(compiledMessage, payload)
  },
  warn: (message: string, payload: LoggerPayload) => {
    const compiledMessage = generateLoggerMessage(message, releaseId)
    logDrain.warn(compiledMessage, payload)
    console.warn(compiledMessage, payload)
  },
  info: (message: string, payload: LoggerPayload) => {
    const compiledMessage = generateLoggerMessage(message, releaseId)
    logDrain.info(compiledMessage, payload)
    console.info(compiledMessage, payload)
  }
}) as Logdrain
