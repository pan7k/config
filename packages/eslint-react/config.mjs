import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import jsonc from "eslint-plugin-jsonc";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import sort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

/**
 * @typedef {Object} Options
 * @property {string[]} [projects] Array of TypeScript project tsconfig paths.
 */

/**
 * ESLint flat config for React / TypeScript projects.
 * Supports: JS/TS, React, JSON, Markdown, CSS.
 * Factory lets consumers override TS project globs.
 * @param {Options} [options]
 */
export function createConfig({ projects } = /** @type {Options} */ {}) {
  const resolvedProjects = projects ?? ["./tsconfig.json"];

  return [
    ...ts.config([
      {
        // base JS / TS (non type-aware rules)
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
        // type-aware TS (only where project files exist)
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
    ]),
    // markdown & css
    markdown.configs.recommended,
    css.configs.recommended,
  ];
}

const config = createConfig();
export default config;
