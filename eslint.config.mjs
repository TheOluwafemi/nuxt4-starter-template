// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'

export default withNuxt([
  {
    ignores: ['.vscode/*', 'dist', '.output', 'eslint.config.mjs'],
  },
  prettier,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      
      'vue/no-mutating-props': 'error',
      'vue/require-explicit-emits': 'warn',
      'vue/no-unused-properties': ['warn', { groups: ['props', 'data', 'computed', 'methods', 'setup'] }],
      'vue/no-unused-refs': 'warn',
      'vue/no-useless-template-attributes': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/no-template-shadow': 'error',
      'vue/no-ref-as-operand': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'separate-type-imports' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true, allowHigherOrderFunctions: true, allowTypedFunctionExpressions: true }]
    },
  },
  {
    files: ['pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
])