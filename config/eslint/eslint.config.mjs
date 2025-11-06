import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    jsxA11yPlugin.flatConfigs.recommended,
    prettierConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            import: importPlugin,
            'react-hooks': reactHooksPlugin,
            '@next/next': nextPlugin
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            'react/display-name': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/non-nullable-type-assertion-style': 'off',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: {
                        attributes: false
                    }
                }
            ],
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type'
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before'
                        },
                        {
                            pattern: 'react**',
                            group: 'external',
                            position: 'before'
                        },
                        {
                            pattern: 'app/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: 'pages/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: 'widgets/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: 'features/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: 'entities/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: 'shared/**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: '../**',
                            group: 'internal',
                            position: 'before'
                        },
                        {
                            pattern: '../../**',
                            group: 'internal',
                            position: 'before'
                        }
                    ],
                    pathGroupsExcludedImportTypes: [
                        'react',
                        'app',
                        'pages',
                        'widgets',
                        'features',
                        'entities',
                        'shared',
                        'type'
                    ]
                }
            ]
        }
    },
    {
        ignores: ['node_modules/', 'config/', '.next']
    }
)
