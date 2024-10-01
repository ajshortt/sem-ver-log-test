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
  "linear-link": (parsed, rule, { prefix, workspace }) => {
    if (!rule || rule === "never") return [true];

    const LINEAR_TEAM_PREFIX = prefix;
    const LINEAR_WORKSPACE = workspace;

    if (!LINEAR_TEAM_PREFIX || !LINEAR_WORKSPACE) return [true];

    const subject = parsed.subject;
    let body = parsed.body;

    // Create a dynamic regex using the injected prefix
    const regex = new RegExp(`\\[${LINEAR_TEAM_PREFIX}-(\\d+)\\]`); // Matches "[LINEAR_TEAM_PREFIX-123]"
    const match = subject.match(regex);

    if (match) {
      const id = match[1]; // Extract the ID from the subject
      const link = `[${LINEAR_TEAM_PREFIX}-${id}](https://linear.app/${LINEAR_WORKSPACE}/issue/${LINEAR_TEAM_PREFIX.toLowerCase()}-${id})`; // Create the markdown link

      // Check if the correct link is already present in the body
      if (body && body.includes(link)) {
        return [true]; // The correct link is already present, no need to modify
      }

      // If the correct link is not in the body, append it
      const newBody = body ? `${body}\n\n${link}` : link; // Add the link on a new line if there's a body, otherwise just add it
      parsed.body = newBody;

      return [
        false, // Set to false to fail the validation if the link is missing or incorrect
        `The commit body must include the correct link: ${link}`, // Validation error message
      ];
    }

    return [true]; // If no match in the subject, return valid.
  },
};
