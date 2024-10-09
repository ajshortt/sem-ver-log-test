import { generateLoggerMessage } from "./helpers"
import { logDrain } from "./logdrain"
import type { Logdrain, LoggerPayload } from "./logger.types"

export const createLogger = (releaseId?: string): Logdrain => {
  const transactionId = '123'

  return {
    debug: (message: string, payload?: LoggerPayload) => {
      const compiledMessage = generateLoggerMessage(message, releaseId, transactionId)
      logDrain.debug(compiledMessage, payload || undefined)
    },
    error: (message: string, payload?: LoggerPayload) => {
      const compiledMessage = generateLoggerMessage(message, releaseId, transactionId)
      logDrain.error(compiledMessage, payload || undefined)
    },
    warn: (message: string, payload?: LoggerPayload) => {
      const compiledMessage = generateLoggerMessage(message, releaseId, transactionId)
      logDrain.warn(compiledMessage, payload || undefined)
    },
    info: (message: string, payload?: LoggerPayload) => {
      const compiledMessage = generateLoggerMessage(message, releaseId, transactionId)
      logDrain.info(compiledMessage, payload || undefined)
    },
    close: () => logDrain.close()
  } as Logdrain
}
