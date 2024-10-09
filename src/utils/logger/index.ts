import { createLogger } from "./factory";
import config from "./config";

export default createLogger(config.releaseId || '')
