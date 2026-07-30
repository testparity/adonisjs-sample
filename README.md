<p align="center">
  <img src="https://testparity.com/brand/testparity-readme-banner.jpg" alt="TestParity" width="100%">
</p>

# AdonisJS Sample

[![Parity Sample](https://github.com/testparity/adonisjs-sample/actions/workflows/parity.yml/badge.svg)](https://github.com/testparity/adonisjs-sample/actions/workflows/parity.yml)

This repository is an end-to-end Parity demo for AdonisJS 7. It runs the real Japa suite through `node ace test`, generates one Clover report per spec, and lets Parity prove which test owns each service.

## What this sample proves

`user_presenter.ts` looks healthy at 84% when every test is combined. Its belonging spec covers only 44%; the rest comes from `audit_summary.spec.ts`. That distinction is invisible in a conventional aggregate report.

| Source file | Belonging test | All tests | Belonging test | Attribution |
| --- | --- | ---: | ---: | ---: |
| `app/services/user_presenter.ts` | `tests/unit/services/user_presenter.spec.ts` | 84% | 44% | `2|1` |
| `app/services/audit_summary.ts` | `tests/unit/services/audit_summary.spec.ts` | 100% | 100% | `1|0` |
| Project total | - | 85.19% | - | - |

`coverage-attribution` uses `total covering tests|non-matching covering tests`. The `2|1` result proves that one additional spec contributes coverage to `user_presenter.ts`.

## How the proof works

The matching presenter spec calls `displayName` and `initials`. The audit spec also calls `normalizeName` and `wordCount`, while `reverseName` remains intentionally uncovered. `parity test` runs each spec separately under `c8`, converts the generated Clover reports into `.parity/per-test`, and runs `parity check` automatically.

## Run locally

Requirements: Node.js 24+, PHP 8.4+, and Composer.

```bash
npm ci
npm test
npm run typecheck
composer global require testparity/parity:^1.2
```

Generate fresh per-test evidence and check it:

```bash
parity test --config=parity.yaml --format=json
```

To inspect the same generated reports without rerunning Japa:

```bash
parity check --config=parity.yaml --format=json
```

The expected result is `passed = true`, `global_coverage = 85.19`, and the file-level values shown above. No coverage fixture is committed.

## CI

GitHub Actions installs locked npm dependencies, runs the complete AdonisJS suite, installs public `testparity/parity:^1.2`, and executes `parity test`. The generated `.parity/per-test` directory and JSON result are uploaded as the `parity-per-test-evidence` artifact for 14 days. No private token is required.
