module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    // to support @/ path
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended', // eslint-config-prettier + eslint-plugin-prettier
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint', '@next/eslint-plugin-next'],
  rules: {
    'prettier/prettier': 'error', // Eslint rules
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    "jsx-a11y/anchor-is-valid": "off"
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.config.ts'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
}
