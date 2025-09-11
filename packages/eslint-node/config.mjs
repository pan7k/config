import json from "@eslint/json";
import markdown from "@eslint/markdown";
import jsonc from "eslint-plugin-jsonc";
import sort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

/**
 * @typedef {Object} ConfigOptions
 * @property {string[]} [projects] Array of tsconfig paths.
 */

/**
 * **ESLint flat config for Node.js projects**
 *
 * Works with JavaScript, TypeScript, JSON and Markdown.
 *
 * Factory lets consumers override project's tsconfig paths.
 * @param {ConfigOptions} [options]
 */
export function createConfig({ projects } = /** @type {ConfigOptions} */ {}) {
  const resolvedProjects = projects ?? ["./tsconfig.json"];

  return ts.config(
    {
      // non type-aware overrides
      files: ["**/*.{js,mjs,mjsx,cjs,ts,mts,mtsx,cts,jsx,tsx}"],
      plugins: { sort },
      languageOptions: {
        parserOptions: {
          sourceType: "module",
          ecmaVersion: "latest",
        },
      },
      rules: {
        "no-unused-vars": "warn",
        "sort/imports": [
          "warn",
          {
            groups: [
              [
                "^u0000", // side effects
                "^react$", //react
                "^@?w", // packages
                "^@", // absolute imports
                "^", // other absolute imports
                "^./", // relative imports
                "^.+.(module.css|module.scss)$", // style modules
                "^.+.(gif|png|svg|jpg)$", // media
              ],
            ],
          },
        ],
      },
    },
    {
      // type-aware overrides
      files: ["**/*.{ts,mts,cts,tsx,mtsx}"],
      languageOptions: {
        globals: globals.browser,
        parser: ts.parser,
        parserOptions: {
          project: resolvedProjects,
        },
      },
      plugins: { "@typescript-eslint": ts.plugin },
      extends: [ts.configs.recommendedTypeChecked],
      rules: {
        "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
      },
    },
    {
      // json
      files: ["**/*.json"],
      ignores: ["**/package.json"],
      language: "json/json",
      plugins: { json, jsonc },
      rules: {
        "jsonc/sort-keys": [
          "warn",
          {
            pathPattern: ".*",
            order: { type: "asc" },
          },
        ],
        "jsonc/sort-array-values": [
          "warn",
          {
            pathPattern: ".*",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      // package.json
      files: ["**/package.json"],
      language: "json/json",
      plugins: { json, jsonc },
      rules: {
        "jsonc/sort-keys": [
          "warn",
          {
            pathPattern: "^$",
            order: [
              "name",
              "description",
              "author",
              "repository",
              "private",
              "license",
              "version",
              "type",
              "main",
              "module",
              "exports",
              "sideEffects",
              "types",
              "packageManager",
              "workspaces",
              "scripts",
              "dependencies",
              "peerDependencies",
              "devDependencies",
            ],
          },
          {
            pathPattern: "^(dependencies|devDependencies|peerDependencies).*",
            order: { type: "asc" },
          },
        ],
      },
    },
    // markdown
    markdown.configs.recommended,
  );
}

const config = createConfig();
export default config;
