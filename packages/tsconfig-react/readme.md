<br>
<img src="https://github.com/pan7k/config/blob/main/docs/blank.svg" alt="Logo" />

### TSConfig React

TypeScript config for React projects<br>
[← Main repository](https://github.com/pan7k/config?tab=readme-ov-file#readme)

---

#### Prerequisites

To install the dependencies, you need to obtain a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) from **@pan7k** with the **read:packages** scope.

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

Finally, install **@pan7k/tsconfig-react** as a development dependency.

#### Usage

Create a `tsconfig.json` in your project's root directory:

```json
{
  "extends": "@pan7k/tsconfig-react/config.json"
}
```

#### License

© 2025 Tomáš Pánik.<br>
This project is licensed under the [MIT License](https://github.com/pan7k/config/blob/main/license.txt).
