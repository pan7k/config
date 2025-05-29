import css from "@eslint/css";
import json from "@eslint/json";
import md from "@eslint/markdown";
import jsonc from "eslint-plugin-jsonc";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import sort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

/**
 * **ESLint flat config for React projects**
 *
 * Works with JavaScript, TypeScript, React, JSON, Markdown and CSS.
 * @see https://typescript-eslint.io/rules/
 */
export default ts.config([
  {
    // base
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
    // typescript
    files: ["**/*.{ts,mts,cts,tsx,mtsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: ts.parser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.*.json"],
      },
    },
    extends: [ts.configs.recommendedTypeChecked],
    rules: {
      "consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
      "explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
      "no-explicit-any": "warn",
      "no-unsafe-argument": "warn",
      "no-unsafe-assignment": "warn",
      "no-unsafe-call": "warn",
      "no-unsafe-member-access": "warn",
      "no-unsafe-return": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    // react
    files: ["**/*.{jsx,tsx,mjsx,mtsx}"],
    plugins: { react, hooks },
    settings: { react: { version: "detect" } },
    extends: [react.configs.flat.recommended, hooks.configs["recommended-latest"]],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
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
  {
    // markdown
    files: ["**/*.md"],
    language: "md/gfm",
    plugins: { md },
    extends: [md.configs.recommended],
  },
  {
    // css
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    extends: [css.configs.recommended],
  },
]);
