module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'vue/multi-word-component-names': 'off',
    },
  }
  