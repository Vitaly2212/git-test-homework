export default {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
     "plugin:import/recommended",
     "standard",
     "prettier"
    ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: 'babel-eslint',
  },
  rules: {},
}
