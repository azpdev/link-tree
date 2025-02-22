export default [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    ignores: ["**/node_modules/**", "**/dist/**", ".pnpm-lock.yaml"],
    rules: {
      "prefer-const": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "capitalized-comments": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": "error",
      "no-trailing-spaces": "error",
      "no-irregular-whitespace": "error",
      camelcase: "error",
      eqeqeq: "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-magic-numbers": "error",
      "no-unused-expressions": "error",
      "no-console": "error",
    },
  },
];
