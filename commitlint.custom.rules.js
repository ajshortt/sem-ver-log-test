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
    const body = parsed.body;

    // Create a dynamic regex using the injected prefix
    const regex = new RegExp(`\\[${LINEAR_TEAM_PREFIX}-(\\d+)\\]`); // Matches "[LINEAR_TEAM_PREFIX-123]"
    const match = subject.match(regex);

    // eslint-disable-next-line no-console
    console.log("IM RUNNING");

    if (match) {
      console.log("match :>> ", match);
      const id = match[1]; // Extract the ID from the subject
      const link = `[${LINEAR_TEAM_PREFIX}-${id}](https://linear.app/${LINEAR_WORKSPACE}/issue/${LINEAR_TEAM_PREFIX.toLowerCase()}-${id})`; // Create the markdown link

      // Append the link to the body
      const newBody = body ? `${body}\n\n${link}` : link; // Add the link on a new line if there's a body, otherwise just add it

      // eslint-disable-next-line no-console
      console.log(newBody);

      return [
        true,
        `Body updated with link: ${link}`, // Success message
        { body: newBody }, // Update the body with the new link
      ];
    }

    return [true]; // If no match, return valid
  },
};
