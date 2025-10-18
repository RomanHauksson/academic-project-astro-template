import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { tailwind4 } from "tailwind-csstree";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/*", ".astro/*", "package-lock.json"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  tseslint.configs.recommended,

  {
    files: ["**/*.astro"],
    plugins: { eslintPluginAstro },
    extends: [eslintPluginAstro.configs.recommended],
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [eslintReact.configs["recommended-typescript"]],
    // Configure language/parsing options
    languageOptions: {
      // Use TypeScript ESLint parser for TypeScript files
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // Custom rule overrides (modify rule levels or disable rules)
    // rules: {
    //   "@eslint-react/no-missing-key": "warn",
    // },
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    languageOptions: { customSyntax: tailwind4 },
    extends: ["css/recommended"],
  },
]);
