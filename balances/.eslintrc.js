let config = {
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single', {'allowTemplateLiterals': true}],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-undef': 'error'
  },
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'env': {
    'es6': true,
    'node': true
  }
}

module.exports = config;