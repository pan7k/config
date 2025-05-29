<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" />

### TSConfig NestJS

TypeScript config for NestJS projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

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

Finally, install **@pan7k/tsconfig-nestjs** as a development dependency:

```bash
# using bun
bun add -d @pan7k/tsconfig-nestjs

# using npm
npm install --save-dev @pan7k/tsconfig-nestjs
```

#### Usage

Create a `tsconfig.json` in your project's root directory:

```json
{
  "extends": "@pan7k/tsconfig-nestjs/config.json"
}
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
