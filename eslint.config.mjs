import path from 'path'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: path.resolve('./tsconfig.json'),
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      // Add your rules here
    },
    ignores: ['node_modules', 'dist'],
  },
]
