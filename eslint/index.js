import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

let config = [
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': eslintTypescript,
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      'no-var': 'error',
    },
  },
]

module.exports = config
