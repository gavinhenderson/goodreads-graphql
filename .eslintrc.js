module.exports = {
  env: {
    node: true,
  },
  extends: ["standard"],

  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "only-multiline"],
    semi: ["error", "always"],
    "space-before-function-paren": "off",
  },
};
