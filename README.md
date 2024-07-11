# SST ION Monorepo Template

This template follows the ion's file structure for monorepo setup found in the [docs](https://ion.sst.dev/docs/examples/#aws-monorepo) and the [Matt's TS paths monorepo setup](https://gist.github.com/mattpocock/dd85c649299ee472fafa5b1eb5520b34#paths).

## Usage

1. Clone the repo.
2. Change the app's name in the `sst.config.ts` file.
3. Install dependencies.
4. Execute the `dev` command.

## Notes

- Whenever you want to add a infra stack, you need to export it in the file `infra/stacks.ts`.
- In the frontend directory the `tsconfig.app.json` extends the root tsconfig file to allow imports from other packages.
