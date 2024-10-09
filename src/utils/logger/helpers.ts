export function generateLoggerMessage(message: string, releaseId?: string, transactionId?: string): string {
  return `${releaseId && `[${releaseId}] `}${transactionId && `(${transactionId}) `}${message}`
}
