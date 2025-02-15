import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.config({
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    plugins: ['react', 'react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
