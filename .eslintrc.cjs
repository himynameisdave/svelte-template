module.exports = {
  root: true,
  extends: [
    'himynameisdave/configurations/core',
    'himynameisdave/configurations/node',
    // 'himynameisdave/configurations/import',
    'himynameisdave/configurations/svelte',
    'himynameisdave/configurations/typescript'
  ],
  ignorePatterns: [
    '*.cjs',
    'svelte.config.js',
    'playwright.config.ts',
    'vite.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte'],
    project: ['./tsconfig.json'],
  },
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/extensions': ['.ts', '.svelte'],
    'import/resolver': {
      typescript: {
        'alwaysTryTypes': true,
      },
    },
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    // 'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
  },
};
