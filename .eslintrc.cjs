module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:tailwindcss/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'react/react-in-jsx-scope': 'off',
    'tailwindcss/no-custom-classname': 'off'
  }
}
