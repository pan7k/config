<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" alt="Logo" />

### TSConfig NestJS

TypeScript config for NestJS projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

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

Finally, install **@pan7k/tsconfig-nestjs** as a development dependency.

#### Usage

Create a `tsconfig.json` in your project's root directory:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist",
    "rootDir": "./core"
  },
  "extends": "@pan7k/tsconfig-nestjs/config.json"
}
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
