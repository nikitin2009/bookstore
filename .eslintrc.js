module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-alert': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-one-expression-per-line': 'off',
  },
};
