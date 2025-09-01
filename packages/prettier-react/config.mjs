/**
 * **Prettier config for React projects**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  arrowParens: "avoid",
  bracketLine: false,
  endOfLine: "lf",
  parser: "typescript",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
    {
      files: "*.yml",
      options: {
        parser: "yaml",
      },
    },
  ],
};
