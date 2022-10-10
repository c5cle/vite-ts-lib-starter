# vite-ts-lib-starter

The starter is built on top of Vite 3.x and prepared for writing libraries in TypeScript. It generates a hybrid package - both support for CommonJS and ESM modules.

## Features

- Hybrid support - CommonJS and ESM modules
- IIFE bundle for direct browser support without bundler
- Typings bundle
- ESLint - scripts linter
- Vitest - test framework

## Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone https://github.com/c5cle/vite-ts-lib-starter.git
cd vite-ts-lib-starter
pnpm i
```

## Checklist

When you use this template, update the following:

- Remove `.git` directory and run `git init` to clean up the history
- Change the name in `package.json` - it will be the name of the IIFE bundle global variable and bundle files name (`.cjs`, `.mjs`, `.iife.js`, `d.ts`)
- Change the author name in `LICENSE`
- Clean up the `README` and `CHANGELOG` files

Thanks for using this template

## Usage

The starter contains the following scripts:

- `dev` - starts dev server
- `build` - generates the following bundles: CommonJS (`.cjs`) ESM (`.mjs`) and IIFE (`.iife.js`). The name of bundle is automatically taked from `package.json` name property
- `test` - starts vitest and runs all tests
- `test:ui` - starts vitest with vitest ui
- `test:coverage` - starts vitest and run all tests with code coverage report
- `lint` - lint `.ts` files with eslint
- `lint:fix` - lint `.ts` files with eslint and fix files

## License

[MIT](./LICENSE) License © 2022-Present [c5cle](https://github.com/c5cle)
