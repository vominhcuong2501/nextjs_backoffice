import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
})

const eslintConfig = [
    {
        ignores: [
            '**/node_modules/*',
            '**/.next/*',
            'next.config.mjs',
            '**/dist/*',
            'commitlint.config.js',
            'postcss.config.js',
            'prettier.config.js',
            'cache.js',
            'webpack.config.js'
        ]
    },
    ...compat.extends(
        'eslint:recommended',
        'plugin:import/recommended',
        'next/core-web-vitals',
        'eslint-config-prettier',
        'prettier'
    ),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
            prettier,
            import: importPlugin,
            'unused-imports': unusedImports
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true
            }
        },
        rules: {
            // TypeScript rules
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ],

            // General JS rules
            'prefer-const': 'warn',
            'import/no-duplicates': 'error',
            'react/react-in-jsx-scope': 'off',
            'no-console': 'error',
            'no-constant-binary-expression': 'error',
            'no-undef': 'off',
            'no-var': 'error',
            'import/newline-after-import': ['error', { count: 1 }],

            // Disabled rules
            'react-hooks/rules-of-hooks': 'off',
            'react-hooks/exhaustive-deps': 'off',

            // Padding line rules
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'export' },
                { blankLine: 'always', prev: '*', next: 'if' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: '*', next: 'while' },
                { blankLine: 'always', prev: '*', next: 'switch' },
                { blankLine: 'always', prev: '*', next: 'try' },
                { blankLine: 'always', prev: '*', next: 'block-like' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
                { blankLine: 'always', prev: 'block-like', next: 'block-like' },
                { blankLine: 'always', prev: 'block-like', next: 'return' },
                { blankLine: 'always', prev: 'block-like', next: 'export' },
                { blankLine: 'always', prev: 'block-like', next: 'if' },
                { blankLine: 'always', prev: 'block-like', next: 'for' },
                { blankLine: 'always', prev: 'block-like', next: 'while' },
                { blankLine: 'always', prev: 'block-like', next: 'switch' },
                { blankLine: 'always', prev: 'block-like', next: 'try' },
                { blankLine: 'always', prev: 'block-like', next: 'block-like' },
                { blankLine: 'always', prev: 'block-like', next: 'directive' },
                { blankLine: 'always', prev: 'directive', next: '*' },
                { blankLine: 'always', prev: 'directive', next: 'return' },
                { blankLine: 'always', prev: 'directive', next: 'export' },
                { blankLine: 'always', prev: 'directive', next: 'if' },
                { blankLine: 'always', prev: 'directive', next: 'for' },
                { blankLine: 'always', prev: 'directive', next: 'while' },
                { blankLine: 'always', prev: 'directive', next: 'switch' },
                { blankLine: 'always', prev: 'directive', next: 'try' },
                { blankLine: 'always', prev: 'directive', next: 'block-like' },
                { blankLine: 'always', prev: 'directive', next: 'import' }
            ],

            // Prettier rules
            'prettier/prettier': [
                'warn',
                {
                    arrowParens: 'always',
                    semi: false,
                    trailingComma: 'none',
                    tabWidth: 4,
                    endOfLine: 'auto',
                    useTabs: false,
                    singleQuote: true,
                    printWidth: 120,
                    jsxSingleQuote: true
                }
            ]
        }
    }
]

export default eslintConfig
