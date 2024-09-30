# Sem Ver Log Testing Demo

> Allowing robots do the releasing

## What is this repo?
Validates the approach of using various tools to generate semantic version releases
through a common CI pipeline.

This approach uses:
- (commitlint.js.org)[https://github.com/conventional-changelog/commitlint]
- To enforce... (Conventional Commits)[https://www.conventionalcommits.org/en/v1.0.0/]
- To allow a common CircleCI pipeline to run a `release` command that...
- Runs `npx semantic-release` (semantic-release)[https://github.com/semantic-release/semantic-release?tab=readme-ov-file] to auto-generate a changelog right in the (repo versions page)[https://github.com/ajshortt/sem-ver-log-test/releases].

