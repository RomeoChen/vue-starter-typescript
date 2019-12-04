module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': ['warn', 'always', { null: 'ignore', }, ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'comma-dangle': ['warn', 'always-multiline', ],
    'semi': ['warn', 'always', ],
    'space-before-function-paren': ['warn', 'never'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
