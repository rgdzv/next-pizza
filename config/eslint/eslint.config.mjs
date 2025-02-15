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
    // reactHooksPlugin.configs.flat.recommended,   <= uncomment when flat config for reactHooksPlugin is released
    // nextPlugin.configs.flat.recommended,   <= uncomment when flat config for nextPlugin is released
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
            'react-hooks': reactHooksPlugin, // delete when flat config for reactHooksPlugin is released
            '@next/next': nextPlugin // delete when flat config for nextPlugin is released
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules, // delete when flat config for reactHooksPlugin is released
            ...nextPlugin.configs.recommended.rules, // delete when flat config for nextPlugin is released
            ...nextPlugin.configs['core-web-vitals'].rules, // delete when flat config for nextPlugin is released
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            "@typescript-eslint/non-nullable-type-assertion-style": "off",
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
                    ]
                }
            ]
        }
    },
    {
        ignores: ['node_modules/', 'config/', '.next']
    }
)
