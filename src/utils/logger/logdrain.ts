import Logtail from "./drains/Logtail";
import defaultDrain from "./drains/default";
import config from "./config";
import type { Logdrain } from "./logger.types";

export const logDrain: Logdrain = config['isProd'] ? Logtail : defaultDrain
