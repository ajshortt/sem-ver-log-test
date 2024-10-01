import { CURRENT_SHA } from "../../configs/release.config";
import { createLogger } from "./factory";

export default createLogger(CURRENT_SHA)
