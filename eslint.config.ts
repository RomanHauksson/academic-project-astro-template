import js from "@eslint/js";
import globals from "globals";
import typescript from "typescript-eslint";
import react from "@eslint-react/eslint-plugin";
import astro from "eslint-plugin-astro";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { tailwind4 } from "tailwind-csstree";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/*", ".astro/*", ".vscode/*", "package-lock.json"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [typescript.configs.recommended],
  },
  {
    files: ["**/*.astro"],
    plugins: { astro },
    extends: [astro.configs.recommended],
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: [json.configs.recommended],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [react.configs["recommended-typescript"]],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: [markdown.configs.recommended],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    languageOptions: { customSyntax: tailwind4 },
    extends: [css.configs.recommended],
    rules: {
      // Disable rules that don't work well with Tailwind v4 syntax
      "css/no-invalid-at-rules": "off",
    },
  },
]);
