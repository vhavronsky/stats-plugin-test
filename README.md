# test-stats-plugin

Minimal project for validating Project Stats in Reunite builds.

## What this includes

- `redocly.yaml` with:
  - `apis.main.root: ./openapi.yaml`
  - `stats.fileExtensions: true`
  - `stats.apis` pointing to `./openapi.yaml`
- One OpenAPI file: `openapi.yaml`
- Extra files for extension counting:
  - `index.md`
  - `docs/extra.md`
  - `data/sample.json`
