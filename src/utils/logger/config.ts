import { CURRENT_SHA } from "../../config/release.config";

console.log('import.meta.env.PUBLIC_LOGGER_IS_PROD :>> ', import.meta.env.PUBLIC_LOGGER_IS_PROD);

export default {
  releaseId: CURRENT_SHA,
  isProd: import.meta.env.PUBLIC_LOGGER_IS_PROD === 'true',
  drains: {
    logtail: {
      sourceId: import.meta.env.SECRET_LOGTAIL_SOURCE_ID,
    }
  }
}
