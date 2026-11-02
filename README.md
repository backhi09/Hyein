# Hyein

End-to-end tests with [Playwright](https://playwright.dev).

## Setup

```bash
npm install
npx playwright install --with-deps chromium   # local machines only; skip in the Claude Code cloud container (browsers are preinstalled)
```

`@playwright/test` is pinned to **1.63.0** so it matches the Chromium build preinstalled in the cloud container.
If you bump the version, run `npx playwright install` locally to fetch matching browsers.

## Running

| Command | What it does |
| --- | --- |
| `npm test` | Run all tests headless |
| `npm run test:headed` | Run with a visible browser |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | Open the last HTML report |

Set `BASE_URL` to point `page.goto('/path')` at an app, e.g. `BASE_URL=http://localhost:3000 npm test`.
