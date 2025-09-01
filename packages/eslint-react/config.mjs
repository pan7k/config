import css from "@eslint/css";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import jsonc from "eslint-plugin-jsonc";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import sort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

/**
 * @typedef {Object} ConfigOptions
 * @property {string[]} [projects] Array of tsconfig paths.
 */

/**
 * **ESLint flat config for React projects**
 *
 * Works with JavaScript, TypeScript, React, JSON, Markdown and CSS.
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
                "^u0000",
                "^react$",
                "^@?w",
                "^@",
                "^",
                "^./",
                "^.+.(module.css|module.scss)$",
                "^.+.(gif|png|svg|jpg)$",
              ],
            ],
          },
        ],
      },
    },
    {
      // type-aware overrides
      files: ["**/*.{ts,mts,cts,tsx,mtsx}"],
      extends: [ts.configs.recommendedTypeChecked],
      languageOptions: {
        globals: globals.browser,
        parser: ts.parser,
        parserOptions: {
          project: resolvedProjects,
        },
      },
      plugins: { "@typescript-eslint": ts.plugin },
      rules: {
        "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
    {
      // react
      files: ["**/*.{jsx,tsx,mjsx,mtsx}"],
      plugins: { react, hooks },
      settings: { react: { version: "detect" } },
      languageOptions: {
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
      rules: {
        ...react.configs.flat.recommended.rules,
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "hooks/rules-of-hooks": "error",
        "hooks/exhaustive-deps": "warn",
      },
    },

    {
      // json
      files: ["**/*.json"],
      ignores: ["**/package.json"],
      language: "json/json",
      plugins: { json, jsonc },
      rules: {
        "jsonc/sort-keys": ["warn", { pathPattern: ".*", order: { type: "asc" } }],
        "jsonc/sort-array-values": ["warn", { pathPattern: ".*", order: { type: "asc" } }],
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
    // markdown & css
    markdown.configs.recommended,
    css.configs.recommended,
  );
}

const config = createConfig();
export default config;
