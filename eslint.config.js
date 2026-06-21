import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', '.vite/**', '.claude/**'],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { react: reactPlugin },
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-no-literals': ['error', {
        allowedStrings: ['FP', '·'],
      }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: ['src/__tests__/**/*.{js,jsx}'],
    rules: {
      'react/jsx-no-literals': 'off',
    },
  },
]
