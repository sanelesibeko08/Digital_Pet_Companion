# Repository Guidelines

## Project Structure & Module Organization

This repository is a small React project in its early UI phase. The current entry component is `App.js` at the repository root. As the pet UI grows, keep reusable React components in a `src/components/` directory, page-level composition in `src/`, tests beside the code they cover (for example, `src/components/Stats.test.jsx`), and static images or other public files in `public/`. Keep styles close to their component or in a clearly named stylesheet such as `src/styles/`.

## Build, Test, and Development Commands

No `package.json` or toolchain configuration is committed yet, so there are no verified build or test commands. Once the React setup is added, document the canonical scripts here and in `package.json`. A typical workflow will be:

- `npm install` — install dependencies.
- `npm run dev` or `npm start` — run the local development server.
- `npm run build` — create a production build.
- `npm test` — execute the test suite.

Do not introduce alternate commands without updating this guide.

## Coding Style & Naming Conventions

Use two spaces for indentation and semicolons consistently within a file. Write function components with PascalCase names (`PetDisplay`, `StatBar`) and use camelCase for variables, props, and event handlers (`hungerLevel`, `handleFeed`). Prefer small, focused components and semantic HTML. Use descriptive class names such as `pet-display` and `stat-bar`; avoid presentation-only names like `blue-box`. Add the project formatter and linter when the toolchain is established, then run them before submitting changes.

## Testing Guidelines

Tests are not configured yet. When added, use the project’s chosen React testing framework, name files `*.test.*` or `*.spec.*`, and cover rendering, accessible labels, and button behavior. Run the full suite before opening a pull request; add coverage expectations when a test configuration exists.

## Commit & Pull Request Guidelines

The repository has no Git history yet, so no existing convention can be inferred. Use short, imperative commit subjects (for example, `Add pet stat bars`) and keep unrelated changes separate. Pull requests should explain the UI or behavior change, list verification commands, link any issue, and include screenshots or a short recording for visual updates.

## Security & Configuration Tips

Do not commit secrets, local environment files, build output, or dependency directories. Put browser-exposed configuration in documented `.env` variables only when the eventual build setup supports them.

## Working Instructions

- Before editing files, propose the intended changes and wait for approval.
- After approved changes, run relevant available tests and explain the results.
- Explain code using short bullet points.
- Add comments for the most important code blocks.

## Code Style

- Use modern JavaScript supported by the intended Node.js version.
- Indent with two spaces, use semicolons and double quotes, and end files with a newline.
- Name executable and utility files in lowercase kebab-case; use `camelCase` for variables and functions and `PascalCase` for classes.
- Keep scripts focused and avoid dependencies for simple platform APIs.

## Next Task Workflow

When asked to do the next task:

1. Read `spec.md`.
2. Find the first unchecked checklist item.
3. Implement only that item.
4. Update `spec.md` by marking that item complete.
5. Summarize what changed.
6. Wait for review before continuing.

## Test-Driven Development

1. Start with tests.
2. Run `node --test`.
3. Confirm a failing test before implementation.
4. Make the smallest passing implementation.
5. Re-run the test after implementation.
6. Summarize what changed.

## Commit and Pull Request Guidance

- Use short, imperative commit summaries that describe the change.
- Keep commits narrowly scoped.
- In pull requests, state the purpose, verification performed, and related issues; include output or screenshots for user-visible changes.

## Learning-Driven Development

1. Check my understanding after meaningful code changes, especially when a feature introduces new logic or structure.
2. Ask a few review or quiz questions after substantive code changes.
3. Start with easier questions and move towards deeper understanding
4. Explain the answer when I am wrong or unsure 
5. Point me back to the relevant code 