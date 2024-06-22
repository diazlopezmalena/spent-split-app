/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  // Base config
  extends: ['eslint:recommended', 'plugin:storybook/recommended', 'standard', 'prettier'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'react/prop-types': [2, { ignore: ['className', 'onClick', 'position', 'value'] }],
        'react-refresh/only-export-components': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-console': 'warn',
        'react-hooks/rules-of-hooks': 'off'
      },
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
      ],
      settings: {
        react: {
          version: 'detect'
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' }
        ],
        'import/resolver': {
          typescript: {}
        }
      }
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-explicit-any': 'error'
      },
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx']
          },
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'standard',
        'prettier'
      ]
    },

    // Node
    {
      files: ['.eslintrc.js'],
      env: {
        node: true
      }
    },

    // Jest
    {
      files: ['**/*.test.{js,jsx,ts,tsx}'],
      env: {
        jest: true
      }
    }
  ]
}
