import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * **ESLint flat config for Next.js projects**
 *
 * @see https://nextjs.org/docs/app/api-reference/config/eslint
 */
export default [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
];
