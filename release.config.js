export default {
  release: {
    branches: ["main"],
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    [
      "@semantic-release/github",
      {
        releaseBodyTemplate: (commits) => {
          const links = commits
            .map((commit) => {
              const match = commit.subject.match(/\[SEMVAR-(\d+)\]/); // Match [SEMVAR-123]

              if (match) {
                const id = match[1];
                return `- [YCO: ${id}](https://linear.app/rotate/issue/${id})`; // Replace with your URL pattern
              }
              return null;
            })
            .filter(Boolean)
            .join("\n");

          return `### Release Notes\n\n${links}`;
        },
      },
    ],
  ],
};
