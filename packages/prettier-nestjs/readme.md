<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" />

### Prettier NestJS

Prettier config for NestJS projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

#### Prerequisites

To install the dependencies, you need to obtain a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) from **@pan7k** with the **read:packages** scope.

#### Installation

If you are using [bun](https://bun.sh), start by creating a new file named `bunfig.toml` in the root directory of your project and insert the following code:

```toml
[install.scopes]
"@pan7k" = { url = "https://npm.pkg.github.com", token = "$GITHUB_TOKEN" }
```

If you’re using npm (or other Node.js package managers), add the following to your `.npmrc` file:

```npmrc
@pan7k:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Next, place the `.env` file in your project's root directory and fill it in by adding the GitHub token:

```env
GITHUB_TOKEN=
```

Finally, install **@pan7k/prettier-nestjs** as a development dependency:

```bash
# using bun
bun add -d @pan7k/prettier-nestjs

# using npm
npm install --save-dev @pan7k/prettier-nestjs
```

#### Usage

Create a `prettier.config.mjs` in your project's root directory:

```ts
import config from "@pan7k/prettier-nestjs/config.mjs";

export default config;
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
