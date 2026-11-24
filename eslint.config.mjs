import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import unicorn from 'eslint-plugin-unicorn';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  {
    plugins: { unicorn },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }
      ],
      'prefer-const': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'unicorn/filename-case': ['error', { case: 'kebabCase' }]
    }
  },
  {
    // Root config files are CommonJS by design
    files: ['*.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts']
  }
];

export default eslintConfig;
