import customRules from "./commitlint.custom.rules.js";

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "linear-prefix": [2, "always", "SEMVER"],
  },
  plugins: [
    {
      rules: customRules,
    },
  ],
};
