export default {
  "linear-prefix": (parsed, rule, value) => {
    if (!rule || rule === "never") return [true];

    const LINEAR_TEAM_PREFIX = value;

    const subject = parsed.subject;

    // Create a dynamic regex using the LINEAR_TEAM_PREFIX
    const regex = new RegExp(`\\[${LINEAR_TEAM_PREFIX}(-\\d+)?\\]`); // Matches "[LINEAR_TEAM_PREFIX]" or "[LINEAR_TEAM_PREFIX-123]"
    const isValid = regex.test(subject);

    return [
      isValid,
      `Subject must contain "[${LINEAR_TEAM_PREFIX}]" or "[${LINEAR_TEAM_PREFIX}-123]" at the start of the subject`,
    ];
  },
};
