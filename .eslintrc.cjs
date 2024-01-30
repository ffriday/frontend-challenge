module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json', 'testconfig.ts'],
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
  },
};
