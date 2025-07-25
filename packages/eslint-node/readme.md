<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" alt="Logo" />

### ESLint Node.js

ESLint flat config for Node.js projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

#### Prerequisites

To install the dependencies, you need to obtain a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) from **@pan7k** with the **read:packages** scope.

This package uses [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/) (v9) and is published as an **ESM-only** module. To use it, you must ensure your `package.json` has `"type": "module"` (or use `.mjs` file extension).

#### Installation

Add the following to your `.npmrc` file:

```npmrc
@pan7k:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then, create a `.env` file in the project’s root directory and add the following:

```env
GITHUB_TOKEN=
```

Finally, install **@pan7k/eslint-node** as a development dependency.

#### Usage

Create a `eslint.config.mjs` in your project's root directory:

```ts
import config from "@pan7k/eslint-node";

export default config;
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
