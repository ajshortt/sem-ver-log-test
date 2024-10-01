export interface Logdrain {
  debug: (message: string, payload?: LoggerPayload) => void
  error: (message: string, payload?: LoggerPayload) => void
  warn: (message: string, payload?: LoggerPayload) => void
  info: (message: string, payload?: LoggerPayload) => void
}

export type LoggerPayload = Record<string, string | number | null> & {
  code: string
}


