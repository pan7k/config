<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" />

### TSConfig Next.js

TypeScript config for Nest.js projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

#### Installation

Add the following to your `.npmrc` file:

```npmrc
@pan7k:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Next, place the `.env` file in your project's root directory and fill it in by adding the GitHub token:

```env
GITHUB_TOKEN=
```

Finally, install **@pan7k/tsconfig-next** as a development dependency.

#### Usage

Create a `tsconfig.json` in your project's root directory:

```json
{
  "extends": "@pan7k/tsconfig-next/config.json"
}
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
