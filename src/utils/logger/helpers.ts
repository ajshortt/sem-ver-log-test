export function generateLoggerMessage(message: string, releaseId?: string): string {
  return releaseId ? `[${releaseId}] ${message}` : message
}
